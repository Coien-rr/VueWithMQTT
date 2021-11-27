<script setup>
  const columns = [
    {
      title: 'Topic',
      dataIndex: 'topic',
    },
    {
      title:'Node',
      dataIndex: 'node',
    },
  ];
  const data = [
    {
      topic: 'callsub',
      node: 'emqx@127.0.0.1',
    }
  ]
</script>

<template>
  <!-- <h1>Hello Topic!</h1> -->
  <div class="TopicList" :style="{ display: 'flex' }">
    <a-card class="Topic" :style="{ width: '520px' }" title="TopicList"> 
      <template #extra>
        <a-button class="get" @click="reFresh()" type="primary">ReGet</a-button>
      </template>   
      <a-table :columns="columns" :data="data" :pagination="false" :bordered="false"/>
    </a-card>
  </div>
</template>

<style scoped>
  .TopicList{
    margin-left: 0px;
    min-height: 500px;
    margin-top: 20px;
  }

  .Topic{
    border-radius: 10px;
  }

  .get{
    border-radius: 8px;
  }
</style>