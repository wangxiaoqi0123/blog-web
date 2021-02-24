// 项目静态路由--所有用户都拥有权限访问
export const constantRoutes = [
  { path: '/', redirect: { path: "/home" } },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home'),
    meta: {
      title: 'rolePermission'
    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/detail'),
    meta: {
      title: 'rolePermission'
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/admin'),
    meta: {
      title: 'rolePermission'
    }
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('../views/add'),
    meta: {
      title: 'rolePermission'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login'),
    meta: {
      title: 'rolePermission'
    }
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import('../views/error')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/test')
  }
]