<template>
    <div class="">
        <div class="mt-8 p-0.5 rounded-[20px] max-w-sm bg-gradient-to-r custom-bgcolor">
            <div class="rounded-[20px] bg-white">
                <RouterLink :to="`products/${product.id}`" @click=""><img :src="product?.image" alt="" class="rounded-[20px] h-44 mx-auto"></RouterLink>
                <div class="px-2 pb-4">
                    <h3 class="h-sec my-2 line-clamp-2 min-h-[64px] leading-8">{{ product?.title}}</h3>
                    <h3 class="h-sec my-2 line-clamp-2 min-h-[64px] leading-8">{{ $t('product', { product: product?.title }) }}</h3>
                    <div class="text-base text-primary font-tenor leading-5 min-h-[calc(3*20px)] my-2 line-clamp-3">{{ product?.description }} </div>
                    <div class="flex my-2">
                            <!-- {{ $t('name', { name: user.name }) }} -->
                        <span class="mx-2 text-xl text-secondery">{{ product?.price }}$</span>
                        <span class="mx-2 text-base text-primary line-through my-2">66$</span>
                    </div>
                    <div class="flex">
                        <RouterLink to="/" class="btn-secondery w-full" @click="cart.addProductToCart(product,product?.quantity)">{{ $t('Add to Cart') }} </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- set up store  -->
<script setup>
import { CartStore } from '../../stores/cart'

const cart = CartStore()

</script>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: "product",
    props: {
        product: Object,
    },

    components: { RouterLink },

    methods : {
     

        },
    }
    

</script>