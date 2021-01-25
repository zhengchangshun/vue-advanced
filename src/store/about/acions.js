import * as COMMIT from "./constants"

export default {
    changeName({ state, commit }) {
        const name = state.name
        return commit(COMMIT.SET_NAME, name + `qian`)
    },
}