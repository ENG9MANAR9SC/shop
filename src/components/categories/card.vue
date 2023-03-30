<template>
    <div class="mt-8 p-0.5 rounded-[30px] max-w-sm bg-gradient-to-r custom-bgcolor">
        <div class="bg-secondery-rose sm:h-96 h-80 rounded-[30px] flex flex-col pb-4">
            <img src="/icons/drinks/drink3.png" alt="drink" class="w-full h-40 object-cover rounded-t-[30px]">
            <h2 class="h-sec px-2 my-2">{{ title }}</h2>
            <div class="text-base text-primary font-tenor px-2 overflow-hidden text-ellipsis h-48 my-2">{{ description }}</div>
            <RouterLink to="/product" class="btn">Shop Now</RouterLink>
        </div>
    </div>
</template>

<script>
export default {
  name: "category",
  props: {
    title: String,
    description: String,
   /*  image: String,  */
  },
};
</script>