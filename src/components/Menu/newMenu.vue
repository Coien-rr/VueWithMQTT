<script setup>
  import { ref } from 'vue-demi';
  import router from '../../router';
  import MenuItem from './MenuItem.vue';
  const isActive = ref(1);
  const MenuList = [
    {
      id: 1,
      itemName: '控制面板',
      icon: `<i class='bx bxs-dashboard'></i>`,
      // isSelect: true
    },
    {
      id:2,
      itemName: '数据面板',
      icon: `<i class='bx bx-line-chart'></i>`,
      // isSelect: false
    },
    {
      id:3,
      itemName: '订阅监控',
      icon: `<i class='bx bxs-analyse'></i>`,
      // isSelect: false
    }
  ];

  function listenItem(item){
    // console.log(item);
    isActive.value = item.id;
    console.log(isActive.value);
    router.replace({
      path: '/dashboard/data',
    });
  }
  
</script>

<template>
  <aside class="siderbar">
    <div class="container">
      <ul class="nav-links">
        <li class="dashboard">
          <MenuItem v-for="item in MenuList" :key="item.id" @click="listenItem(item)" :class="{ active: item.id === isActive}">
            <template v-slot:icon>
              <i v-html="item.icon"></i>
            </template>
            <template v-slot:itemName>
              {{ item.itemName }}
            </template>
          </MenuItem>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap');

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
  }

  aside{
    display: block;
  }

  .siderbar{
    font-family: 'Noto Sans SC', sans-serif;
    margin: 0;
    bottom: 0;
    top: 3.6rem;
    z-index: 10;
    width: 13rem;
    position: fixed;
    /* background: red; */
    border-right: 1px solid #eaecef;
    box-sizing: border-box;
    padding-top: 7px;
  }

  
</style>