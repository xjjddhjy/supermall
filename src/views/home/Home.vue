<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
     <tab-control
        class="tab-control"
        :titles="['流行', '新款', '优选']"
        @tabClick="tabClick"
        ref="tabControl1" v-show='isTabFixed'
      ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <home-swiper :banner="banners"
      @swiperImageLoad='swiperImageLoad'></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        :titles="['流行', '新款', '优选']"
        @tabClick="tabClick"
        ref="tabControl2" 
      ></tab-control>
      <goods-list v-if="currentIndex === 0" :goods="goods.pop.list"></goods-list>
      <goods-list v-else-if="currentIndex === 1" :goods="goods.new.list"></goods-list>
      <goods-list v-else :goods="goods.sell.list"></goods-list>
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "components/content/TabControl";
import GoodsList from "../../components/content/goods/GoodsList.vue";

import HomeSwiper from "./childComps/homeSwiper.vue";
import RecommendView from "./childComps/recommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";
import { getHomeMultidata, getHomeGoods } from "network/home.js";

import Scroll from "../../components/common/scroll/Scroll.vue";
import BackTop from "../../components/content/backTop/BackTop.vue";
import {debounce} from 'common/utils'
export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  name: "Home",
  data() {
    return {
      saveY:0,
      tabOffsetTop:0,
      result: {},
      banners: [],
      recommends:[],
      currentIndex: 0,
      goodsSort: ["pop", "new", "sell"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      isShowBackTop: false,
      isTabFixed:false,
      itemImageListener:null
    };
  },
  created() {
    this.getHomeMultidata();
    //     this.$axios.get("/site/info.json")
    // .then(res=>{
    // 	console.log(res)
    // })
    // .catch(err=>{
    // 	console.log(err)
    // })

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    
  },
  mounted(){
    let refresh=null;
    let num=1;
    this.$bus.$on('itemImageLoad',()=>{
      if(this.$refs.tabControl2.$el.offsetTop && num==1){
        console.log(this.$refs.tabControl2.$el.offsetTop);
        num+=1
      }
      
      if(!refresh){
        refresh=debounce(this.$refs.scroll.refresh,10)
      }
      refresh()
      // this.itemImageListener=refresh
    // this.debounce(this.$refs.scroll.refresh,1000)()
    })
    
    
  },
  deactivated(){

    console.log('deactivated');
    this.saveY=this.$refs.scroll.scroll.y;
    this.$bus.$off('itemImgLoad',this.itemImageListener)
  },
  activated(){
    console.log('activated');
    this.$refs.scroll && this.$refs.scroll.scroll.scrollTo(0,this.saveY,0);
    this.$refs.scroll && this.$refs.scroll.refresh();
  },
  methods: {
    swiperImageLoad(){
      this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop;
    },
    // 事件监听
    // debounce(func,delay){
    //   let timer=null;
    //   return function(...args){
    //     if(timer)clearTimeout(timer)
    //     timer=setTimeout(()=>{
    //       // func.apply(this,args)
    //       func()
    //     },delay)
    //   }
    // }, 
    tabClick(currentIndex) {
      this.currentIndex = currentIndex;
      console.log(this.currentIndex);
      this.$refs.tabControl1.currentIndex=currentIndex;
      this.$refs.tabControl2.currentIndex=currentIndex;
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;
      this.isTabFixed=-position.y>this.tabOffsetTop

    },
    loadMore() {
      console.log("加载数据");
      console.log(this.goodsSort[this.currentIndex]);
      this.getHomeGoods(this.goodsSort[this.currentIndex])
      
      this.$refs.scroll.finishPullUp()
    },
    // 网络请求
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.result = res;
        console.log(this.result);
        this.recommends=this.result.data.recommend.list;
        this.banners=this.result.data.banner.list;
      });
    },
    getHomeGoods(type) {
      const pagenum = this.goods[type].page + 1;
      getHomeGoods(pagenum, type)
        // pagenum第几页,pagesize几个图片
        .then((res) => {
          console.log(res);
          this.goods[type].list.push(...res.data.data.list);
          this.goods[type].page += 1;
          console.log(this.goods[type].list);
          
        }
        
        )
        // .catch((err) => {
        //   console.log(err);
        // });
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
  /* padding-top: 44px; */
}

.content {
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
.tab-control{
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>