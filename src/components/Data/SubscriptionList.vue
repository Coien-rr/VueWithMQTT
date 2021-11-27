<script setup>
  import { subscriptionStore } from '@/store/subscriptionStore';
  import { onMounted } from 'vue-demi';
  const SubscriptionList = subscriptionStore();
  onMounted(() => {
    SubscriptionList.initSubscriptionList();
  })
  const columns = [
    {
      title: 'ClientID',
      dataIndex: 'clientid',
    },
    {
      title:'Topic',
      dataIndex: 'topic',
    },
    {
      title:'Qos',
      dataIndex: 'qos',
    },
    {
      title: 'Node',
      dataIndex: 'node'
    }
  ];
  
  //TODO: add reGet() DONE!
  function reGet(){
    return SubscriptionList.initSubscriptionList();
  }


</script>

<template>
  <div class="SubList">
    <!-- <h1>Hello SubscriptionList!1</h1> -->
    <div class="SubscriptionList" :style="{ display: 'flex' }">
      <a-card  class="Sub" :style="{ width: '1080px' }" title="SubscriptionList"> 
        <template #extra>
          <a-button class="get" @click="reGet()" type="primary">ReGet</a-button>
        </template>   
        <a-table :columns="columns" :data="SubscriptionList.subscriptions" :pagination="false" :bordered="false" :loading= SubscriptionList.loading />
      </a-card>
    </div>
  </div>
</template>

<style scoped>
  .get{
    border-radius: 8px;
  }
  .Sub{
    border-radius: 10px;
  }
</style>