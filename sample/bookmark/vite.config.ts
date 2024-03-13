import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
//
export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      plugins: [svelte()], 
      build: {
        lib: {
          entry: [
            './src/main.ts',
            './src/client/Test.ts',
            './src/client/TestShow.ts',
            './src/client/TestApi.ts',
            './src/client/About.ts',
            './src/client/BookMark.ts',
            './src/client/BookMarkShow.ts',
          ],
          formats: ['es'],
          fileName: '[name]',
        },
        rollupOptions: {
          output: {
            dir: './public/static'
          }
        },
        emptyOutDir: false,
        copyPublicDir: false
      }
    }
  } else {
    return {
      plugins: [svelte()]
    }
  }
})
