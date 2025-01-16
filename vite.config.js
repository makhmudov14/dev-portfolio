import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer'; // Optional for bundle analysis

export default defineConfig({
  plugins: [
    react(),
    // Optional: Add the visualizer plugin to analyze the bundle
    visualizer({ open: true, filename: 'stats.html' }),
  ],
  build: {
    rollupOptions: {
      output: {
        // Manually split chunks for large dependencies
        manualChunks: {
          vendor: ['react', 'react-dom'], // Example: Create a vendor chunk for React libraries
        },
      },
    },
    // Adjust chunk size warning limit (e.g., to 1MB)
    chunkSizeWarningLimit: 1000, 
  },
});
