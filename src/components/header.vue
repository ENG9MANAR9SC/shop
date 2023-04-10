<template>
    <header>
        <div class="">
            <div class="h-12 bg-primary">
                <div class="c-container flex justify-between items-center text-white">
                    <div class="flex">
                        <img src="/icons/socialmedia/call.png" alt="" class="h-6 w-6 mx-1">
                        <span class="ltr">{{ $t('+964 *** ***') }} </span>
                    </div>

                    <div class="flex items-center ">
                        <div class="mx-6">
                           <RouterLink to="/register" ><button class="mx-2 py-2 px-2 rounded-lg font-tenor">{{ $t('Register') }} </button></RouterLink> 
                           <RouterLink to="/login" ><button class="mx-2  py-2 px-2 rounded-lg font-tenor">{{ $t('Log in') }}</button></RouterLink>
                        </div>
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
                    <nav class="flex items-start justify-start flex-wrap p-6" >
                        <div class="block lg:hidden " >
                            <button class="flex items-start px-3 py-2 border rounded   text-secondery border-white hover:text-gray-200 hover:border-gray-200" @click="toggleMenu">
                                <i class="fas fa-bars" ></i>
                                <img src="/icons/menu.png" alt="" class="h-5 w-5" >
                            </button>
                        </div>
                        <div :class="{ 'hidden': !showMenu }" class="w-full block  z-10 flex-grow lg:flex lg:items-center lg:w-auto">
                            <div class="text-lg lg:flex-grow ">
                                <RouterLink  class="block mt-4 lg:inline-block lg:mt-0 text-secondery mx-2 p-2 hov-menu" to="/">{{ $t('Home') }}  </RouterLink>
                                <RouterLink class="block mt-4 lg:inline-block lg:mt-0 text-secondery hover:text-gray-200 mx-2 p-2 hov-menu" to="/product"> {{ $t('Shop') }} </RouterLink>
                                <RouterLink class="block mt-4 lg:inline-block lg:mt-0 text-secondery mx-2 p-2 hov-menu" to="/Categories">{{ $t('Categories') }} </RouterLink>
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
/*  import { CartStore } from '../stores/cart'*/
/*  const cart = CartStore()*/
export default{
       components: {
        dropdown,
        search,
    },
    setup() {
/*     const showMenu = ref(false);
     const toggleMenu = () => {
      showMenu.value = !showMenu.value;
      
      console.log('do')
    };  */

    return {
      showMenu,
      toggleMenu,
    };

  },

}
</script>

<script setup>
import { CartStore } from '../stores/cart'

const cart = CartStore()
const showMenu = ref(false);
     const toggleMenu = () => {
      showMenu.value = !showMenu.value;
      
      console.log('do')
    }; 
</script> 
<style>
.hov-menu {
   @apply hover:bg-secondery-rose hover:rounded-2xl hover:scale-105 duration-300 delay-150  open:bg-primary-orange
}

</style>