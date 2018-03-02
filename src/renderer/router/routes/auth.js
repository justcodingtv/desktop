export default [
    {
        name: 'auth.login',
        path: 'auth/login',
        component: require('@/components/Auth/Login').default
    },
    {
        name: 'auth.register',
        path: 'auth/register',
        component: require('@/components/Auth/Register').default
    }
]