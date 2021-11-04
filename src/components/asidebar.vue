<script setup>

</script>

<template>
  <aside class="siderbar">
    <div class="container">
      <ul class="nav-links">
        <li>
          <i class='bx bxs-dashboard'></i>
          <span>控制面板</span>
        </li>
        <li>
          <i class='bx bx-collection'></i>
          <span>设备列表</span>
        </li>
        <li>
          <i class='bx bx-line-chart'></i>
          <span>数据分析</span>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style>
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
    font-size: 17px;
    font-family: 'Noto Sans SC', sans-serif;
    margin: 0;
    bottom: 0;
    top: 3.6rem;
    z-index: 10;
    width: 11rem;
    position: fixed;
    /* background: red; */
    border-right: 1px solid #eaecef;
    box-sizing: border-box;
    padding-top: 7px;
  }

  .siderbar .nav-links li{
    display: flex;
    line-height: 40px;
    /* background: red; */
    margin: 10px auto;
    padding-left: 18px;
    align-items: center;
    color: #3a4352;
  }

  .siderbar .nav-links li:hover{
    /* border: 1px solid #3a4352; */
    /* background: red; */
    /* color: rgb(0, 46, 167); */
    color: #137d83;
  }

  .siderbar .nav-links li i{
    font-size: 24px;
    /* justify-content: center; */
    /* align-items: center; */
  }

  .siderbar .nav-links li span{
    margin-left: 18px;
    /* font-weight: 500; */
    font-weight: 600;
  }

  


</style>