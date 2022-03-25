import { resolve } from 'path'
import Unocss from 'unocss/vite'
import Inspect from 'vite-plugin-inspect'
import { defineUserConfig } from 'vuepress'
import AutoImport from 'unplugin-auto-import/vite'

export default defineUserConfig({
	lang: 'zh-CN',
	title: 'MShared',
	base: '/MShared/',
	head: [
		[
			'link',
			{ rel: 'icon', href: '/MShared/images/logo.svg' }
		]
	],
	markdown: {
		code: {
			lineNumbers: false
		}
	},
	description: '基于 vuepress 的文档模板',
	themeConfig: {
		logo: '/images/logo.svg',
		sidebar: {
			'/nuxt3/': [
				{
					text: '起步',
					children: [
						'/nuxt3/start/introduce.md',
						'/nuxt3/start/install.md'
					]
				},
				{
					text: '特性',
					children: [
						'/nuxt3/features/auto-imports.md',
						'/nuxt3/features/file-routes.md',
						'/nuxt3/features/layout-system.md'
					]
				}
			],
			'/about/': [
				{
					children: ['/about/index.md']
				}
			]
		},
		navbar: [
			{
				text: 'Nuxt3',
				link: '/nuxt3/start/introduce'
			},
			{
				text: 'About',
				link: '/about/'
			},
			{
				text: 'Gitee',
				link: 'https://gitee.com/dishait/MShared'
			},
			{
				text: 'GitHub',
				link: 'https://github.com/dishait/MShared'
			}
		]
	},
	theme: resolve(__dirname, './theme/index.ts'),
	alias: {
		'~': resolve(__dirname, '../'),
		'~u': resolve(__dirname, './composables')
	},
	plugins: [
		[
			'@vuepress/register-components',
			{
				componentsDir: resolve(__dirname, './components')
			}
		],
		[
			'@vuepress/plugin-search',
			{
				locales: {
					'/': {
						placeholder: 'Search'
					}
				}
			}
		]
	],
	bundlerConfig: {
		viteOptions: {
			plugins: [
				Inspect(),
				Unocss({
					mode: 'per-module'
				}),
				AutoImport({
					dts: resolve(
						__dirname,
						'./types/auto-imports.d.ts'
					),
					imports: ['vue', 'vue-router', '@vueuse/core']
				})
			]
		}
	}
})