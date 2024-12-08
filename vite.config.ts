import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';

const options = {
// 	 resolve: {
  //   alias: {
  //     '@monokai/monoco': path.resolve(__dirname, '/node_modules/@monokai/monoco/dist/index.mjs'),
  //   },
  // },
}

export default defineConfig(({ command, mode }) => {
	if (command === 'serve') {
		// Dev config
		return {
			...options,
			plugins: [
				react()
			],
			root: path.resolve(__dirname, 'dev'),
			build: {
				outDir: path.resolve(__dirname, 'dist'),
			},
		};
	} else {
		// Build config
		return {
			...options,
			plugins: [
				react(),
				dts()
			],
			build: {
				lib: {
					entry: path.resolve(__dirname, 'src/index.ts'),
					name: 'Monoco',
					formats: ['es', 'umd'],
					fileName: (format) => `index.${format}.js`
				},
				rollupOptions: {
					external: ['react', 'react-dom'],
					output: {
						globals: {
							react: 'React',
							'react-dom': 'ReactDOM'
						}
					}
				}
			}
		};
	}
});