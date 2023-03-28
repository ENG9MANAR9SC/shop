<template>
    <div class="">
        <div class="mt-8 p-0.5 rounded-[20px] max-w-sm bg-gradient-to-r custom-bgcolor">
            <div class="rounded-[20px] bg-white p-4">
                <img src="/icons/drinks/drink1.png" alt="" class="rounded-[20px]">
                <h3 class="h-header my-2">{{ title }}</h3>
                <div class="text-base text-primary font-tenor px-2 overflow-hidden text-ellipsis h-24 my-2">{{ description }} </div>
                <div class="flex my-2">
                    <span class="mx-2 text-xl text-secondery">48$</span>
                    <span class="mx-2 text-base text-primary line-through my-2">66$</span>
                </div>
                <button class="btn-secondery">Add to Cart</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "product",
  props: {
    title: String,
    description: String,
   /*  image: String,  */
  },
};
</script>