<template>
    <div class="">
        <div class="mt-8 p-0.5 pt-0 pb-0 custom-bgcolor rounded-[30px]">
            <div class="bg-white w-full rounded-[30px] p-4">
                <div class="flex items-center justify-between -mt-6">
                    <h3 class="h-sec">{{ title }}</h3>
                     <img src="/icons/logo.png" alt="" class="w-16 h-auto"> 
                </div>
                <div class="h-description leading-5 min-h-[80px] line-clamp-4 mb-4">{{ description }}</div>
                <RouterLink to="" class="text-primary font-tenor font-bold">See More</RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "brand",
  props: {
    title: String,
    description: String,
   /*  image: String,  */
  },
};
</script>