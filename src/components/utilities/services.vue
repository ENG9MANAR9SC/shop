<template>
    <div class=" bg-white rounded-2xl mt-8">
        <img src="/icons/drinks/drink2.png" alt="" class="w-full h-44 object-cover rounded-md">  
        <h3 class="font-tenor text-xl text-secondery my-2 px-3">{{ title }}</h3>
        <div class="text-lg text-primary font-tenor my-2 px-3">{{description }}</div>
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