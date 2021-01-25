// state状态管理(通过store.state.xxx)
// 或者使用 mapState
// 修改的时候使用commit
import { getRoutes } from "@/router/lib"

export default {
    routerConfig: getRoutes(),
    roles: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}
