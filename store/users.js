export const state = () => ({
    user:null
})

export const mutations = {
    login(state, payload) {
        state.user = payload
        console.log(state.user);
    },
    logout(state) {
        state.user = null
    }
}