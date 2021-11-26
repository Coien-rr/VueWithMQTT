<script setup>
  import { clientStore } from '@/store/clientStore';
  import { onMounted, reactive } from 'vue-demi';
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

  //TODO:refresh 通过设置store的loading来实时改变TableLoading
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
	<main>
		<!-- <h1>Hello Data</h1>
		<a-space>
			<a-button @click="clientList.initClientList()" type="primary">Get</a-button>
		</a-space> -->
    <div class="ClientList" :style="{ display: 'flex' }">
      <a-card :style="{ width: '1080px' }" title="ClientList">
        <template #extra>
          <a-button class="get" @click="reFresh()" type="primary">ReGet</a-button>
        </template>
        <a-table :data="clientList.clients" :pagination='true' :loading= clientList.loading>
          <template #columns>
            <a-table-column title="ClientID" data-index="clientid"></a-table-column>
            <a-table-column title="Connected" data-index="connected"></a-table-column>
            <a-table-column title="Connected_At" data-index="connected_at"></a-table-column>
            <a-table-column title="IP_Address" data-index="ip_address"></a-table-column>
            <a-table-column title="Disconnect">
              <template #cell="{ record }">
                <a-button class="disconnect" type="primary" status="danger" :disabled="disabled(record)" @click="disConnect(record)">DisConnect</a-button>
              </template>
            </a-table-column>
          </template>
        </a-table>
      </a-card>
    </div>
	</main>
</template>

<style scoped>
  main {
    position: fixed;
    top: 130px;
    left: 13rem;
    padding: 20px;
  }
  .ClientList{
    margin-top: 20px;
  }

  .get,
  .disconnect {
    border-radius: 8px;
  }
</style>
