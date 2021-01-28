/**
 * @param {string} url
 * @returns {Object} 从URL中得到参数对象
 */
export function getQueryObject(url) {
    url = url == null ? window.location.href : url
    const search = url.substring(url.lastIndexOf(`?`) + 1)
    const obj = {}
    const reg = /([^?&=]+)=([^?&=]*)/g
    search.replace(reg, (rs, $1, $2) => {
        const name = decodeURIComponent($1)
        let val = decodeURIComponent($2)
        val = String(val)
        obj[name] = val
        return rs
    })
    return obj
}


/**
 * 首字符大写
 */
export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

/**
 * 获取当前Url的hash路由
 */
export const getHashPath = () => window.location.hash.split('#')[1].split('?')[0]

/**
 * 获取树状结构 子节点 - 父节点的映射
 */
export const getFamilyTree = (treeList = [], key, parentValue) => {
    let obj = {};
    treeList.forEach($item => {
        const childrenValue = $item[key];
        const children = $item.children;
        obj[childrenValue] = parentValue
        if (children && children.length) {
            let childrenObj = getFamilyTree(children, key, $item)
            obj = Object.assign({}, obj, childrenObj)
        }
    })
    return obj
}
