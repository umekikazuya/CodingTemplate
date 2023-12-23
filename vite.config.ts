import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: `${__dirname}/src/` },
      { find: '~/', replacement: `${__dirname}/src/public` },
    ],
  },
  plugins: [
    react(),
    tsconfigPaths(),
  ],
})
