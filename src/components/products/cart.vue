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
            <div class="custom-bgcolor p-0.5 rounded-lg">
                <div class="bg-white p-2 rounded-lg">
                    <img src="icons/drinks/drink1.png" alt="" class="w-64 h-44 object-cover rounded-t-lg">
                    <h3 class="text-xl text-secondery font-philosopher font-bold my-2">Product Name</h3>
                    <div class="my-1">
                        <span>Price</span>
                        <span class="mx-1">150$</span>
                    </div>
                    <div class="my-1">
                        <span>Num</span>
                        <span class="mx-1">2</span>
                    </div>
                    <div class="my-1 flex justify-between">
                        <span>Total</span>
                        <span>400$</span>
                    </div>
                </div>
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