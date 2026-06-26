const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGithubActions ? '/MDCSP' : '',
  assetPrefix: isGithubActions ? '/MDCSP/' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? '/MDCSP' : '',
    NEXT_PUBLIC_SITE_URL: isGithubActions
      ? 'https://mdcspnestorfrontera.github.io/MDCSP'
      : 'http://localhost:3000',
  },
};

module.exports = nextConfig;
