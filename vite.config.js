import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  resolve: {
    // alias: {
    //   stream: "stream-browserify",
    // },
  },

  plugins: [
    react(),
    // NodeGlobalsPolyfillPlugin({
    //   buffer: true,
    // }),
    nodePolyfills(),
  ],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 8080, // replace this port with any number you want
  },
  define: {
    // By default, Vite doesn't include shims for NodeJS/
    // necessary for segment analytics lib to work
    global: {},
    "process.env": process.env,
    "process.browser": true,
  },
});
