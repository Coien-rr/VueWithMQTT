<script setup>
  import Navbar from '@/components/navbar.vue';
  import Asidebar from '@/components/asidebar.vue';
</script>

<template>
  <div class="container">
    <Navbar/>
    <Asidebar/>
    <router-view/>
  </div>
</template>

<style>
  .container{
    display: block;
  }
</style>
