<template>
    <div class="c-container">
        <h1 class="h-header mt-16 mb-8">Carrots</h1>
        <div class="p-0.5 w-full custom-round custom-bgcolor">
            <div class="bg-white custom-round p-4">
                <div class="flex justify-between gap-3 p-2">
                    <div class="flex flex-col justify-between">
                        <div>{{ product?.description}}</div>
                        <span class="font-bold">{{ product?.title}}</span>
                        <span class="font-bold">  {{ product?.price}}$ </span> 
                        <div class="flex gap-3">
                            <button class="btn">Buy Now</button>
                            <button class="btn-secondery">Add to Cart</button>
                        </div>
                    </div>
                    <div class="">
                        <img src="/icons/drinks/drink3.png" alt="" class="rounded-lg">
                    </div>
                </div> 
            </div>
        </div>

        <div class="mt-16 mb-8">
            <div class="flex w-1/2">
                <button class="btn-secondery rounded-l-[0px] font-bold bg-primary-blue" :class="{ 'bg-gray-400': activeTab === 'description' }" @click="activeTab = 'description'">Description</button>
                <button class="btn-secondery rounded-l-[0px] font-bold bg-primary-blue"  :class="{ 'bg-gray-400': activeTab === 'comment' }" @click="activeTab = 'comment'">Review</button>
                <button class="btn-secondery rounded-l-[0px] font-bold bg-primary-blue"  :class="{ 'bg-gray-400': activeTab === 'review' }" @click="activeTab = 'review'">Comments</button>
            </div>
            <div class="  "> 
                <div class="p-0.5 w-full custom-round custom-bgcolor">
                    <div class="bg-white custom-round p-4 h-80">                 
                        <div v-if="activeTab === 'description'" class="">
                        <!-- Content for the Description tab -->
                            forem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.                       
                        </div>
                        <div v-if="activeTab === 'comment'">
                        <!-- Content for the Comment tab -->
                            worem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                        
                        </div>
                        <div v-if="activeTab === 'review'">
                        <!-- Content for the Review tab -->
                            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { products } from '../../assets/data';
export default {
  data() {
    return {
      activeTab: 'description',
      product:null,
       }
    
        },
        mounted() {
            console.log(this.$route.params.id)
            let incomID = this.$route.params.id;
            console.log(incomID)
            let found = products.find(el => el.id == incomID)
            console.log(found);
            this.product = found
    },
    methods: {
       // const id = `/showproduct/${this.$route.params.id}`; 
    },
}
</script>

