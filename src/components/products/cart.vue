<template>
    <div class="c-container cart">
            <div class="flex items-center">
                <h2 class="h-header">Your Orders</h2>
                <div class="bg-secondery h-[1px] w-3/4 mx-4"></div>
        </div>

        <ul>
            <li v-for="product in cart" :key="product.id">
                {{ product.name }} - {{ product.price }}
            </li>
        </ul>

        <div>
            <img src="icons/drinks/drink1.png" alt="" class="w-64 h-44 object-cover">
            <h3 class="text-xl text-secondery font-philosopher font-bold">Product Name</h3>
            <div>
                <span>Price</span>
                <span>150$</span>
            </div>
            <div>
                <span>Num</span>
                <span>2</span>
            </div>
            <div>
                <span>Total</span>
                <span>400$</span>
            </div>
        </div>

        <button class="btn flex items-center">Check out</button>
      
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cart: []
      }
    },
    methods: {
      addToCart(product) {
        this.cart.push(product)
      }
    }
  }
  </script>