<template>
    <div class="c-container">
    
        <div class="flex">
           <RouterLink to="category" class="h-header mx-2">Categories</RouterLink> <h1 class=""> </h1>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" class="mt-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <mask id="mask0_359_6879" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
                <rect x="30" y="30" width="30" height="30" transform="rotate(-180 30 30)" fill="url(#pattern0)"/>
                </mask>
                <g mask="url(#mask0_359_6879)">
                <rect x="41" y="37" width="51" height="43" transform="rotate(-180 41 37)" fill="url(#paint0_linear_359_6879)"/>
                </g>
                <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_359_6879" transform="scale(0.0078125)"/>
                </pattern>
                <linearGradient id="paint0_linear_359_6879" x1="41" y1="80" x2="88.5762" y2="36.7226" gradientUnits="userSpaceOnUse">
                <stop offset="0.11556" stop-color="#A0D8F0"/>
                <stop offset="0.466667" stop-color="#8D929D"/>
                <stop offset="0.756518" stop-color="#A0D8F0"/>
                </linearGradient>
                <image id="image0_359_6879" width="128" height="128" xlink:href="data:image/png;base64,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"/>
                </defs>
            </svg>
            <RouterLink to="product" class="h-header mx-2">Products</RouterLink>
        </div>

        <!-- filter -->
        <div class="">
            <button class="text-white px-8 py-2 rounded-[30px] font-tenor mt-8 bg-gradient-to-r custom-bgcolor"> All</button>
        </div>
        <div class="flex flex-wrap justify-between gap-2 mb-8">
            <product v-for="product in products" :key="product.title" :title="product.title" :description="product.description" :image="product.image" class="lg:w-1/5 md:w-1/3 sm:w-1/2"/>
        </div>
    </div>


</template>

<script>
import product from "../products/card.vue";

export default {
  data() {
    return {
        products: [
                {
                    title:"Carrots",
                    image: "../icons/drinks/drink1.png",
                    description:"graphic, print, and industries for previewing layouts and visual mockups layouts visual mockups",
                },
                {
                    title:"PineApple",
                    image: "../icons/drinks/drink2.png",
                    description:"graphic, print, and industries for and visual mockups layouts visual mockups",
                },
                {
                    title:"Orange",
                    image: "../icons/drinks/drink3.png",
                    description:"industries for previewing layouts and visual mockups layouts visual mockups",
                },
                {
                    title:"Orange",
                    image: "../icons/drinks/drink3.png",
                    description:"graphic, print, and industries for previewing layouts and visual mockups layouts visua",
                },

        ]
           }
        },
        components: {
            product,
        },
}
</script>