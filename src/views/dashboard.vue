<script setup>
  import Navbar from '@/components/navbar.vue';
  import Asidebar from '../components/asidebar.vue';
  import Content from '../components/content.vue';
</script>

<template>
  <div class="container">
    <Navbar/>
    <Asidebar/>
    <Content/>
    <router-view/>
  </div>
</template>

<style>
  .container{
    display: block;
  }
</style>
