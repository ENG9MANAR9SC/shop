<template>
    <div class="">
       <!-- BANNER  -->
       <div class="relative">
            <!-- Banner Image alt="Banner Image"-->
            <div class=" rounded-tl-lg rounded-tr-[60px] rounded-b-lg"> 
                <img class="w-full lg:h-72 sm:h-36 object-cover" src="/icons/drinks/drink1.png" >
            </div>
            <!-- Text and Buttons Above Image -->
            <div class="absolute top-6 left-8 h-1/3 flex justify-center p-4 c-container">
                <h2 class="text-secondery text-2xl font-tenor -mx-8 z-[0]">Blogs</h2>
                <div class="text-secondery bg-white p-2 px-12 rounded-[20px]">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web </div>
            </div>
        </div>

      <!--   <div class="mt-16 mb-8">
            <div class="c-container">
                    <h2 class="h-header">Top Blogs</h2>
                    <div class="flex flex-wrap justify-between gap-2">
                        <div v-for="card in cards" class="lg:w-1/4 md:w-1/3 sm:w-1/2"></div>
                        <card :key="card.title" :title="card.title" :description="card.description" :image="card.image" class="gap-2"/>
                    </div>
                </div>
        </div>

        <div class="mt-16 mb-8">
            <div class="c-container">
                    <h2 class="h-header">Resent Blogs</h2>
                    <div class="flex flex-wrap justify-between gap-2">
                        <div v-for="card in cards" class="lg:w-1/4 md:w-1/3 sm:w-1/2"></div>
                        <card :key="card.title" :title="card.title" :description="card.description" :image="card.image" class="gap-2"/>
                    </div>
            </div>
        </div>

        <div class="mt-16 mb-8">
            <div class="c-container">
                    <h2 class="h-header">Popular Blogs</h2>
                    <div class="flex flex-wrap justify-between gap-2">
                        <div v-for="card in cards" class="lg:w-1/4 md:w-1/3 sm:w-1/2"></div>
                        <card :key="card.title" :title="card.title" :description="card.description" :image="card.image" class="gap-2"/>
                    </div>
            </div>
        </div> -->
      
    </div>
</template>
<script>
import card from "../blogs/card.vue"
export default {
  data() {
    return {
        cards: [
        {
                    title:"Carrots",
                    image: "/icons/drinks/drink1.png",
                },
                {
                    title:"PineApple",
                    image: "/icons/drinks/drink2.png",
                },
                {
                    title:"Orange",
                    image: "/icons/drinks/drink3.png",
                },
                {
                    title:"Carrots",
                    image: "/icons/drinks/drink4.png",
                }
        ],
    }
    
            },
        components: {
                card,
                },
        };
</script>