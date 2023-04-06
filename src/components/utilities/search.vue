<template>
    <div class="c-container flex items-center gap-2">
        <button class="w-8 h-8" @click="search">
            <img src="/icons/searchead.png" alt="" class="" > 
         </button>
        <input
            class="appearance-none border rounded-xl border-secondery w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="text"
            type="text"
            placeholder="Search"
            v-model="searchKey"
        />
   
    </div>

</template>

<script>
import { products } from "../../assets/data";

export default {
  data() {
    return { 
        products: [],
        searchResult: [],
        searchKey:'',
    }
    
  },
  mounted() {
        this.products = products;
    },
    methods: {
     search() {
        this.$router.push(`/search-result?s=${this.searchKey}`)
     }
    }
}

</script>