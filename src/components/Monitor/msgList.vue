<script setup>
  import dayjs from 'dayjs';
  import { useMsglistStore } from '@/store/msglist';
  const msglist = useMsglistStore();
  const columns = [
        {
          title: '设备ID',
          dataIndex: 'deviceID',
        },
        {
          title: '订阅主题',
          dataIndex: 'topic',
        },
        {
          title: '反馈时间',
          dataIndex: 'resTime',
        },
        {
          title: 'MSG内容',
          dataIndex: 'msgText',
        },
  ];

</script>

<template>
  <main>
    <a-space direction="vertical" style="width: 100%;" size="small">
      <a-range-picker
        style="width: 360px;"
        show-time
        :time-picker-props="{ defaultValue: [dayjs('00:00:00', 'HH:mm:ss'), dayjs('09:09:06', 'HH:mm:ss')] }"
        format="YYYY-MM-DD HH:mm"
      />
      <a-table :columns="columns" :data="msglist.msglist" />
    </a-space>
  </main>
</template>

<style scoped>
  main{
    margin: 20px;
    padding: 10px;
  }
</style>