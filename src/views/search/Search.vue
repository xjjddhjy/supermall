<template>
  <div class="search">
    <div class="div1">
      <div class="el-icon-time"></div>
      <div class="zuijin">最近搜索</div>
      <div class="el-icon-delete"></div>
    </div>
    <div class="div2">
      <ul>
        <li>上衣</li>
      </ul>
    </div>
    <div class="div3">
      <div class="el-icon-d-caret"></div>
      <div class="zuijin">搜索发现</div>
      <div class="el-icon-view"></div>
    </div>
    <div class="div4">
      <ul>
        <li>上衣</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .search{
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: calc(100vh - 43px);
    z-index: 9;
    background-color: #fff;
  }
  .search>div{
    display: flex;
  }
  .div1{
    padding: 5px;
    justify-content: space-between;
  }
  .div1>.zuijin{
    position: relative;
    left: -120px;
  }
  .div2{
    padding: 5px;
  }
  .div2 li{
    background-color: rgb(237, 237, 237);
    border-radius: 20px;
    padding:5px 8px;
  }
  
    .div3{
    padding: 5px;
    justify-content: space-between;
  }
  .div3>.zuijin{
    position: relative;
    left: -120px;
  }
  .div4{
    padding: 5px;
  }
  .div4 li{
    background-color: rgb(237, 237, 237);
    border-radius: 20px;
    padding:5px 8px;
  }
</style>