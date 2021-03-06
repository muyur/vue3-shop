const prodPlugins = []
if (process.env.NODE_ENV === 'production') {
  prodPlugins.push('transform-remove-console')
}
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-plus',
        styleLibraryName: 'theme-chalk'
      },
      // 发布成品时候的插件数组
      ...prodPlugins,
      // '@babel/plugin-syntax-dynamic-import'
    ]
  ]
}
