<script setup>
  import Navbar from '@/components/navbar.vue';
  // import Asidebar from '@/components/asidebar.vue';
  import newMenuVue from '../components/Menu/newMenu.vue';
</script>

<template>
  <div class="container">
    <Navbar/>
    <newMenuVue/>
  </div>
</template>

<style scoped>
  .container{
    display: block;
  }
</style>