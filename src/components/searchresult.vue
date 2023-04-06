<template>
    <div class="c-container mt-16">
        <h2 class="h-header">The Results</h2>
        <div class="h-0.5 bg-secondery my-2"></div>
        <div class="h-description">
          {{ result }}
        </div>
        <div v-for="result in result" class="responsivefour">
                <!-- {{ product }} -->
                <productCard :result="result" class="mx-2"/>
        </div>
    </div>
</template>

<script>
import { products } from "../assets/data"; 
import productCard from "../products/card.vue";
 export default {
  data() {
        return { 
            products: [],
            searchKey:'',
            result:[],
        }
    },
    mounted() {
        console.log(this.$route.query.s)
        this.searchKey = this.$route.query.s;
        this.products = products;
        this.result = products.filter(el => el.title.toLowerCase().search(this.searchKey.toLowerCase())!=-1)
    },
    components: {
        productCard,
    },
    
 }
</script>