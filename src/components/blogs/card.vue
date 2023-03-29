<template>
    <div class="mt-8">
        <img src="/icons/drinks/drink1.png" alt="" class="h-20 w-full object-cover">
        <h2 class="h-sec px-2 my-2"> title </h2>
        <div class="flex justify-between">
            <div class="flex px-2">
                <img src="/icons/comment.png" alt="" class="w-10">
                <span class="text-lg font-philosopher font-bold text-secondery">Comments</span>
            </div>
            <div class="flex">
                <img src="/icons/views.png" alt="" class="w-10">
                <span class="text-lg font-philosopher font-bold text-secondery">Views</span>
            </div>
        </div>
        <div class="text-base font-tenor text-primary">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries used in the graphic, print, and publishing industries 
        </div>
        <RouterLink to="/product"><button class="bg-secondery text-white px-8 py-2 rounded-[30px] font-tenor m-3">See More</button></RouterLink>
    </div>
</template>

<script>
export default {
  name: "card",
  props: {
    title: String,
    description: String,
   /*  image: String,  */
  },
};
</script>