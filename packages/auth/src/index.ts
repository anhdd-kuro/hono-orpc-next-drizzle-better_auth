import { db } from "@hono-orpc-next-drizzle-better_auth/db";
import * as schema from "@hono-orpc-next-drizzle-better_auth/db/schema/auth";
import { env } from "@hono-orpc-next-drizzle-better_auth/env/server";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",

    schema: schema,
  }),
  trustedOrigins: [env.CORS_ORIGIN],
  emailAndPassword: {
    enabled: true,
  },
  advanced: {
    defaultCookieAttributes: {
      sameSite: "none",
      secure: true,
      httpOnly: true,
    },
  },
  plugins: [],
});
