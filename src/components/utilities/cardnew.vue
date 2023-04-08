<template>
    <div class="c-container mt-8">
        <div class="relative ">
            <div class="bg-primary-blue w-full h-44 top-2 -left-2 rounded-md absolute z-[-1] "></div>   
            <RouterLink :to="`/product/${product.id}`">
                <div class="w-full h-44 rounded-md bg-white hov-img">
                    <img :src="product?.image" alt="" class="w-full h-full object-contain ">
                </div>
            </RouterLink>  
            <div class="flex justify-between my-3">
                <h3 class="font-tenor text-xl text-secondery line-clamp-2 leading-8 w-[180px] hov-title">{{ product?.title }}</h3>
                <div class="flex mx-1">
                    <button class="" @click="cart.addProductToCart(product)">
                        <img src="/icons/shopping.png" alt="" class="bg-secondery rounded-lg w-7 h-7 p-1 m-1" >
                    </button>
                    <button>
                        <img src="/icons/search.png" alt="" class="bg-primary-blue rounded-lg w-7 h-7 p-1 m-1">
                    </button>
                </div>
            </div>
        </div>
        
    </div>   
</template>

<script>
export default {
    name: "cardnew",
    props: {
        product: Object,
    },
    components: { RouterLink }
};
</script>
<!-- set up store  -->
<script setup>
import { RouterLink } from 'vue-router';
import { CartStore } from '../../stores/counter'

const cart = CartStore()

</script>

<style>


</style>