<script setup>
  import Navbar from '@/components/navbar.vue';
  //import Asidebar from '@/components/asidebar.vue';
  import NewMenu from '../components/Menu/newMenu.vue';
</script>

<template>
  <div class="container">
    <Navbar/>
    <NewMenu/>
    <router-view/>
  </div>
</template>

<style>
  .container{
    display: block;
  }
</style>
