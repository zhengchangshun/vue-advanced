const NotFound = () => import( `@components/layout/404` ) // 设置404
const Layout = () => import( `@components/layout/Layout` )
const requirePage = require.context(`@view`, true, /(.*)\.vue$/, 'lazy')

const pages = {
    NotFound,
    undefined,
    Layout
}
requirePage.keys().forEach(fileName => {
    const pageName = fileName.replace(/^\..*\/(.*)\.\w+$/, `$1`)
    const comp = () => requirePage(fileName)
    pages[pageName] = comp
})

export default pages
