export const state = () => ({
    page: 0
})

export const mutations = {
    set(state,payload) {
        state.page = payload.page
    },
}