import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs';
import reactRefresh from "@vitejs/plugin-react-refresh";

export default ({mode}) => {

  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  
  return defineConfig({
      server: {
        host: true,
        https: {
          key: fs.readFileSync(process.env.VITE_APP_SSL_KEY_PATH),
          cert: fs.readFileSync(process.env.VITE_APP_SSL_CERT_PATH),
        }
      },
      plugins: [
        react(),
        reactRefresh() 
      ]
  });
}