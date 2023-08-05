import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    server: {
        port: 8080,
        hot: true
    },
    plugins: [
        react({
            include: 'src/**/*.{jsx,tsx}',
        }),
    ],
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
            '~bootstrap-icons': path.resolve(__dirname, 'node_modules/bootstrap-icons'),
        }
    },
});