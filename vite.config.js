import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import zipPack from 'vite-plugin-zip-pack'; // 壓縮用
import dayjs from 'dayjs'; //配合壓縮zip檔名 使用日期時間

const todayString = dayjs().format('YYYYMMDDHHmm');

// https://vitejs.dev/config/
export default defineConfig({
    base: './', // 使用相對路徑以免拉拉熊找不到圖機
    plugins: [
        react({
            
        }),
        zipPack({
            inDir: 'dist',
            outDir: 'build-zip',
            outFileName: `active-${todayString}.zip`,
        }),
        svgr(),
    ],
    server: {
        host: '127.0.0.1',
        port: 3000,
    },
})
