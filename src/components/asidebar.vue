<script setup>
  import { onMounted } from "@vue/runtime-core";

  // console.log("hello setup!");
  onMounted(() => {
    // console.log("hello Mounted!");
    const arrow = document.querySelectorAll('.arrow');
    // console.log(arrow);
    for(let i = 0; i < arrow.length; ++i){
      arrow[i].addEventListener("click", (e) => {
        let arrow = e.target.parentElement;
        // console.log(arrowParent);
        arrow.classList.toggle("showMenu");
        console.log(arrow);
      })
    }
  })
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
          <i class='bx bxs-chevron-down arrow'></i>
          <ul class="subMenu">
            <li><i class='bx bxl-apple' ></i>iOS</li>
            <li><i class='bx bxl-android' ></i>Android</li>
            <li><i class='bx bxl-windows' ></i>Windows</li>
            <li><i class='bx bxl-tux'></i>Linux</li>
          </ul>
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
    width: 13rem;
    position: fixed;
    /* background: red; */
    border-right: 1px solid #eaecef;
    box-sizing: border-box;
    padding-top: 7px;
  }

  .siderbar .nav-links li{
    /* position: relative; */
    display: flex;
    flex-wrap: wrap;
    line-height: 40px;
    /* background: red; */
    margin: 10px auto;
    padding-left: 18px;
    align-items: center;
    color: #3a4352;
    cursor: pointer;
    height: 40px;
    overflow: hidden;
    transition: all 1s ease;
  }

  .siderbar .nav-links li:hover{
    color: #137d83;
  }

  .siderbar .nav-links li i{
    transition: all 0.3s ease;
    font-size: 24px;
  }

  .siderbar .nav-links li i.arrow{
    margin-left: 30px;
    font-size: 24px;
  }

  .siderbar .nav-links li.showMenu {
    height: auto;
  }

  .siderbar .nav-links li.showMenu i.arrow{
    transform: rotate(-180deg);
  }

  .siderbar .nav-links li span{
    margin-left: 18px;
    /* font-weight: 500; */
    font-weight: 600;
    margin-right: 7px;
  }

  .siderbar .nav-links li .subMenu{
    /* display: fle; */
    /* flex-direction: column; */
    /* background: red; */
    align-self: flex-end;
  }

  .siderbar .nav-links li .subMenu li {
    /* background: red; */
    margin: 0 0;
    line-height: 35px;
    font-weight: 500;
  }

  .siderbar .nav-links li .subMenu li i{
    margin-right: 10px;
    margin-left: 10px;
  }


</style>