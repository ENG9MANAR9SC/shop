<template>
    <header>
        <div class="mb-6">
            <div class="h-8 bg-primary">
                <div class="c-container flex justify-between text-white">
                    <div class="flex">
                        <img src="./icons/call.png" alt="" class="h-6 w-6 mx-1 mt-1">
                        +964 847 857</div>
                    <div>
                        <dropdown class="sm:block hidden"></dropdown>
                       </div>
                </div>
            </div>
            <div class="h-24 bg-bglight">
                <div class="c-container flex justify-between items-center">
                    <div class="">
                        <img src="./icons/unsplash_gTV2osuOsJc.png" alt="" width="62px" height="62px">
                    </div>
                        <!-- list -->
                    <div class="flex justify-center text-large font-philo font-bold text-secondery ">
                        <a href="" class="mx-2">Home</a>
                        <a href="" class="mx-2">Shop</a>
                        <a href="" class="mx-2">Categories</a>
                        <a href="" class="mx-2">Blogs</a>
                        <a href="" class="mx-2">Contact us</a>
                        <a href="" class="mx-2">About us</a>
                    </div>

                    <div class="flex">

                        <img src="./icons/search.png" alt="" class="w-8 h-8 p-1" >
                        <img src="./icons/shop.png" alt="" class="w-8 h-8 p-1" >

                    </div>

                </div>

            </div>
         </div>
    </header>
</template>
<script>
import dropdown from "./utilities/lang-dropdown.vue"

export default{
    name: 'custom-header',
    components: {
		dropdown
	},
	methods: {
	},

}
</script>