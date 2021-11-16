<script setup>
  const UserInfo = {
    name: 'Coien',
    email: '972054003@qq.com'
  }
</script>

<template>
  <main>
    <div class="user">
      <span>欢迎！</span>
      <span class="info">
        {{UserInfo.name}}, {{UserInfo.email}}
      </span>
    </div>
  </main>
</template>

<style scoped>
  main{
    left: 13rem;
    position: fixed;
    /* background: rgb(201, 207, 212); */
    border-bottom: 1px solid #eaecef;
    height: 90px;
    width: 100%;
  }

  .user{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 90px;
    margin-left: 30px;
  }

  .user span{
    font-size: 20px;
  }

  .user .info{
    font-size: 14px;
    margin-top: 12px;
  }
</style>