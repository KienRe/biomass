/**
 * Pre-deployment Check Script
 * 
 * This script performs a series of checks before allowing deployment:
 * - Verifies deployment is being done from the main branch
 * - Checks for any uncommitted changes
 * - Ensures local main branch is up-to-date with origin
 * - Validates that the latest GitHub Actions workflow run was successful
 * 
 * If any check fails, the script exits with an error code (1).
 * If all checks pass, it exits with success code (0).
 */

const {execSync} = require("child_process");
const https = require("https");

function runCommand(command)
{
    try
    {
        return execSync(command, {
            encoding: "utf8",
            stdio: ["pipe", "pipe", "pipe"],
        }).trim();
    }
    catch (error)
    {
        console.error("❌ Error:", error.message);
        process.exit(1);
    }
}

function getLatestWorkflowStatus()
{
    return new Promise((resolve, reject) =>
    {
        const remoteUrl = runCommand("git remote get-url origin");
        const [owner, repo] = remoteUrl
            .replace("https://github.com/", "")
            .replace(".git", "")
            .split("/");

        const options = {
            hostname: "api.github.com",
            path: `/repos/${owner}/${repo}/actions/runs?branch=main&per_page=1`,
            headers: {
                "User-Agent": "Node.js",
            },
        };

        https
            .get(options, (res) =>
            {
                let data = "";
                res.on("data", (chunk) => { return (data += chunk); });
                res.on("end", () =>
                {
                    const response = JSON.parse(data);
                    if (response.workflow_runs && response.workflow_runs.length > 0)
                    {
                        const latestRun = response.workflow_runs[0];
                        resolve({
                            status: latestRun.conclusion,
                            url: latestRun.html_url,
                        });
                    }
                    else
                    {
                        reject(new Error("No workflow runs found"));
                    }
                });
            })
            .on("error", reject);
    });
}

async function main()
{
    try
    {
    // Check if we're on main branch
        const currentBranch = runCommand("git rev-parse --abbrev-ref HEAD");
        if (currentBranch !== "main")
        {
            console.error("❌ Error: Must deploy from main branch");
            process.exit(1);
        }

        // Check for uncommitted changes
        const gitStatus = runCommand("git status --porcelain");
        if (gitStatus !== "")
        {
            console.error("❌ Error: You have uncommitted changes. Please commit or stash them first",);
            process.exit(1);
        }

        // Fetch latest changes
        console.log("📥 Fetching latest changes...");
        runCommand("git fetch origin main");

        // Check if we're behind origin/main
        const behind = runCommand("git rev-list HEAD..origin/main --count");
        if (behind !== "0")
        {
            console.error("❌ Error: Your main branch is behind origin/main. Please pull latest changes",);
            process.exit(1);
        }

        // Check GitHub Actions status
        console.log("🔍 Checking GitHub Actions status...");
        const {status: workflowStatus, url: workflowUrl} =
      await getLatestWorkflowStatus();

        if (workflowStatus !== "success")
        {
            console.error(`❌ Error: Latest GitHub Actions workflow ${workflowStatus || "did not complete successfully"}`,);
            console.error(`👉 Check the workflow: ${workflowUrl}`);
            process.exit(1);
        }

        console.log("✅ All checks passed! Proceeding with deployment...");
        process.exit(0);
    }
    catch (error)
    {
        console.error("❌ Error:", error.message);
        process.exit(1);
    }
}

main();
