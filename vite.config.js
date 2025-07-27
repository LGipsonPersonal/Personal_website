import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  base: './', // Use './' for relative paths
  plugins: [svelte()],
  resolve: {
    alias: {
      $lib: path.resolve(__dirname, "./src/lib"),
      $assets: path.resolve(__dirname, "./src/assets")
    },
  },
