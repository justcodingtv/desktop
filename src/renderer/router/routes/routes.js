const routeFiles = require.context('.', false, /\.js$/)

/**
 * Routes array
 */
let routes = [];

/**
 * Loop through all the files
 */
routeFiles.keys().forEach((fileName) => {
    /**
     * Check if the file name is not this file
     */
    if (fileName !== './routes.js') {
        const routesOfFile = routeFiles(fileName).default;

        /**
         * Try to add the routes
         */
        try {
            routesOfFile.forEach((route) => {
                routes.push(route)
            })
        } catch (e) {
            console.warn('Could not load ' + fileName.replace('./', '') + " as a route file.")
            console.error(e)
        }
    }
})

/**
 * These routes are important and should be the last in the array
 */
const importantRoutes = [
    {
        path: '*',
        redirect: '/'
    }
]

importantRoutes.forEach((route) => {
    routes.push(route)
})

export default routes