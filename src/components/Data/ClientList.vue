<script setup>
  import { clientStore } from '@/store/clientStore';
  import { onMounted } from 'vue-demi';
  const clientList = clientStore();
  onMounted(()=>{
    clientList.initClientList();
  })
  const columns = [
    {
      title: 'ClientID',
      dataIndex: 'clientid',
    },
    {
      title:'Subscriptions',
      dataIndex: 'subscriptions_cnt',
    },
    {
      title: 'Connected',
      dataIndex: 'connected',
    },
    {
      title: 'Connected_At',
      dataIndex: 'connected_at',
    },
    {
      title: 'IP_Address',
      dataIndex: 'ip_address',
    },
  ];

  //TODO:refresh 通过设置store的loading来实时改变TableLoading DONE!
  async function reFresh(){
    return clientList.initClientList();
  }

  function disConnect(client){
    console.log(client);
    client.connected = false;
    return clientList.disConnectClient(client.clientid);
  }

  function disabled(client){
    return !client.connected;
  }

</script>

<template>
    <div class="ClientList" :style="{ display: 'flex' }">
      <a-card class="Client" :style="{ width: '1080px' }" title="ClientList">
        <template #extra>
          <a-button class="get" @click="reFresh()" type="primary">ReGet</a-button>
        </template>
        <a-table :pagination="false" :bordered="false" :data="clientList.clients" :loading= clientList.loading >
          <template #columns>
            //TODO: 使用v-for重构 DONE!
            <a-table-column v-for="column in columns" :key="column.title" :title="column.title" :data-index="column.dataIndex" align="center"></a-table-column>
            <a-table-column title="Disconnect" align="center">
              <template #cell="{ record }">
                <a-button class="disconnect" type="primary" status="danger" :disabled="disabled(record)" @click="disConnect(record)">DisConnect</a-button>
              </template>
            </a-table-column>
          </template>
        </a-table>
      </a-card>
    </div>
</template>

<style scoped>
  .ClientList{
    margin-top: 20px;
    max-height: 358px;
    min-height: 358px;
  }

  .Client{
    border-radius: 10px;
  }

  .get,
  .disconnect {
    border-radius: 8px;
  }
</style>
