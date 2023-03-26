<template>
    <div class="c-container">
        <h1 class="h-header">Product Name</h1>
        <div class="flex">
            <div>
                <div>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and</div>
                <div>price</div>
                <div>color</div>
                <div>
                    <button class="btn">Buy Now</button>
                    <button class="btn-secondery"  @click="addToCart(product)">Add to Cart</button>
                </div>
            </div>
            <div>
                <img src="" alt="">dqd
            </div>
        </div>
        <div class="mt-8 mb-4">
            <div>
                <button class="btn-secondery rounded-l-[0px] " :class="{ 'bg-gray-400': activeTab === 'description' }" @click="activeTab = 'description'">Description</button>
                <button class="btn-secondery rounded-l-[0px]" :class="{ 'bg-gray-400': activeTab === 'comment' }" @click="activeTab = 'comment'">Review</button>
                <button class="btn-secondery rounded-l-[0px]" :class="{ 'bg-gray-400': activeTab === 'review' }" @click="activeTab = 'review'">Comments</button>
            </div>
            <div class="border-[1px] border-secondery rounded-tr-[40px] bg-white h-80 ">
                
                  
                <div v-if="activeTab === 'description'" class="">
                <!-- Content for the Description tab -->
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                
                </div>
                <div v-if="activeTab === 'comment'">
                <!-- Content for the Comment tab -->
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                  
                </div>
                <div v-if="activeTab === 'review'">
                <!-- Content for the Review tab -->
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
               
                </div>

            </div>

        </div>


    </div>

</template>

<script>
export default {
    props: {
    product: Object
  },
  methods: {
    addToCart(product) {
      this.$emit('add-to-cart', product)
    }
  },
  data() {
    return {
      activeTab: 'description'
    }
   
}

}
</script>