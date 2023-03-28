<template>
    <div class="">
        <div class="c-container relative">
            <!-- Banner Image alt="Banner Image"-->
            <img class="w-full lg:h-72 sm:h-36 object-cover rounded-tl-lg rounded-tr-[60px] rounded-b-lg" src="/icons/drinks/drink1.png" >
            <!-- Text and Buttons Above Image -->
            <div class="absolute top-0 left-8 h-full flex flex-col justify-center p-4">
                <h2 class="text-white text-2xl font-tenor mb-4">You can Now shop what you want</h2>
                <RouterLink to="/product">
                    <button class="bg-secondery text-white py-2 px-2 rounded-md shadow-md hover:shadow-lg transition duration-300 w-36">Shop Now</button>
                </RouterLink>
            </div>
        </div> 
        <!-- Categories -->
        <div class=" relative mt-16 mb-8">
            <div class="c-container">
                    <h2 class="h-header">Categories</h2>
                    <div class="flex flex-wrap justify-between gap-2">
                        <category v-for="category in categories" :key="category.title" :title="category.title" :description="category.description" :image="category.image" class="lg:w-1/5 md:w-1/3 sm:w-1/2"/>
                    </div>
            </div>
            <div class="absolute bg-primary-rose lg:h-40 md:h-60 sm:h-60 w-11/12  top-1/2 rounded-tr-[60px] rounded-br-lg z-[-1]"></div>
        </div>
         <!-- New Products -->
    <div class=" relative mt-16 mb-8">
            <div class="c-container">
                    <h2 class="h-header">New Products</h2>
                    <div class="flex flex-wrap justify-between gap-2">
                        <cardnew v-for="cardnew in cardnews" :key="cardnew.title" :title="cardnew.title" :image="cardnew.image" class="lg:w-1/5 md:w-1/3 sm:w-1/2"/>
                    </div>
            </div>
            <div class="absolute bg-primary-blue opacity-30 h-40 w-11/12 top-1/2 rounded-tr-[60px] rounded-br-lg z-[-2]"></div>
        </div>
        <!-- Best Products -->
        <div class=" relative mt-16 mb-8">
            <div class="c-container">
                    <h2 class="h-header">Best Products</h2>
                    <div class="flex flex-wrap justify-between gap-2">
                        <cardnew v-for="cardnew in cardnews" :key="cardnew.title" :title="cardnew.title"  :image="cardnew.image" class="lg:w-1/5 md:w-1/3 sm:w-1/2"/>
                    </div>
            </div>
             <div class="absolute bg-primary-orange opacity-30 h-40 w-11/12 top-1/2 rounded-tr-[60px] rounded-br-lg z-[-2]"></div>
        </div>

        <!-- Our Brands -->
        <div class="mt-16 mb-8">
           <div class="c-container">
                 <h2 class="h-header">Our Brands</h2>
                 <div class="flex flex-wrap justify-between gap-1">
                    <brand v-for="brand in brands" :key="brand.title" :title="brand.title" :description="brand.description" :image="brand.image" class="lg:w-1/3 md:w-1/3 sm:w-1/3"/>
                 </div>
           </div> 
        </div>

        <!-- Customer Reviews -->
        <div class="mt-16 mb-8">

        </div>

        <!-- Services -->
        <div class="mt-16 mb-8">

        </div>
      
    </div>
</template>

<script>
import category from "./categories/card.vue";
import cardnew from "./utilities/cardnew.vue";
import brand from "./utilities/brands.vue";
export default {
  data() {
    return {
         categories: [
        {
          title: "Category 1",
          description: "Lorem used in the graphic, print, and  industries for previewing layouts and visual mockups Lorem used in the graphic, print, and  industries for previewing .",
          image: "../icons/drinks/drink1.png",
        },
        {
          title: "Category 2",
          description: "Lorem used in the graphic, print, and  industries for previewing layouts and visual mockups Lorem used in the graphic, print, and  industries for previewing .",
          image: "../icons/drinks/drink2.png",
        },
        {
          title: "Category 3",
          description: "dustries for previewing in the graphic, print, and ",
          image: "../icons/drinks/drink3.png",
        },
        {
          title: "Category 4",
          description: "This is the description for card 4.",
          image: "../icons/drinks/drink4.png",
        },
        ], 
        cardnews: [
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
        brands: [
            {
                title:'Brand 1',
                description:'Lorem used in the graphic, print, and  industries for previewing layouts and visual mockups Lorem used in the graphic, print, and  industries for previewing layouts and visual mockups',

            },
            {
                title:'Brand 2',
                description:'Lorem used in the graphic, print, and  industries for previewing layouts and visual mockups Lorem used in the graphic, print, and  industries for previewing layouts and visual mockups',

            },
            {
                title:'Brand 3',
                description:'Lorem used in the graphic, print, and  industries for previewing layouts and visual mockups Lorem used in the graphic, print, and  industries for previewing layouts and visual mockups',

            },
        ],
           };
        },
        components: {
            category, 
            cardnew,
            brand,
        },   
    
};
        </script>