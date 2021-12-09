<script setup>
  import { onMounted, ref } from 'vue';
  import { clientStore } from '@/store/clientStore';

  const targetClient = ref('');
  const clientList = clientStore();
  onMounted(() => {
    clientList.initClientList();
    clientList.ClientIDList();
    // console.log(clientList.clientidlist);
    // clientList.clients;
    // console.log(clientList.clients[0]);
  });

</script>

<template>
  <main>
    <div class="monitorContent">
      <a-space direction="vertical" style="display: block;">
        <a-row class="Content">
          <a-col :span="8">
            <div class="target">
              <p>ClientMoniting!</p>
              <span>ClientID:   </span>
              <!-- TODO: options -->
              <a-select :style="{width:'260px'}" :options="clientList.clientlist" v-model="targetClient" placeholder="Please select Client ..." allow-search>
                <!-- <a-option disabled>ClientList</a-option> -->
              </a-select>
              <!-- <select v-model="targetClient">
                <option disabled value="">Please select one</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select> -->
              <!-- {{targetClient}} -->
            </div>
          </a-col>
          <a-col :span="16">
            
          </a-col>
      </a-row>
      </a-space>
    </div>
    <h1>Hello Monitor!</h1>
  </main>
</template>

<style scoped>
  main {
    display: block;
    position: fixed;
    left: 13rem;
    right: 0;
    padding-bottom: 150px;
    height: 110vh;
    overflow: auto;
    margin-bottom: 30px;
  }

  main .monitorContent .Content {
    height: 110px;
    border-bottom: solid 1px #eaecef;
  }

  main .monitorContent .Content {
    margin-top: 0px;
  }

  main .monitorContent .Content .target p{
    line-height: 1.4;
    margin-left: 25px;
    font-size: 22px;
    margin-block-start: 18px;
    margin-block-end: 15px;
  }

  main .monitorContent .Content .target span{
    margin-left: 60px;
    font-size: 17px;
    color: var(--color-text-2);
    margin-right: 10px;
  }

</style>