<template>
    <div class="mt-8">
        <img src="/icons/drinks/drink1.png" alt="" class="h-36 w-full object-cover">
        <h2 class="h-sec px-2 my-2"> </h2>
        <div class="flex justify-between">
            <div class="flex m-1">
                <img src="/icons/comment.png" alt="" class="w-10 p-2">
                <span class="text-lg font-tenor font-bold text-secondery py-2">Comments</span>
            </div>
            <div class="flex m-1">
                <img src="/icons/views.png" alt="" class="w-10 p-2">
                <span class="text-lg font-tenor font-bold text-secondery py-2">Views</span>
            </div>
        </div>
        <div class="h-description mx-2 my-3">
            {{ description }} and publishing industries used in the graphic, print, and publishing industries 
        </div>
        <RouterLink to="/product" class="btn w-1/2">See More</RouterLink>
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