<template>
    <div class="c-container mt-16 mb-16">
        <h2 class="h-header">The Results</h2>
        <div class="h-0.5 bg-secondery my-2"></div>
        <div class="c-container">
            <div class="flex flex-wrap justify-between">
                <div v-for="result in results" class="responsivefour">
                    <productCard :key="result.title" :product="result"  class="mx-2"/> 
                </div>
            </div>
        </div>
       
    </div>
</template>

<script>
import { products } from "../assets/data"; 
import productCard from "../components/products/card.vue";
 export default {
  data() {
        return { 
            products: [],
            searchKey:'',
            results:[],
            product: [],
        }
    },
    mounted() {
       
    },
    components: {
        productCard,
    },

    watch: {
        "$route.query.s":{
            handler:function(newVal){
                console.log(newVal)
                this.search()        
                }
        }
    },
    methods: {
        search() {
            console.log(this.$route.query.s)
            this.searchKey = this.$route.query.s;
            this.products = products;
            this.results = products.filter(el => el.title.toLowerCase().search(this.searchKey.toLowerCase())!=-1)
            this.product= products.filter(el => el.title.toLowerCase().search(this.searchKey.toLowerCase())!=-1)
        },
    }
    
 }
</script>