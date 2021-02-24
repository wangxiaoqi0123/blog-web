// 动态路由 -- 根据用户角色匹配的路由
// 动态路由自动化引入
let routers = []
const requireContext = require.context('./modules', false, /\.js$/)
requireContext.keys().forEach(fileName => {
  const routerModule = requireContext(fileName)
  routers = [...routers, ...(routerModule.default || routerModule)]
});
export const asyncRoutes = routers || []