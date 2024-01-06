const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath:'/portfolio-vue/',
  outputDir:'docs',
  // outputDir: 빌드한 파일을 저장하는 경로, docs 폴더로 지정한다.
  // publicPath: 배포된 페이지의 URL 설정.
})
