import { join } from 'path'
import { myCustomTheme } from './custom-theme'
import type { Config } from 'tailwindcss'

import { skeleton } from '@skeletonlabs/tw-plugin'

const config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(
			require.resolve('@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],

	theme: {
		extend: {}
	},

	plugins: [
		skeleton({
			themes: {
				custom: [myCustomTheme]
			}
		})
	]
} satisfies Config

export default config
