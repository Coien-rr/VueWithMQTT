<script setup>
  import Navbar from '@/components/navbar.vue';
  import Asidebar from '../components/asidebar.vue';
  import Content from '../components/content.vue';
  import Chart from '../components/chart.vue';
</script>

<template>
  <div class="container">
    <Navbar/>
    <Asidebar/>
    <Content/>
    <Chart/>
  </div>
</template>

<style>
  .container{
    display: block;
  }
</style>
