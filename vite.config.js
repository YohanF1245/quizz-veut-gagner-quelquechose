import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    server: {
      host: 'localhost',
      port: 3000,
      https: false, // assurez-vous que cela est réglé sur false
    },
    plugins: [react()],
    base: '/',
  }

  if (command !== 'serve') {
    config.base = '/quizz-veut-gagner-quelquechose/'
  }

  // return config
  // server: {
  //   host: 'localhost',
  //   port: 3000,
  //   https: false, // assurez-vous que cela est réglé sur false
  // },
  // plugins: [react()],
})
