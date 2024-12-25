const fs = require('fs').promises;
const path = require('path');
const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Files to exclude from processing
const excludedFiles = [
    'node_modules',
    '.git',
    'setup.js',
    'dist',
    'build'
];

// Function to check if path should be excluded
const shouldExclude = (filePath) => {
    return excludedFiles.some(excluded => filePath.includes(excluded));
};

// Function to recursively process files in a directory
async function processDirectory(dirPath, projectName) {
    try {
        const files = await fs.readdir(dirPath);

        for (const file of files) {
            const fullPath = path.join(dirPath, file);
            const stats = await fs.stat(fullPath);

            if (shouldExclude(fullPath)) {
                continue;
            }

            if (stats.isDirectory()) {
                await processDirectory(fullPath, projectName);
            } else {
                await processFile(fullPath, projectName);
            }
        }
    } catch (error) {
        console.error(`Error processing directory ${dirPath}:`, error);
    }
}

// Function to process a single file
async function processFile(filePath, projectName) {
    try {
        // Read file content
        const content = await fs.readFile(filePath, 'utf8');
        
        // Check if file contains the template variable
        if (content.includes('{{PROJECT_NAME}}')) {
            console.log(`Processing: ${filePath}`);
            
            // Replace template variable with project name
            const updatedContent = content.replace(/{{PROJECT_NAME}}/g, projectName);
            
            // Write back to file
            await fs.writeFile(filePath, updatedContent, 'utf8');
            console.log(`Updated: ${filePath}`);
        }
    } catch (error) {
        console.error(`Error processing file ${filePath}:`, error);
    }
}

// Main function
async function main() {
    rl.question('Enter your project name: ', async (projectName) => {
        console.log(`Setting up project: ${projectName}`);
        
        try {
            // Get the directory where the script is running
            const currentDir = process.cwd();
            await processDirectory(currentDir, projectName);
            console.log('Project setup completed successfully!');
        } catch (error) {
            console.error('Error during project setup:', error);
        } finally {
            rl.close();
        }
    });
}

// Run the script
main();