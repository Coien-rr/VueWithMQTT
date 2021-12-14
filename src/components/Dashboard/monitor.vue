<script setup>
  import { onMounted, reactive, readonly, ref } from 'vue';
  import { clientStore } from '@/store/clientStore';
  import MsgList from '@/components/Monitor/msgList.vue';
  import { useConfigStore } from '@/store/config';

  const targetTopic = ref('');
  const monitorConfig = useConfigStore();
  const topicList = reactive(["callsub","testtopic"]);
  onMounted(() => {});

  function selectClient(){
    console.log(targetTopic.value);
    monitorConfig.initConfig(targetTopic.value);
    monitorConfig.moniteClient();
    // console.log(monitorConfig.subscription);
  }

</script>

<template>
  <main>
    <div class="monitorContent">
      <a-space direction="vertical" style="display: block;">
        <a-row class="Content">
          <a-col :span="8">
            <div class="target">
              <p>TopicMoniting!</p>
              <span>TopicID:   </span>
              <!-- TODO: options DONE!-->
              <!-- TODO: 选中后重新渲染页面显示新的数据 -->
              <a-select :style="{width:'260px'}" v-model="targetTopic" placeholder="Please select Topic ..." @change="selectClient()" allow-search>
                <a-option disabled>Select Topics!</a-option>
                <a-option v-for="topic in topicList" :key="topic">{{topic}}</a-option>
              </a-select>
            </div>
          </a-col>
        </a-row>
      </a-space>
    </div>
    <MsgList></MsgList>
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