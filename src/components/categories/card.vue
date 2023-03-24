<template>
    <div class="mt-2 p-[2px] rounded-[30px] max-w-sm bg-gradient-to-r from-gradone via-gradmiddel to-gradone">
        <div class="bg-secondery-rose h-[400px] rounded-[30px] flex flex-col">    
            <img src="../icons/drinks/drink3.png" alt="goo" class="w-full rounded-t-[30px]">
            <h2 class="text-2xlarge text-secondery font-Philosopher font-bold px-2 my-2">{{ title }}</h2>
            <div class="text-base text-primary font-Tenor px-2 overflow-hidden text-ellipsis h-[8rem]">{{ description }}</div>
            <button class="bg-secondery text-white px-8 py-2 rounded-[30px] m-2">Shop Now</button>
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