<template>
    <div class="">
       <!-- BANNER  -->
       <div class=" md:h-80 h-48 relative flex items-center overflow-hidden mt-8">
            <!-- Banner Image alt="Banner Image"-->
            <!-- <div class="relative rounded-tl-lg z-0 rounded-tr-[60px] rounded-b-lg">  -->
            <div class="bg-black z-0"> 
                <img class="absolute inset-0 w-full h-full object-cover opacity-90" src="/icons/drinks/drink1.png" >
            </div>
            <!-- </div> -->
            <!-- Text and Buttons Above Image -->
            <div class=" z-10 relative c-container">
                <!-- absolute top-6 left-8 h-1/3 -->
                <div class="p-4 mx-4">
                    <h2 class="h-header z-10 -mx-8">Blogs</h2>
                    <div class="text-secondery bg-white p-2 px-12 rounded-[20px]"> is dummy text used in laying out print, graphic or web </div>
                </div>
            </div>
        </div>

        <div class="mt-16 mb-8">
            <div class="c-container">
                <h2 class="h-header">Top Blogs</h2>
                <div class="flex flex-wrap justify-between">
                    <div v-for="card in cards" class="responsivefour">
                    <card :key="card.title" :title="card.title" :image="card.image" class="mx-4"/>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-16 mb-8">
            <div class="c-container">
                <h2 class="h-header">Recent Blogs</h2>
                <div class="flex flex-wrap justify-between">
                    <div v-for="card in cards" class="responsivefour">
                    <card :key="card.title" :title="card.title" :image="card.image" class="mx-4"/>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-16 mb-8">
            <div class="c-container">
                <h2 class="h-header">Popular Blogs</h2>
                <div class="flex flex-wrap justify-between">
                    <div v-for="card in cards" class="responsivefour">
                    <card :key="card.title" :title="card.title" :image="card.image" class="mx-4"/>
                    </div>
                </div>
            </div>
        </div>

      
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