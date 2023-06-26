import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
// import basicSsl from '@vitejs/plugin-basic-ssl'
import fs from 'fs';
// import dotenv from "dotenv";
import reactRefresh from "@vitejs/plugin-react-refresh";

// dotenv.config()

// https://vitejs.dev/config/
export default ({mode}) => {

  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  
  return defineConfig({
      server: {
        host: true,
        https: {
          // key: fs.readFileSync("C:/Windows/System32/cert.key"),
          // cert: fs.readFileSync("C:/Windows/System32/cert.crt"),
          key: fs.readFileSync(process.env.VITE_APP_SSL_KEY_PATH),
          cert: fs.readFileSync(process.env.VITE_APP_SSL_CERT_PATH),
          // key: fs.readFileSync("/etc/letsencrypt/live/anthony-fieve.fr/privkey.pem"),
          // cert: fs.readFileSync("/etc/letsencrypt/live/anthony-fieve.fr/fullchain.pem")
        }
      },
      plugins: [
        react(),
        reactRefresh() 
        // basicSsl()
      ]
  });
}

// export default defineConfig({
//   server: {
//     host: true,
//     https: {
//       // key: fs.readFileSync("C:/Windows/System32/cert.key"),
//       key: fs.readFileSync(process.env.VITE_APP_SSL_CERT_PATH),
//       // cert: fs.readFileSync("C:/Windows/System32/cert.crt"),
//       cert: fs.readFileSync("C:/Windows/System32/cert.crt"),
//       // key: fs.readFileSync("/etc/letsencrypt/live/anthony-fieve.fr/privkey.pem"),
//       // cert: fs.readFileSync("/etc/letsencrypt/live/anthony-fieve.fr/fullchain.pem")
//     }
//   },
//   plugins: [
//     react(),
//     reactRefresh() 
//     // basicSsl()
//   ]
// })


// export default defineConfig(({ command, mode }) => {
//   // Load env file based on `mode` in the current working directory.
//   // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
//   const env = loadEnv(mode, process.cwd(), '')
//   console.log(env.SERVER_IP);
//   return {
//     // vite config
//     define: {
//       __SERVER_IP__: env.SERVER_IP,
//     },
//     server: {
//       host: true,
//       https: {
//         key: fs.readFileSync("C:/Windows/System32/cert.key"),
//         cert: fs.readFileSync("C:/Windows/System32/cert.crt"),
//         // key: fs.readFileSync("/etc/letsencrypt/live/anthony-fieve.fr/privkey.pem"),
//         // cert: fs.readFileSync("/etc/letsencrypt/live/anthony-fieve.fr/fullchain.pem")
//       }
//     },
//     plugins: [
//       react(),
//       // reactRefresh() 
//       // basicSsl()
//     ]
//   }
// })