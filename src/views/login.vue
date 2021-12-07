<script setup>
  // import "tailwindcss/tailwind.css"
  import { loginMqtt } from '../utils/qfwAPI';
  import { onMounted, reactive } from 'vue-demi';
  import { Message } from '@arco-design/web-vue';
  import router from '../router';
  import Cookies from 'js-cookie';
  

  onMounted ( () => {
    // const cookies = document.cookie.split(';');
    // console.log(cookies);
  })

  const form = reactive({
    username:'admin',
    password:'123456'
  });

  function loginLocal() {
    if(Cookies.get(form.username)){
      Message.success('Login Success!');
    } else {
      Message.error('Login Failed!');
    }
  }

  function login(){
    console.log(form);
    if(Cookies.get(form.username)){
      Message.success('Login Success!');
      console.log('Local!');
    } else {
      console.log("Cloud!");
      loginMqtt(form)
        .then( res => {
          console.log(res.data.result);
          const result = res.data.result;
          if(result){
            Message.success('Login Success!');
            Cookies.set(form.username, true);
            // setTimeout(() =>{
            //   console.log(1);
            //   router.replace({
            //     path: '/dashboard',
            //   })
            // },500);
          } else {
            Message.error('Login Failed!');
          }
        });
    }
  }

</script>

<template>
  <div class="loginPage w-full h-screen pt-28 flex justify-center items-center">
    <div class="container w-1/3 h-2/5 bg-white rounded-xl">
      <div class="loginTitle flex justify-center">
        <h1>VQTT Login</h1>
      </div>
      <div class="loginForm">
        <div class="loginUsername">
          <label>Username</label>
          <input class="border-b-2 focus:outline-none" type="text" placeholder="Enter your Username" :value="form.username">
        </div>
        <div class="loginPassword">
          <label>Password</label>
          <input class="border-b-2 focus:outline-none" type="password" placeholder="Enter your Password" :value="form.password">
        </div>
      </div>
      <div class="loginButton flex justify-center">
        <button @click="login()" class="bg-blue-500 rounded-xl w-1/4 h-10 active:bg-blue-700">Login</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap');
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
  }
  .loginPage{
    background: linear-gradient(#68EACC 0%, #497BE8 100%);
  }
  .loginPage .loginTitle{
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 36px;
    font-style: italic;
    font-weight: 600;
  }

  .loginPage .loginForm{
    display: block;
    font-size: 22px;
    text-align: center;
  }

  .loginPage .loginForm div{
    margin-top: 36px;
  }

  .loginPage .loginForm label{
    margin-right: 20px;
  }

  .loginPage .loginButton{
    color: white;
    margin-top: 40px;
    font-size: 24px;
  }
</style>