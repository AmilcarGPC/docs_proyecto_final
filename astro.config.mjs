// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Documentación Equipo 3',
			sidebar: [
				{
					label: 'Estándares',
					items: [
					  { label: 'Estándar de Codificación', autogenerate: { directory: 'standards/coding/' } },
					  { label: 'Estándar de Conteo', slug: 'standards/counting/estandar_conteo' },
					]
				}
			],
		}),
	],
});