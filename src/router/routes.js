const routes = [
	{
		path: '/',
		name: 'Home',
		meta: { layout: 'main' },
		component: () => import('@/views/Home')
	},
	{
		path: '/login',
		name: 'Login',
		meta: { layout: 'auth' },
		component: () => import('@/views/auth/Login')
	},
	{
		path: '/register',
		name: 'Register',
		meta: { layout: 'auth' },
		component: () => import('@/views/auth/Register')
	},
	{
		path: '/settings',
		name: 'Settings',
		meta: { layout: 'main' },
		component: () => import('@/views/Settings')
	},
	{
		path: '/notifications',
		name: 'Notifications',
		meta: { layout: 'main' },
		component: () => import('@/views/Notifications')
	}
]

export default routes