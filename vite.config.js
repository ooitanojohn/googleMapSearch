import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173,
    hmr:
      process.env.GITPOD_WORKSPACE_ID
        ? 443
        : undefined,
  },
});
