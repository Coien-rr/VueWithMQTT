<script setup>
  import { onMounted, reactive, readonly, ref } from 'vue';
  import { clientStore } from '@/store/clientStore';

  const targetClient = ref('');

  const clientList = clientStore();
  let clients = reactive([]);
  
  onMounted(() => {
    clientList.initClientList();  
    //TODO: 用promise改写getClientList的异步逻辑 再用async改写异步逻辑; 
    setTimeout(() => {
      get();
    }, 500);
  });

  function get(){
    let list = clientList.getClientList;
    for(let i = 0; i < list.length; ++i){
      clients.push(list[i]);
    }
  }

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
              <!-- TODO: options DONE!-->
              <!-- TODO: 选中后重新渲染页面显示新的数据 -->
              <a-select :style="{width:'260px'}" v-model="targetClient" placeholder="Please select Client ..." allow-search>
                <a-option disabled>Select clients!</a-option>
                <a-option v-for="clientid in clients" :key="clientid">{{clientid}}</a-option>
              </a-select>

              <button @click="get()"><icon-refresh /></button>
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