import { execSync } from "node:child_process";

/**
 * Build para Vercel: usa vite.config.vercel.ts (sem plugins Manus),
 * emitindo o bundle em client/dist (outputDirectory do vercel.json).
 */
execSync("vite build --config vite.config.vercel.ts", {
  stdio: "inherit",
  cwd: import.meta.dirname,
});

console.log("\n✅ Build concluído em client/dist");
