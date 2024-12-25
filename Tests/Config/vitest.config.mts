/// <reference types="vitest" />
import path from "path";
import react from "@vitejs/plugin-react";
import {defineConfig} from "vitest/config";

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: ["./Tests/Config/vitest.setup.mts"],
        include: ["Tests/**/*.test.{ts,tsx}"],
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "../../src"),
        },
    },
});
