<template>
    <div class="c-container cart">
        <div class="flex items-center">
            <h2 class="h-header mb-6">Your Orders</h2>
            <div class="bg-secondery h-[1px] w-3/4 mx-4"></div>
        </div>

        <div class="flex flex-wrap ">
            <div  v-for="product in cart.getProducts" :key="product.id" class="m-2">
                <img :src="product?.image" alt="" class="w-full h-44 object-cover rounded-t-lg">
                <div class="custom-bgcolor p-0.5 rounded-lg mt-2">
                    <div class="bg-white px-2 rounded-lg">
                        <div class="p-2">
                            <h3 class="text-xl text-secondery font-philosopher font-bold my-2">{{ product.title}}</h3>
                            <div class="my-3 text-lg ">
                                <span>Price:</span>
                                <span class="mx-3">{{ product.price }}</span>
                            </div>
                            <div class="my-2 flex font-tenor text-lg">
                                <span>Num:</span>
                                <div class="border rounded-md p-1 w-1/2 mx-3 flex justify-between font-bold">
                                    <span class="cursor-pointer select-none" @click="product.quantity++">+</span>
                                    <span class="">{{ product.quantity }}</span>
                                    <span class="cursor-pointer select-none" @click="product.quantity--">-</span>
                                </div>
                            </div>
                            <div class="flex justify-between text-tenor text-lg text-white bg-secondery p-3 rounded-b-lg -mx-2">
                                <span>Total</span>
                                <span>{{ product.quantity * product.price }}$</span>
                                <span @click="cart.removeProductFromCart(product.id)"> delete element</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <button @click="cart.destroyCart">delete</button>
        </div>
    <!--      <div class="flex justify-center m-4">
            <RouterLink to="" class="btn w-1/4 m-2">Check out ( {{ cart.reduce((acc, p) => acc + (p.price * p.quantity), 0) }}$ )</RouterLink>
        </div>  -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
      /*   cart:[
            {
                id:'1',
                namme:'carrots',
                price:'30',
                quantity:'2',
            },
            {
                id:'2',
                namme:'orange',
                price:'24',
                quantity:'4',
            },
            {
                id:'2',
                namme:'orange',
                price:'24',
                quantity:'4',
            },
            {
                id:'2',
                namme:'orange',
                price:'24',
                quantity:'4',
            },
            {
                id:'2',
                namme:'orange',
                price:'24',
                quantity:'4',
            },

        ], */

        
      }
 
    },
  }
  </script>

<script setup>
import { CartStore } from '../../stores/counter'

const cart = CartStore()

</script>