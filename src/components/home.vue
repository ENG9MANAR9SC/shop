<template>
    <div class="">
        <div class="c-container relative">
            <!-- Banner Image alt="Banner Image"-->
            <div class="bg-black rounded-tl-lg rounded-tr-[60px] rounded-b-lg"> 
                <img class="w-full lg:h-72 h-36 object-cover rounded-tl-lg rounded-tr-[60px] rounded-b-lg opacity-50 " src="/icons/drinks/drink1.png" >
            </div>
            <!-- Text and Buttons Above Image -->
            <div class="absolute top-0 left-8 h-full flex flex-col justify-center p-4">
                <h2 class="text-white lg:text-2xl text-xl font-tenor mb-3">You can Now shop what you want</h2>
                <RouterLink to="/product" class="bg-secondery text-white py-2 px-2 text-center rounded-md shadow-md hover:shadow-lg transition duration-300 w-36" >
                  Shop Now
                </RouterLink>
            </div>
        </div> 
        <!-- Categories -->
        <div class=" relative mt-16 mb-8">
            <div class="c-container">
                    <h2 class="h-header">Categories</h2>
                    <div class="flex flex-wrap justify-between">
                        <div v-for="(category , index) in categories" class="responsivefour"><!--  class="item-card" @click="activateCard(index)" :class="{ 'active': activeIndex === index }" -->
                            <category :key="index" :title="category.title" :description="category.description" :image="category.image" class="mx-2 item-card"  @click="activateCard(index)" :class="{ 'active': activeIndex === index }" :style="{ 'animation-name': activeIndex === index ? 'bounce' : '' }"/>
                        </div>
                    </div>
            </div>
            <div class="absolute bg-primary-rose opacity-30 lg:h-40 md:h-28 h-12 xl:w-11/12 w-full md:w-full lg:top-1/2 md:top-1/3 top-64 rounded-tr-[60px] rounded-br-lg z-[-2]"></div>
        </div>
         <!-- New Products -->
        <div class=" relative mt-16 mb-8">
            <div class="c-container">
                    <h2 class="h-header">New Products</h2>
                    <div class="flex flex-wrap justify-between">
                      <div v-for="product in products" class="responsivefour">
                            <cardnew :key="product.title" :product="product" />
                        </div>
                    </div>
            </div>
            <div class="absolute bg-primary-blue opacity-30 lg:h-40 md:h-28 h-12 xl:w-11/12 w-full md:w-full lg:top-1/2 md:top-1/3 top-64 rounded-tr-[60px] rounded-br-lg z-[-2]"></div>
        </div>
        <!-- Best Products -->
        <div class=" relative mt-16 mb-8">
            <div class="c-container">
                    <h2 class="h-header">Best Products</h2>
                    <div class="flex flex-wrap justify-between">
                      <div v-for="product in products" class="responsivefour">
                            <cardnew :key="product.title" :product="product" />
                        </div>
                    </div>
            </div>
             <div class="absolute bg-primary-orange opacity-30 lg:h-40 md:h-28 h-12 xl:w-11/12 w-full md:w-full lg:top-1/2 md:top-1/3 top-64 rounded-tr-[60px] rounded-br-lg z-[-2]"></div>
        </div>

        <!-- Our Brands -->
        <div class="mt-16 mb-8">
           <div class="c-container">
                 <h2 class="h-header">Our Brands</h2>
                 <div class="flex flex-wrap justify-between">
                    <div v-for="brand in brands" class="responsive">
                        <brand  :key="brand.title" :title="brand.title" :description="brand.description" :image="brand.image" class="mx-2"/>
                    </div>
                </div>
           </div> 
        </div>

        <!-- Customer Reviews -->
        <div class="mt-16 mb-8">
            <div class="c-container">
                 <h2 class="h-header">Customer Reviews</h2>
                 <div class="flex flex-wrap justify-between">
                    <div v-for="review in reviews" class="responsive">
                        <review  :key="review.title" :title="review.title" :description="review.description" :image="review.image" class="mx-2"/>
                    </div>
                </div>
           </div> 
        </div>

        <!-- Services -->
        <div class="mt-16 mb-8 ">
            <div class="c-container ">
                 <h2 class="h-header">Services</h2>
                 <div class="flex flex-wrap justify-between ">
                    <div v-for="service in services" class="responsive ">
                        <service :key="service.title" :title="service.title" :description="service.description" :image="service.image" class="mx-3"/>
                    </div>
                </div>
           </div> 
        </div>
        <!-- animation -->
        <div>
            <div class="" @click="">
                <div class=""></div>
            </div>
        </div>
      
    </div>
</template>

