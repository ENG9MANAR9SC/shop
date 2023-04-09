<template>
    <div class="mt-8 p-0.5 rounded-[30px] max-w-sm bg-gradient-to-r custom-bgcolor ">
        <div class="bg-secondery-rose rounded-[30px] flex flex-col hov-img">
            <img src="/icons/drinks/drink1.png" alt="drink" class="mx-auto h-52 object-cover rounded-t-[30px]">   <!--:src="product?.image" -->
            <div class="flex flex-col gap-3 p-2">
                <h2 class="h-sec">{{ category }}</h2>
                <div class="text-base text-primary font-tenor leading-5 min-h-[calc(3*20px)] line-clamp-3"> Lorem used in the graphic, print, and  industries for previewing layouts and visual mockups Lorem used in the graphic,</div> <!--{{ product?.description}}   {{ description }}--> 
                <RouterLink to="/product" class="btn-sm"> {{ $t('Shop Now') }} </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "category",
  props: {
        product: Object,
        category: Object,
    },
};
</script>