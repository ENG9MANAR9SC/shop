<template>
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

    <!-- Blog Description -->
    <div class="mt-16 mb-8">
        <div class="c-container">
            <div class="p-0.5 w-full custom-round custom-bgcolor">
            <div class="bg-white p-6 custom-round ">
                <h2 class="h-header mb-4">PURPOSE AND USAGE</h2>
                <div class="h-description">
                    HISTORY, PURPOSE AND USAGE
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
                    The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.
                    The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.
                    HISpassage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.
                </div>
            </div>
            </div>
        </div>
    </div>
        

    <!-- Top Blogs -->
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

    <!-- Recent Blogs -->
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