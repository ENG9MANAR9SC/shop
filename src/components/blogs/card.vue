<template>
    <div class="mt-8 mb-4">
        <div class="pb-0.5 rounded-[20px] max-w-sm bg-gradient-to-r custom-bgcolor">
            <div class="rounded-[20px] bg-white pb-2">
                <div class="relative">
                    <div class="bg-black rounded-[20px]"> 
                        <img src="/icons/drinks/drink1.png" alt="" class="h-44 w-full object-cover rounded-[20px] opacity-80">
                    </div>
                    <h2 class="h-sec px-4 text-white absolute top-3/4">Post Story </h2>
                </div>
                <div>
                    <div class="flex justify-between px-3">
                        <div class="flex m-1">
                            <img src="/icons/comment.png" alt="" class="w-10 p-1">
                            <span class="text-base font-tenor font-bold text-secondery py-2 mx-2">14</span>
                        </div>
                        <div class="flex m-1">
                            <img src="/icons/views.png" alt="" class="w-10 p-1">
                            <span class="text-base font-tenor font-bold text-secondery py-2 mx-2">26</span>
                        </div>
                    </div>
                    <div class="h-description m-3 text-base leading-5 min-h-[80px] line-clamp-4">
                        {{ description }} industries and publishing industries used in the graphic, print, and publishing industri 
                    </div>
                    <div class="flex w-full px-3">
                        <RouterLink to="/blogshow" class="btn text-base font-bold w-full"> {{ $t('See More') }} </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "card",
  props: {
    title: String,
    description: String,
   /*  image: String,  */
  },
};
</script>