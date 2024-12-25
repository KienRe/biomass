import type {NextConfig} from "next";

const nextConfig: NextConfig =
{
    output: "export",
    basePath: process.env.NODE_ENV === "production" ? "/{{PROJECT_NAME}}" : "",
    assetPrefix: process.env.NODE_ENV === "production" ? "/{{PROJECT_NAME}}" : "",

    // Basic Optimizations
    compress: true,
    poweredByHeader: false,

    // Image Optimization
    images:
    {unoptimized: true}
};

export default nextConfig;
