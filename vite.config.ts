import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    server: {
        proxy: {
            '/api': {
                target: 'localhost:8085', // 실제 API 서버 주소
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, ''), // 경로 재작성
            },
        },
    },
});
