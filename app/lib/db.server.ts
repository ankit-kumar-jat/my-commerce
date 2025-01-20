import { remember } from "@epic-web/remember";
import { PrismaClient } from "@prisma/client";

export const db = remember("prisma", () => {
  // NOTE: if you change anything in this function you'll need to restart
  // the dev server to see your changes.

  const logThreshold = 50;

  const client = new PrismaClient({
    log: [
      { level: "query", emit: "event" },
      { level: "error", emit: "stdout" },
      { level: "warn", emit: "stdout" },
    ],

    // skip password field by default to prevent accidental leaks
    omit: {
      user: {
        password: true,
      },
    },
  });

  client.$on("query", async (e) => {
    if (e.duration < logThreshold) return;

    console.info(`prisma:query - ${e.duration}ms - ${e.query}`);
  });

  void client.$connect();
  return client;
});
