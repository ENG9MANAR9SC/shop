<template>
    <div class="c-container">
        {{ searchKey }}
        {{ products }}
        {{ products}}
        <div>
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