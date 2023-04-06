<template>
    <div class="mt-8 p-0.5 rounded-[30px] max-w-sm bg-gradient-to-r custom-bgcolor ">
        <div class="bg-secondery-rose rounded-[30px] flex flex-col">
            <img src="/icons/drinks/drink3.png" alt="drink" class="w-full h-40 object-cover rounded-t-[30px]">
            <div class="flex flex-col gap-3 p-2">
                <h2 class="h-sec">{{ title }}</h2>
                <div class="text-base text-primary font-tenor leading-5 min-h-[calc(3*20px)] line-clamp-3">{{ description }}</div>
                <RouterLink to="/product" class="btn-sm"> {{ $t('Shop Now') }} </RouterLink>
            </div>
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