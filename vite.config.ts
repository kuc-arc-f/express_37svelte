import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import fs from "fs";
//
const directoryPath = './src/client';
const targetFiles = [];
//
//
export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        console.error('Error reading directory:', err);
        return;
      }
      files.forEach(file => {
        const vEnd = file.endsWith(".ts");
        if(vEnd) {
         targetFiles.push( "./src/client/" + file);
        }
      });
    });
    return {
      plugins: [svelte()], 
      build: {
        lib: {
          entry: targetFiles,
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
/*
*/
