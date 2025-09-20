import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig( ( { mode } ) => {
    return {

        plugins: [ react() ],
        build: {
            // Cambia la carpeta de salida dependiendo del modo
            outDir: mode === 'production' ? 'dist_prod' : 'dist_dev'
        }
    }
} )
