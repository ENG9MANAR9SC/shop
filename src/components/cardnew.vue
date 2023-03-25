<template>
    <div class="c-container mt-8">
        <div class="relative">
            <div class="bg-primary-blue w-full h-44 top-2 -left-2 rounded-md absolute z-[-1]"></div>   
            <img src="../components/icons/drinks/drink3.png" alt="" class="w-full h-44 object-cover rounded-md">  
            <div class="flex justify-between my-3">
                <h3 class="font-tenor text-xlarge text-secondery">{{ title }}</h3>
                <div class="flex">
                    <img src="../components/icons/shopping.png" alt="" class="bg-secondery rounded-lg w-6 h-6 p-1 m-1">
                    <img src="../components/icons/search.png" alt="" class="bg-primary-blue rounded-lg w-6 h-6 p-1 m-1">
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
  name: "cardnew",
  props: {
    title: String,
   /*  image: String,  */
  },
};
</script>