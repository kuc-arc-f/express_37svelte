import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import buildCommon from './src/lib/buildCommon';
//
const directoryPath = './src/client';
//@ts-ignore
export default defineConfig(async ({ mode }) => {
  if (mode === 'client') {
    const entryFiles = await buildCommon.getEntryItems(directoryPath);
    //console.log(entryFiles);
    //
    return {
      plugins: [svelte()], 
      build: {
        lib: {
          entry: entryFiles,
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
