/**
 * 注意
 *  1. api中的Server文件只能使用 export 导出
 *  2. 类名要与文件名相同
 *  3. Server文件中只能有一个export
 */

const requireContext = require.context('./', false, /\.js$/)
const modules = requireContext.keys().reduce((modules, fileName) => {
  const moduleName = fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = requireContext(fileName)
  if (fileName !== './index.js') {
    modules[moduleName] = value[moduleName]
  }
  return modules
}, {})
module.exports = modules