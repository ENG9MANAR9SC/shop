<template>
    <header>
        <div class="">
            <div class="h-8 bg-primary">
                <div class="c-container flex justify-between items-center text-white">
                    <div class="flex">
                        <img src="/icons/socialmedia/call.png" alt="" class="h-6 w-6 mx-1">
                        <span>{{ $t('+964 *** ***') }} </span>
                    </div>

                    <div>
                        <dropdown class="sm:block hidden"></dropdown>
                    </div>
                </div>
            </div>

            <div class="bg-bglight font-philosopher font-bold">
                <div class="c-container flex justify-between items-center">
                    <div class="">
                        <RouterLink to="/"><img src="/icons/logo.png" alt="" class="w-16 h-auto"></RouterLink>
                    </div>

                    <!-- list Desktop & mobile -->
                    <nav class="flex items-center justify-between flex-wrap p-6">
                        <!-- <div class="flex items-center flex-shrink-0 text-secondery mr-6">
                            <i class="fas fa-shopping-cart fa-2x"></i>
                            <span class=" text-xl tracking-tight ml-2">My Store</span>
                        </div> -->
                        <div class="block lg:hidden">
                            <button class="flex items-center px-3 py-2 border rounded text-secondery border-white hover:text-gray-200 hover:border-gray-200" @click="toggleMenu">
                                <!-- <i class="fas fa-bars"></i> -->
                                <img src="/icons/menu.png" alt="" class="h-5 w-5" @click="toggleMenu">
                            </button>
                        </div>
                        <div :class="{ 'hidden': !showMenu }" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                            <div class="text-lg lg:flex-grow">
                                <RouterLink  class="block mt-4 lg:inline-block lg:mt-0 text-secondery mx-2 p-2 hov-menu" to="/">{{ $t('Home') }}  </RouterLink>
                                <RouterLink class="block mt-4 lg:inline-block lg:mt-0 text-secondery hover:text-gray-200 mx-2 p-2 hov-menu" to="/product"> {{ $t('Shop') }} </RouterLink>
                                <div class="relative mt-4 lg:hidden">
                                    <button class="text-secondery hover:text-gray-200 focus:outline-none focus:shadow-outline mx-2 p-2 hov-menu" @click="showCategories = !showCategories">
                                        <span>Categories</span>
                                        <i :class="{ 'fa-angle-down': !showCategories, 'fa-angle-up': showCategories }" class="fas ml-2"></i>
                                    </button>
                                    <div :class="{ 'hidden': !showCategories }" class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-10">
                                      <!--   <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900"> Category 1  </a> -->
                                    </div>
                                </div>
                                    <RouterLink class="block mt-4 lg:inline-block lg:mt-0 text-secondery mx-2 p-2 hov-menu" to="/blog">{{ $t('Blog') }} </RouterLink>
                                    <RouterLink class="block mt-4 lg:inline-block lg:mt-0 text-secondery mx-2 p-2 hov-menu" to="/contact-us">{{ $t('Contact us') }} </RouterLink>
                                    <RouterLink class="block mt-4 lg:inline-block lg:mt-0 text-secondery mx-2 p-2 hov-menu" to="/about-us">{{ $t('About us') }}  </RouterLink>
                            </div>
                        </div>
                    </nav>

                    <div class="flex gap-3 items-center">
                        <search> </search>
                        <RouterLink to="/cart"><img src="/icons/shophead.png" alt="" class="w-8 h-8 p-1" ></RouterLink>
                        <div>{{ cart.cQuantity }}</div>
                    </div>

                </div>

            </div>
         </div>
    </header>
</template>
<script>
import { ref } from 'vue';
import search from './utilities/search.vue'
import dropdown from "./utilities/lang-dropdown.vue"
export default{
       components: {
        dropdown,
        search,
    },
    setup() {
    const showMenu = ref(false);
    const showCategories = ref(false);
    const toggleMenu = () => {
      showMenu.value = !showMenu.value;
      console.log('do')
    };

    return {
      showMenu,
      showCategories,
      toggleMenu,
    };

  },

}
</script>

<script setup>
import { CartStore } from '../stores/counter'

const cart = CartStore()

</script>
<style>
.hov-menu {
   @apply hover:bg-secondery-rose hover:rounded-2xl hover:scale-105 duration-300 delay-150  open:bg-primary-orange
}

</style>