import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // 相対パスで読み込めるようにする（Vercelで画像が表示される）
})
