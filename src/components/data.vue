<script setup>
  import { clientStore } from '@/store/clientStore';
  import { onMounted, reactive } from 'vue-demi';
  const clientList = clientStore();
  onMounted(()=>{
    clientList.initClientList();
    console.log(clientList.clients);
  })
  const formOptions = reactive({
      loading: false,
  });
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
  //TODO:refresh
  function reFresh(){
    formOptions.loading = true;
    // await clientList.initClientList();
    new Promise(function(resolve){
      console.log("Refresh!")
      clientList.initClientList();
    }).then(()=>{
      console.log('Endddd');
      formOptions.loading = false;
    });
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
          <a-button class="get" @click="reFresh()" type="primary">Get</a-button>
        </template>
        <a-table :columns="columns" :data="clientList.clients" :pagination='true' :loading= formOptions.loading />
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

  .get {
    border-radius: 8px;
  }
</style>
