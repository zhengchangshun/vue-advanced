export const getRoutes = () => {
    const routes = (req => {
        let alls = req
            .keys()
            .map(key => req(key).default)

        let results = [];
        alls.forEach(item => item.map(v => results.push(v)))
        return results;
    })(require.context('./', true, /\-route\.js$/))

    return routes
}
