import "@hono-orpc-next-drizzle-better_auth/env/web";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  reactCompiler: true,
};

export default nextConfig;
