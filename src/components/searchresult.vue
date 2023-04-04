<template>
    <div class="c-container">
        {{ searchKey }}
        {{ products }}
        <div v-if="searchKey=products.title">
          ggogogogogog
        </div>
    </div>
</template>

<script>
import { products } from "../assets/data"; 
 export default {
  data() {
        return { 
            products: [],
            searchKey:''
        }
    },
    mounted() {
        console.log(this.$route.query.s)
        this.searchKey = this.$route.query.s;
        this.products = products;
    },
    
 }
</script>