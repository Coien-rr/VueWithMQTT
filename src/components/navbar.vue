<script setup>

</script>

<template>
<nav>
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
        <icon-github :style="{fontSize:'20px'}" stroke-linecap="round" />
      </div>
      <div class="pagemode">
        <icon-moon :style="{fontSize:'20px'}" stroke-linecap="round" />
      </div>
      <div class="userInfo">
        <icon-user :style="{fontSize:'20px'}" stroke-linecap="round" />
      </div>
    </div>
  </div>
</nav>
</template>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  nav{
    position: fixed;
    top: 0;
    left: 0;
    height: 60px;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.1);
    /* background: red; */
    border-bottom: solid 0.5px rgba(0, 0, 0, 0.3);
  }

  nav .navbar{
    height: 100%;
    max-width: 1900px;
    margin: auto;
    padding: 0px 15px 0px 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background: green; */
  }

  nav .navbar .logo{
    display: flex;
  }

  nav .navbar .logo img{
    height: 32px;
    width: 32px;
  }

  nav .navbar .logo p{
    margin-left: 15px;
    font-size: 30px;
    font-weight: 500;
    color: rgb(0, 82, 137);

  }

  nav .navbar .appearance{
    margin-top: 10px;
    display: flex;
    /* background: red; */
    align-items: center;
    justify-content: space-between;
    line-height: 50px;
  }

  nav .navbar .appearance div{
    margin: 0 10px;
  }
</style>