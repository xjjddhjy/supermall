<template>
  <div class="tab-bar-item" @click='btnClick'>
    <div v-if="!isActive">
      <slot name="font-icon" ></slot>
    </div>
    <div v-else>
      <slot name="font-icon-active"></slot>
    </div>

    <!-- <slot :class='{active:isActive}' name='text'></slot> 不能这样，
      到时替换就不认得active了-->
    <div :style='activeStyle'>
      <slot name="text"></slot>
    </div>
  </div>
  <!-- <div class="tab-bar-item">
      <div class="iconfont icon-home"></div>
      <div>首页</div> 
    </div> -->
  <!-- <div class="tab-bar-item">
      <div class="iconfont icon-menu"></div>
      <div>分类</div> 
    </div>
    <div class="tab-bar-item">
      <div class="iconfont icon-fabulous"></div>
     <div>购物车</div>  
    </div>
    <div class="tab-bar-item">
      <div class="iconfont icon-user"></div>
     <div>我</div>   -->
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data() {
    return {
      // isActive: true,
    };
  },
  computed:{
    isActive(){
      return this.$route.path==this.path
    },
    activeStyle(){
      // 三木运算符，如果isActive为true，就用第一个对象
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  methods:{
    btnClick(){
      if(this.$route.path==this.path){
        console.log(this);
        return
      }
      this.$router.push(this.path)
    }
  }
};
</script>

<style>
@import "../../../assets/font_tabbar/iconfont.css";

.iconfont {
  font-size: 30px;
}
#tab-bar {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  box-shadow: 0 -3px 1px rgba(100, 100, 100, 0.2);
}
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  /* line-height: 49px; */
  background-color: #f2f2f2;
}
.tab-bar-item div:nth-of-type(2) {
  font-size: 10px;
}
</style>