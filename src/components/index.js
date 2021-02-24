import Vue from 'vue';
const requireContext = require.context('./', false, /\.vue$/)
requireContext.keys().forEach(fileName => {
  const requireModule = requireContext(fileName)
  const componentModule = requireModule.default || requireModule
  // 使用文件名称作为组件名称
  const componentName = fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
  Vue.component(componentName, componentModule)
});