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
	},
	{
		path: '/groups',
		name: 'Groups',
		meta: { layout: 'main' },
		component: () => import('@/views/Groups')
	},
	{
		path: '/tasks',
		name: 'Tasks',
		meta: { layout: 'main' },
		component: () => import('@/views/Tasks')
	},
	{
		path: '/projects',
		name: 'Projects',
		meta: { layout: 'main' },
		component: () => import('@/views/Projects')
	},
	{
		path: '/contacts',
		name: 'Contacts',
		meta: { layout: 'main' },
		component: () => import('@/views/Contacts')
	},
	{
		path: '/statistics',
		name: 'Statistics',
		meta: { layout: 'main' },
		component: () => import('@/views/statistics/Statistics'),
	},
	{
		path: '/statistics/tasks',
		name: 'StatisticsTasks',
		meta: { layout: 'main' },
		component: () => import('@/views/statistics/StatisticsTasks'),
	},
	{
		path: '/statistics/projects',
		name: 'StatisticsProjects',
		meta: { layout: 'main' },
		component: () => import('@/views/statistics/StatisticsProjects'),
	}
]

export default routes