<script setup>
  
</script>

<template>
  <div class="MenuItem" >
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div class="itemName">
      <slot name="itemName"></slot>
    </div>
  </div>
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


  .MenuItem:hover{
    color: #137d83;

  }

  .MenuItem.active{
    color: #3eaf7c;

  }
  .MenuItem{
    /* background: red; */
    display: flex;
    line-height: 40px;
    margin: 10px auto;
    padding-left: 18px;
    /* align-items: center; */
    color: #3a4352;
    cursor: pointer;
    height: 100%;
    transition: all 0.5s ease;
  }
  .MenuItem .icon{
    margin-top: 3px;
    /* background: white; */
    margin-left: 20px;
    font-size: 26px;
  }
  .MenuItem .itemName{
    margin-left: 20px;
    font-size: 19px;
    font-weight: 500;
    font-family: 'Noto Sans SC', sans-serif;
  }

  
</style>