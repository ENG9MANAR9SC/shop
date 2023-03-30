<template>
        <div class="">
        <div class="mt-8 p-0.5 pt-0 pb-0  custom-bgcolor rounded-[30px]">
            <div class="bg-white rounded-[30px] p-4">
                <div class="flex justify-end -mt-8">
                    <h3 class="text-base text-secondery font-tenor font-bold">2-16-2023</h3>
                </div>
                <div class="flex">
                    <img src="/icons/quate.png" alt="" class="px-2 ">
                    <h3 class="h-sec my-2">{{ title }}</h3>
                </div>
                <div class="h-description mb-4">{{ description }}</div>
                <RouterLink to="" class="text-primary font-tenor font-bold"></RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "review",
  props: {
    title: String,
    description: String,
   /*  image: String,  */
  },
};
</script>