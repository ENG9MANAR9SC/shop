<template>
    <div class="">
        <div class="mt-8 p-1     pt-0 pb-0 pr-0 custom-bgcolor rounded-[30px]">
            <div class="bg-white rounded-[30px] p-4">
                <div class="flex justify-end -mt-6">
                    <h3 class="text-base text-secondery font-tenor font-bold">2-16-2023</h3>
                </div>
                <div class="flex items-center">
                    <img src="/icons/quate.png" alt="" class="h-6 mb-3">
                    <h3 class="h-sec mb-3 px-2">{{ title }}</h3>
                </div>
                <div class="h-description leading-5 min-h-[80px] line-clamp-4 mb-4">{{ description }}</div>
                <div to="" class="text-primary font-tenor font-bold">Manar Alkheir</div>
                
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