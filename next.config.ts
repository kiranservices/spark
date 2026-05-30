import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const hasCustomDomain = process.env.GITHUB_PAGES_CUSTOM_DOMAIN === "true";
const repoName = process.env.NEXT_PUBLIC_GITHUB_REPOSITORY_NAME ?? "spark";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGithubPages && !hasCustomDomain ? `/${repoName}` : "",
  assetPrefix: isGithubPages && !hasCustomDomain ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
