<script setup>
  // import ClientListVue from '@/components/ClientList.vue';
  import ClientList from '@/components/Data/ClientList.vue';
  import TopicList from '@/components/Data/TopicList.vue';
  import SubscriptionList from '@/components/Data/SubscriptionList.vue';
</script>

<template>
	<main>
    <div class="container">
      <a-row>
        <a-col :span = "16">
          <ClientList/>
          <a-divider />
          <SubscriptionList/>
        </a-col>
        <a-col :span = "8">
          <TopicList/>
        </a-col>
      </a-row>
    </div>
	</main>
</template>

<style scoped>
  main {
    display: block;
    position: fixed;
    /* top: 120px; */
    left: 13rem;
    right: 0;
    /* bottom: 0; */
    /* padding: 20px; */
    /* width: 100%; */
    padding-bottom: 150px;
    padding-left: 20px;
    height: 110vh;
    overflow: auto;
    margin-bottom: 30px;
  }
  
</style>
