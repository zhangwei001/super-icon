// https://d.umijs.org/zh-CN/config
export default {
  mode: 'site',
  title: 'Super Icon',
  logo: 'https://lzd-img-global.slatic.net/us/media/8dac6fd20ee7855294e265f840806811-200-200.svg',
  favicon:
    'https://lzd-img-global.slatic.net/us/media/8dac6fd20ee7855294e265f840806811-200-200.svg',
  navs: [
    {
      title: '共建规范',
      path: 'https://aliyuque.antfin.com/basic-business/gp447q/zh7tqg2mcxzphg5u',
    },
    {
      title: 'CHANGELOG',
      path: 'https://aliyuque.antfin.com/basic-business/gp447q/nmwi3c8vlrtfmkg4',
    },
    {
      title: '反馈建议',
      path: 'https://code.alibaba-inc.com/infinite-ui/super-icon/issues',
    },
  ],
  alias: {
    demos: process.cwd() + '/src/demosComponents/index.ts',
    components: process.cwd() + '/src/icons-react/index.ts',
  },
  resolve: {
    includes: ['docs', 'src'],
    passivePreview: true,
  },
  exportStatic: {
    htmlSuffix: true,
    dynamicRoot: true,
  },
  terserOptions: {
    keep_fnames: true,
  },
};
