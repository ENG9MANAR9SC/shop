// user.js

import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isAuthenticated: false,
    user: null,
    cart: null,
  }),
  mutations: {
    setIsAuthenticated(state, value) {
      state.isAuthenticated = value
    },
    setUser(state, user) {
      state.user = user
    },
    setCart(state, cart) {
      state.cart = cart
    },
  },
  actions: {
    async signUp({ commit }, { email, password }) {
      // make the API call to sign up the user
      const response = await axios.post('https://fakestoreapi.com/users', { email, password })
      // set the user data in the store
      commit('setUser', response.data.user)
      commit('setIsAuthenticated', true)
    },
    async login({ commit }, { email, password }) {
      // make the API call to log in the user
      const response = await axios.post('/api/login', { email, password })
      // set the user data in the store
      commit('setUser', response.data.user)
      commit('setIsAuthenticated', true)
    },
    async fetchCart({ commit, state }) {
      // make the API call to fetch the user's cart
      const response = await axios.get(`/api/users/${state.user.id}/cart`)
      // set the cart data in the store
      commit('setCart', response.data.cart)
    },
  },
})




