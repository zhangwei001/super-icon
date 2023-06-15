import { defineConfig } from 'dumi';
import path from 'path';
export default defineConfig({
    mode: 'site',
    title: 'Super Icon',
    themeConfig:{
        logo: 'https://lzd-img-global.slatic.net/us/media/8dac6fd20ee7855294e265f840806811-200-200.svg',
        favicon:
          'https://lzd-img-global.slatic.net/us/media/8dac6fd20ee7855294e265f840806811-200-200.svg',
    },
		favicons: ['https://lzd-img-global.slatic.net/us/media/8dac6fd20ee7855294e265f840806811-200-200.svg'],
    navs: [
      {
        title: '共建规范',
        path: '/standard',
      },
      {
        title: 'CHANGELOG',
        path: './docs/guide/index.md',
      },
      {
        title: '反馈建议',
        path: 'https://code.alibaba-inc.com/infinite-ui/super-icon/issues',
      },
    ],
    alias: {
      // 'infinite-webui/lib/index.less': process.cwd() + '/src/index.less',
      demos: process.cwd() + '/src/demosComponents/index.ts',
      components: process.cwd() + '/src/index.ts',
			pkg: path.join(__dirname, 'packages/pkg/src')
    },
		resolve: {
			atomDirs: [
				{ type: 'component', dir: 'src' }, // 默认值
	      { type: 'component', dir: 'src/icons-react/' },
			]
		},
		docDirs: ['docs'],
    exportStatic: {
      htmlSuffix: true,
      dynamicRoot: true,
    },
    terserOptions: {
      keep_fnames: true,
    },
  })
  