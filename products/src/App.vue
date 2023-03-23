

<template>
  <CustomHeader></CustomHeader>
  <main class="">
      <RouterView />
    </main>
    <CustomFooter></CustomFooter>
</template>

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
