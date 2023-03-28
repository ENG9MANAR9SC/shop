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

        <div class=" relative mt-16 mb-8">
            <div class="c-container">
                    <h2 class="h-header">Categories</h2>
                    <div class="flex flex-wrap justify-between gap-2">
                        <category v-for="category in categories" :key="category.title" :title="category.title" :description="category.description" :image="category.image" class="lg:w-1/5 md:w-1/3 sm:w-1/2"/>
                    </div>
            </div>
            <div class="absolute bg-primary-rose lg:h-40 md:h-60 sm:h-60 w-11/12  top-1/2 rounded-tr-[60px] rounded-br-lg z-[-1]"></div>
        </div>

        <div class="flex justify-center mt-8">
            <button class="px-8 py-2 bg-secondery text-white rounded-[30px] font-tenor">Load More</button>
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
       
    </div>

       <!--  <div class="flex flex-col items-center">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div v-for="(card, index) in displayedCards" :key="index" class="bg-white rounded-lg shadow-md p-4">
                        <h2 class="text-xl font-medium">{{ card.title }}</h2>
                        <p class="text-gray-500">{{ card.description }}</p>
                    </div>
                </div>
                <nav class="mt-8" v-if="pageCount > 1">
                    <ul class="flex items-center">
                        <li>
                        <button
                            @click="changePage(1)"
                            :disabled="currentPage === 1"
                            class="px-3 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600"
                        >
                            First
                        </button>
                        </li>
                        <li>
                        <button
                            @click="changePage(currentPage - 1)"
                            :disabled="currentPage === 1"
                            class="px-3 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600"
                        >
                            Previous
                        </button>
                        </li>
                        <li v-for="page in pageCount" :key="page">
                            <button
                                @click="changePage(page)"
                                :class="{ 'bg-blue-500 text-white': currentPage === page, 'hover:bg-blue-600': currentPage !== page }"
                                class="px-3 py-2 rounded-lg"
                            >
                                {{ page }}
                            </button>
                        </li>
                        <li>
                            <button
                                @click="changePage(currentPage + 1)"
                                :disabled="currentPage === pageCount"
                                class="px-3 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600"
                                >
                                Next
                            </button>
                        </li>
                        <li>
                            <button
                                @click="changePage(pageCount)"
                                :disabled="currentPage === pageCount"
                                class="px-3 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600"
                            >
                                Last
                            </button>
                        </li>
                    </ul>
                </nav>
            </div> -->
    
    

</template>
<script>
import category from "../categories/card.vue";
import cardnew from "../utilities/cardnew.vue";
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

     /*   cards: [
        { title: 'Card 1', description: 'This is the description for card 1.' },
        { title: 'Card 2', description: 'This is the description for card 2.' },
        { title: 'Card 3', description: 'This is the description for card 3.' },
        { title: 'Card 4', description: 'This is the description for card 4.' },
        { title: 'Card 5', description: 'This is the description for card 5.' },
        { title: 'Card 6', description: 'This is the description for card 6.' },
        { title: 'Card 7', description: 'This is the description for card 7.' },
        { title: 'Card 8', description: 'This is the description for card 8.' },
        { title: 'Card 9', description: 'This is the description for card 9.' },
        { title: 'Card 10', description: 'This is the description for card 10.' },
        { title: 'Card 11', description: 'This is the description for card 11.' },
        { title: 'Card 12', description: 'This is the description for card 12.' },
        { title: 'Card 13', description: 'This is the description for card 13.' },
        { title: 'Card 14', description: 'This is the description for card 14.' },
        { title: 'Card 15', description: 'This is the description for card 15.' },
        { title: 'Card 16', description: 'This is the description for card 16.' },
        { title: 'Card 17', description: 'This is the description for card 17.' },
        { title: 'Card 18', description: 'This is the description for card 18.' },
        { title: 'Card 19', description: 'This is the description for card 19.' },
        { title: 'Card 20', description: 'This is the description for card 20.' },
        ],
        currentPage: 1,
        cardsPerPage: 5,
        };
        },
        computed: {
        pageCount() {
        return Math.ceil(this.cards.length / this.cardsPerPage);
        },
        displayedCards() {
        const start = (this.currentPage - 1) * this.cardsPerPage;
        const end = start + this.cardsPerPage;
        return this.cards.slice(start, end);
        },
        },
        methods: {
        changePage(page) {
        if (page < 1 || page > this.pageCount) {
        return;
        }
        this.currentPage = page;
         */
        };
    },
        components: {
            category,
            cardnew,
        },
        
        };
        </script>