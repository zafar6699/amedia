export const state = () => ({
    isLoading: false,
    isLogin: false,
    isRegister: false,
})
export const mutations = {
    TRUE_LOADING(state, data) {
        state.isLoading = true
    },
    FALSE_LOADING(state, data) {
        state.isLoading = false
    },

    CHANGE_LOGIN(state, data) {
        state.isLogin = data
    },
    CHANGE_REGISTER(state, data) {
        state.isRegister = data
    },
}
export const actions = {}