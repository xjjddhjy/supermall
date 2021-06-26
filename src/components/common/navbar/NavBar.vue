<template>
  <div class="nav-bar">
    
    <div class="left"><slot name='left'></slot></div>
    <div class="center"><slot name='center'></slot></div>
    <div class="right"><slot name='right'></slot></div>
  </div>
</template>

<script>
export default {
  name:'NavBar'
}
</script>

<style scoped>
  .nav-bar{
    display: flex;
    line-height: 44px;
    height:44px;
    text-align: center;
    box-shadow: 0 1px 1px rgb(175, 175, 175);
  }
  .left,.right{
  flex: 0 1;
  }
  .center{
    flex:1; 
    /* flex-grow: 0;
    flex-shrink: 0;   */
  }
</style>