import * as COMMIT from "./constants"

export default {
    [COMMIT.SET_NAME](state, payload) {
        state.name = payload.name
    },
    [COMMIT.CANCEL](state, payload) {
        state.roles = [1, 2]
    },
    [COMMIT.RESET](state, payload) {
        state.roles = [1, 2, 3, 4]
    },
    [COMMIT.RESETROUTER](state, payload) {
        state.routerConfig = payload
    },
}
