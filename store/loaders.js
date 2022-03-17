export const state = () => ({
    loader: false
})

export const mutations = {
    show(state) {
        state.loader = true
    },
    hide(state) {
        state.loader = false
    }
}