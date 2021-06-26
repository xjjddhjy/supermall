<template>
  <tab-bar>
      <tab-bar-item path='/home' activeColor='blue'>
        <!-- <div slot='font-icon' class="iconfont icon-home"></div> -->
        <div slot='font-icon' class="iconfont icon-home"></div>
        <!-- <div slot='font-icon-active' class="iconfont icon-user"></div> -->
        <div slot='font-icon-active' class="el-icon-s-home"></div>
        <div slot='text'>首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category' activeColor='pink'>
        <div slot='font-icon' class="iconfont icon-menu"></div>
        <div slot='font-icon-active' class="el-icon-menu"></div>
        <div slot='text'>分类</div>
      </tab-bar-item>
      <tab-bar-item path='/cart' activeColor='green'>
        <div slot='font-icon' class="iconfont icon-fabulous"></div>
        <div slot='font-icon-active' class="el-icon-shopping-cart-2"></div>
        <div slot='text'>购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile' activeColor='yellow'>
        <div slot='font-icon-active' class="el-icon-user-solid"></div>
        <div slot='font-icon' class="el-icon-user"></div>
        <div slot='text'>我</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar.vue";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";

export default {
  components: { TabBar, TabBarItem },
  name: "MainTabBar",
}
</script>

<style scoped>
  [class^='el-icon']{
    font-size: 200%;
  }
</style>