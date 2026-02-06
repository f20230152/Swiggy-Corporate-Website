import type { NextConfig } from "next";

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const repoName =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ||
  process.env.GITHUB_REPOSITORY ||
  "";
const ghPagesBase =
  process.env.GITHUB_ACTIONS === "true" && repoName ? `/${repoName}` : "";
const normalizedBasePath = rawBasePath
  ? `/${rawBasePath.replace(/^\/+|\/+$/g, "")}`
  : ghPagesBase;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: normalizedBasePath || undefined,
  assetPrefix: normalizedBasePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
