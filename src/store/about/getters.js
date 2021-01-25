// state的计算属性(通过store.getters.lastName访问)
export default {
    roles: state => {
        return state.role.join(`,`)
    },
}
