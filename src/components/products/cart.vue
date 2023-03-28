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

        <div class="w-1/4">
            <div class="custom-bgcolor p-0.5 rounded-lg">
                <div class="bg-white p-2 rounded-lg">
                    <img src="icons/drinks/drink1.png" alt="" class="w-64 h-44 object-cover rounded-t-lg">
                    <h3 class="text-xl text-secondery font-philosopher font-bold my-2">Product Name</h3>
                    <div class="my-1">
                        <span>Price</span>
                        <span class="mx-1">150$</span>
                    </div>
                    <div class="my-1 flex font-tenor ">
                        <span>Num</span>
                        <div class="border rounded-md p-1 w-1/2 mx-1 flex justify-between font-bold">
                            <span class="">+</span>
                            <span class="">2</span>
                            <span class="">_</span>
                        </div>
                    </div>
                    <div class="my-1 flex justify-between">
                        <span>Total</span>
                        <span>400$</span>
                    </div>
                </div>
            </div>
        </div>

        <button class="btn flex justify-center">Check out</button>
      
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