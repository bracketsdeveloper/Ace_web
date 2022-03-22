export const state = () => ({
    cart: []
})

export const mutations = {
    addToCart(state,payload) {
        state.cart = [...state.cart, payload.item]
    },
    setCart(state,payload) {
        state.cart = [...payload]
    },
    removeFromCart(state,payload) {
        let newItems = state.cart.filter((item,index)=>index!=payload.id) // eslint-disable-line
        state.cart = newItems
    },
    resetCart(state) {
        state.cart = []
    },
}