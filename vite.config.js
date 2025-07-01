// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

   resolve: {
    alias: {
      "@": "/src",
      "@app": "/src/app",
      "@data": "/src/data",
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@features": "/src/features",
      // "@hooks": "/src/hooks",
      "@pages": "/src/pages",
      "@providers": "/src/providers",
      "@router": "/src/router",
      // "@util": "/src/util",
      // "@lib": "/src/lib",
    },
  },
})
