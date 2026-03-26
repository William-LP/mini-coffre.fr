import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    basePath: "/mini-coffre.fr",
    assetPrefix: "/mini-coffre.fr",
    output: "export",
    images: {
        unoptimized: true
    }
};

export default nextConfig;
