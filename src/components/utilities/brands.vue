<template>
    <div class="">
        <div class="mt-8 p-0.5 pt-0 pb-0 custom-bgcolor rounded-[30px]">
            <div class="bg-white rounded-[30px] p-4">
                <div class="flex justify-between -mt-8">
                    <h3 class="text-xl text-secondery font-tenor font-bold">{{ title }}</h3>
                    <img src="/icons/logo.png" alt="" class="w-16 h-auto">
                </div>
                <div class="text-lg text-primary font-tenor mb-4">{{ description }}</div>
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