const routes = [
	{
		path: '/',
		name: 'Home',
		meta: { layout: 'main' },
		component: () => import('@/views/Home')
	},
	{
		path: '/Login',
		name: 'Login',
		meta: { layout: 'auth' },
		component: () => import('@/views/auth/Login')
	},
	{
		path: '/Register',
		name: 'Register',
		meta: { layout: 'auth' },
		component: () => import('@/views/auth/Register')
	}
]

export default routes