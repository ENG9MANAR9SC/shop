<template>
    <div class=" bg-white rounded-2xl mt-8 " >
        <img src="/icons/drinks/drink2.png" alt="" class="w-full h-44 object-cover rounded-md">
        <div class="px-3 pb-3">
            <h3 class="h-sec my-2">{{ title }}</h3>
            <div class="h-description leading-6 min-h-[calc(5*24px)] line-clamp-5">{{description }}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: "service",
  props: {
    title: String,
    description: String,
   /*  image: String,  */
  },
 
};
</script>

