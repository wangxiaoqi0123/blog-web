import Vue from 'vue'
import Vuex from 'vuex'

const requireContext = require.context('./modules', false, /\.js$/)
const modules = requireContext.keys().reduce((modules, fileName) => {
  // 使用文件名称作为vuex模块名称
  const moduleName = fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = requireContext(fileName)
  modules[moduleName] = value.default
  return modules
}, {})

Vue.use(Vuex)

export default new Vuex.Store({
  modules
})
