<template>
    <header>
        <div class="">
            <div class="h-8 bg-primary">
                <div class="c-container flex justify-between text-white">
                    <div class="flex">
                        <img src="/icons/socialmedia/call.png" alt="" class="h-6 w-6 mx-1 mt-1">
                        <span>+964 847 857</span>
                    </div>

                    <div>
                        <dropdown class="sm:block hidden"></dropdown>
                    </div>
                </div>
            </div>

            <div class="bg-bglight font-philosopher font-bold">
                <div class="c-container flex justify-between items-center">
                    <div class="">
                        <img src="/icons/logo.png" alt="" width="62px" height="62px">
                    </div>

                    <!-- list Desktop & mobile -->
                    <nav class="flex items-center justify-between flex-wrap bg-blue-500 p-6">
                        <div class="flex items-center flex-shrink-0 text-secondery mr-6">
                            <i class="fas fa-shopping-cart fa-2x"></i>
                            <span class=" text-xl tracking-tight ml-2">My Store</span>
                        </div>
                        <div class="block lg:hidden">
                            <button class="flex items-center px-3 py-2 border rounded text-secondery border-white hover:text-gray-200 hover:border-gray-200" @click="toggleMenu">
                                <i class="fas fa-bars"></i>
                            </button>
                        </div>
                        <div :class="{ 'hidden': !showMenu }" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                            <div class="text-lg lg:flex-grow">
                                <RouterLink  class="block mt-4 lg:inline-block lg:mt-0 text-secondery hover:text-gray-200 mr-4" to="/"> Home </RouterLink>
                                <RouterLink class="block mt-4 lg:inline-block lg:mt-0 text-secondery hover:text-gray-200 mr-4" to="/product">  Shop</RouterLink>
                                <div class="relative mt-4 lg:hidden">
                                    <button class="text-secondery hover:text-gray-200 focus:outline-none focus:shadow-outline" @click="showCategories = !showCategories">
                                        <span>Categories</span>
                                        <i :class="{ 'fa-angle-down': !showCategories, 'fa-angle-up': showCategories }" class="fas ml-2"></i>
                                    </button>
                                    <div :class="{ 'hidden': !showCategories }" class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-10">
                                      <!--   <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900"> Category 1  </a> -->
                                    </div>
                                </div>
                                    <RouterLink class="block mt-4 lg:inline-block lg:mt-0 text-secondery hover:text-gray-200 mr-4" to="/blog">Blog</RouterLink>
                                    <RouterLink class="block mt-4 lg:inline-block lg:mt-0 text-secondery hover:text-gray-200" to="/contact-us">Contact us</RouterLink>
                                    <RouterLink class="block mt-4 lg:inline-block lg:mt-0 text-secondery hover:text-gray-200 ml-4" to="/about-us"> About us </RouterLink>
                            </div>
                        </div>
                    </nav>

                    <div class="flex">
                        <img src="/icons/searchead.png" alt="" class="w-8 h-8 p-1" >
                        <img src="/icons/shophead.png" alt="" class="w-8 h-8 p-1" >
                    </div>

                </div>

            </div>
         </div>
    </header>
</template>
<script>
import { ref } from 'vue';

import dropdown from "./utilities/lang-dropdown.vue"
export default{
       components: {
        dropdown,
    },
    setup() {
    const showMenu = ref(false);
    const showCategories = ref(false);
    const toggleMenu = () => {
      showMenu.value = !showMenu.value;
    };

    return {
      showMenu,
      showCategories,
      toggleMenu,
    };

  },

}
</script>
