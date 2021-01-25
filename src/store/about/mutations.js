import * as COMMIT from "./constants"

export default {
    [COMMIT.SET_NAME](state, payload) {
        state.name = payload.name
    },
}