<script>
import category from "./categories/card.vue";
import cardnew from "./utilities/cardnew.vue";
import brand from "./utilities/brands.vue";
import service from "./utilities/services.vue";
import review from "./utilities/reviews.vue";
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
        products: [
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
        services: [
        {
                title:'Service 1',
                description:'Lorem used in the graphic, print, and  industries for previewing layouts and visual mockups Lorem used in the graphic, print, and  industries for previewing layouts and visual mockups',

            },
            {
                title:'Service 2',
                description:'Lorem used in the graphic, print, and  industries for previewing layouts and visual mockups Lorem used in the graphic, print, and  industries for previewing layouts and visual mockups',

            },
            {
                title:'Service 3',
                description:'Lorem used in the graphic, print, and  industries for previewing layouts and visual mockups Lorem used in the graphic, print, and  industries for previewing layouts and visual mockups',

            },
            
        ],
        reviews: [
        {
                title:'Review 1',
                description:'Lorem used in the graphic, print, and  industries for previewing layouts and visual mockups Lorem used in the graphic, print, and  industries for previewing layouts and visual mockups',

            },
            {
                title:'Review 2',
                description:'Lorem used in the graphic, print, and  industries for previewing layouts and visual mockups Lorem used in the graphic, print, and  industries for previewing layouts and visual mockups',

            },
            {
                title:'Reviw 3',
                description:'Lorem used in the graphic, print, and  industries for previewing layouts and visual mockups Lorem used in the graphic, print, and  industries for previewing layouts and visual mockups',

            },
            
        ],
        activeIndex: null,
           };
        },
        components: {
            category, 
            cardnew,
            brand,
            service,
            review,
        }, 
        methods: {
    activateCard(index) {
      this.activeIndex = index
    }
  },  
};
        </script>

<style>
.cont{
      background: #f0f0f0;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;
    }
    .box {
      border-radius: 20px;
     /*  width: 60px;
      height: 60px;
      background: #f0f0f0; */
      box-shadow:  0 0 0 #cccccc,
                   0 0 0 #ffffff,
                    10px 10px 10px #cccccc inset,
                    -10px -10px 10px #ffffff inset;
      animation: anime 1s cubic-bezier(0.16, 1, 0.3, 1) 1s infinite alternate;
      /* animation-fill-mode: forwards; */
    }

    @keyframes anime {
      0% {
        width: 96%;
        height: 96%;
        background: #f0f0f0;
        box-shadow:  0 0 0 #cccccc,
                     0 0 0 #ffffff,
                      10px 10px 10px #cccccc inset,
                      -10px -10px 10px #ffffff inset;
      }
     /*  25% {
        width: 120px;
        height: 190px;
        background: #f8f8f8;
        box-shadow:  10px 10px 10px #cccccc,
                     10px 10px 10px #ffffff,
                     0 0 0 #cccccc inset,
                     0 0 0 #ffffff inset;
      } */
      /* 50% {
        width: 130px;
        height: 200px;
        background: #f8f8f8;
        box-shadow:  10px 10px 10px #cccccc,
                     10px 10px 10px #ffffff,
                     0 0 0 #cccccc inset,
                     0 0 0 #ffffff inset;
      } */
      100% {
        width: 100%;
        height: 100%;
        background: #fafafa;
        box-shadow:  40px 40px 40px #cccccc,
                     0 0 0 #ffffff,
                     0 0 0 #cccccc inset,
                     2px 2px 2px #ffffff inset;
      }
    }
</style>

<!-- 

    <body>
    <div class="container">
      <div class="box"></div>
    </div>
  </body>
   *{
      margin:0;
      padding:0;
    }
    .container {
      background: #f0f0f0;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;
    }
    .box {
      border-radius: 20px;
      width: 60px;
      height: 60px;
      background: #f0f0f0;
      box-shadow:  0 0 0 #cccccc,
                   0 0 0 #ffffff,
                    10px 10px 10px #cccccc inset,
                    -10px -10px 10px #ffffff inset;
      animation: anime 3s cubic-bezier(0.16, 1, 0.3, 1) 1s infinite alternate;
      /* animation-fill-mode: forwards; */
    }

    @keyframes anime {
      0% {
        width: 60px;
        height: 60px;
        background: #f0f0f0;
        box-shadow:  0 0 0 #cccccc,
                     0 0 0 #ffffff,
                      10px 10px 10px #cccccc inset,
                      -10px -10px 10px #ffffff inset;
      }
      25% {
        width: 60px;
        height: 60px;
        background: #f8f8f8;
        box-shadow:  10px 10px 10px #cccccc,
                     10px 10px 10px #ffffff,
                     0 0 0 #cccccc inset,
                     0 0 0 #ffffff inset;
      }
      50% {
        width: 60px;
        height: 240px;
        background: #f8f8f8;
        box-shadow:  10px 10px 10px #cccccc,
                     10px 10px 10px #ffffff,
                     0 0 0 #cccccc inset,
                     0 0 0 #ffffff inset;
      }
      100% {
        width: 480px;
        height: 240px;
        background: #fafafa;
        box-shadow:  40px 40px 40px #cccccc,
                     0 0 0 #ffffff,
                     0 0 0 #cccccc inset,
                     2px 2px 2px #ffffff inset;
      }



 -->
<style>
.item-card {
  @apply  cursor-pointer transition-all duration-300 ease-in-out;
  border-color: #cbd5e0;
}

.item-card:hover {
  @apply bg-white;
}

.active {
  @apply bg-white border-white;
}

@keyframes bounce {
  0% {
    width: 90%;
    transform: scale(1);
  }
  25% {
    width: 95%;
    transform: scale(1.1);
  }
  50% {
    transform: scale(0.9);
  }
  75% {
    width: 97%;
    transform: scale(1.1);
  }
  100% {
    width: 100%;
    transform: scale(1);
    box-shadow:  40px 40px 40px #cccccc,
                     0 0 0 #ffffff,
                     0 0 0 #cccccc inset,
                     2px 2px 2px #ffffff inset;
  }
}
  </style>