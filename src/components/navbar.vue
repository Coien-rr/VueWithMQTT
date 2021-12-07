<script setup>

</script>

<template>
<header>
  <div class="navbar">
    <div class="logo">
      <img src="@/assets/MQTTlogo.png" alt="logo"/>
      <p>VQTT LAB</p>
    </div>
    <div class="appearance">
      <div class="info">
        <icon-notification :style="{fontSize:'20px'}" stroke-linecap="round"/>
      </div>
      <div class="language">
        <icon-language :style="{fontSize:'20px'}" stroke-linecap="round" />
      </div>
      <div class="github">
        <a class="githubWeb" href="https://github.com/" target="_blank">
          <icon-github :style="{fontSize:'20px'}" stroke-linecap="round" />
        </a>
      </div>
      <div class="pagemode">
        <icon-moon :style="{fontSize:'20px'}" stroke-linecap="round" />
      </div>
    </div>
    <div class="userInfo">
        <!-- <icon-user :style="{fontSize:'20px'}" stroke-linecap="round" /> -->
        <a-avatar :size='40' :style="{ backgroundColor: '#00d0b6' }">
          <!-- <img src="@/assets/MQTTlogo.png" alt="User"> -->
          VQTT
        </a-avatar>
      </div>
  </div>
</header>
</template>


<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  header{
    /* position: fixed; */
    top: 0;
    left: 0;
    height: 60px;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.1);
    /* background: red; */
    border-bottom: solid 1px #eaecef;
    z-index: 20;
  }

  header .navbar{
    height: 100%;
    max-width: 1900px;
    margin: auto;
    padding: 0px 15px 0px 25px;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    box-sizing: border-box;
    /* background: green; */
  }

  header .navbar .logo{
    display: flex;
    /* margin-right: 50px; */
  }

  header .navbar .logo img{
    height: 32px;
    width: 32px;
  }

  header .navbar .logo p{
    display: flex;
    margin-left: 15px;
    font-size: 25px;
    font-weight: 600;
    color: rgb(0, 82, 137);
    /* text-align: center; */
    align-items: center;

  }

  header .navbar .appearance{
    /* margin-top: 10px; */
    display: flex;
    margin: 0px 0px 0px 1450px;
    /* background: red; */
    text-align: center;
    vertical-align: middle;
    line-height: 50px;
  }

  header .navbar .appearance div{
    margin: 10px 10px 0px;
  }

  header .navbar .appearance .github .githubWeb{
    color: black;
    text-decoration: none;
  }

  header .navbar .userInfo{
    margin-left: 15px;
  }

</style>