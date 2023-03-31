

<template>
    <div class="flex flex-col min-h-screen">
        <CustomHeader></CustomHeader>
        <main class="bg-primary-blue/10">
             <RouterView />
        </main>
        <CustomFooter class="mt-auto"></CustomFooter>
        </div>
</template>"

<style scoped>

</style>
<script>
import CustomHeader from './components/header.vue';
import CustomFooter from './components/footer.vue';
export default {
  data() {
    return {

    }
  },
  
components: {
    CustomHeader,
    CustomFooter,


  },
}
</script>
