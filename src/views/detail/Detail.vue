<template>
  <div id="detail">
    <detail-nav-bar
      ref="detailNav"
      class="detail-nav"
      @titleClick="titleClick"
    ></detail-nav-bar>
    <scroll class="content" ref="scroll" @scroll="contentScroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shopItems"></detail-shop-info>
      <detail-goods-info
        :detailInfo="detailInfo"
        @loadImgEvent="imageLoad"
      ></detail-goods-info>
      <detail-params ref="params" :paramInfo="goodsParams"></detail-params>
      <detail-comment ref="comment" :comment="commentInfo"></detail-comment>
      <goods-list ref="recommend" :goods="recommends"></goods-list>
    </scroll>
    <detail-bottom-bar
      class="bottom-bar"
      @addEvent="addToCart"
    ></detail-bottom-bar>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
    <!-- <toast :message='message' :v-show="show"></toast> -->
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "../../network/detail.js";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParams from "./childComps/DetailParams.vue";
import DetailComment from "./childComps/DetailComment.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";
import { debounce } from "../../common/utils";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";
import BackTop from "../../components/content/backTop/BackTop.vue";
// import Toast from '../../components/common/toast/Toast.vue';


export default {
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParams,
    DetailComment,
    GoodsList,
    DetailBottomBar,
    BackTop,
    // Toast,
  },

  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shopItems: {},
      detailInfo: {},
      goodsParams: {},
      commentInfo: {},
      recommends: [],
      compsY: [],
      getThemeTopY: null,
      currentIndex: 0,
      isShowBackTop: false,
      // message:'',
      // show:''
    };
  },
  created() {
    console.log(11);
    this.iid = this.$route.params.id;
    getDetail(this.iid).then((res) => {
      console.log(res);
      const data = res.data.result;
      this.topImages = res.data.result.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shopItems = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      this.goodsParams = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    getRecommend().then((res) => {
      this.recommends = res.data.data.list;
    });
    this.getThemeTopY = debounce(() => {
      this.compsY = [];
      this.compsY.push(0);
      this.compsY.push(this.$refs.params.$el.offsetTop);
      this.compsY.push(this.$refs.comment.$el.offsetTop);
      this.compsY.push(this.$refs.recommend.$el.offsetTop);
      console.log(this.compsY);
    }, 200);
  },
  methods: {
    addToCart() {
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      // this.$store.commit('addCart',product)
      this.$store.dispatch("addCart", product).then(res=>{
        // this.show=true
        // this.message=res
        // setTimeout(()=>{
        //   this.show=false
        // },1500)
        console.log(res);
        this.$toast.show(res,500)
        
      });
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;
      for (let i = 0; i < this.compsY.length; i++) {
        if (
          this.currentIndex !== i &&
          ((i < this.compsY.length - 1 &&
            -position.y >= this.compsY[i] &&
            -position.y < this.compsY[i + 1]) ||
            -position.y >= this.compsY[i])
        ) {
          console.log(i);
          this.currentIndex = i;
          this.$refs.detailNav.currentIndex = this.currentIndex;
        }
      }
    },
    imageLoad() {
      this.$refs.scroll.refresh();
      this.getThemeTopY();
    },
    titleClick(index) {
      console.log(index);
      this.$refs.scroll.scrollTo(0, -this.compsY[index], 200);
    },
  },
  mounted() {
    // let refresh = 0;
    // let num = 1;
    // this.$bus.$on("detailImageLoad", () => {
    //   if (!refresh) {
    //     console.log("mounter");
    //     refresh = debounce(this.$refs.scroll.refresh, 200);
    //   }
    //   refresh();
    // });
    let refresh = 0;
    console.log("mounter");
    refresh = debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("detailImageLoad", () => {
      refresh();
    });
  },
  updated() {
    // this.getThemeTopY = debounce(() => {
    //     this.compsY = [];
    //     this.compsY.push(0);
    //     this.compsY.push(this.$refs.params.$el.offsetTop);
    //     this.compsY.push(this.$refs.comment.$el.offsetTop);
    //     this.compsY.push(this.$refs.recommend.$el.offsetTop);
    //     console.log(this.compsY);
    //   }, 200);
    // 要饭在updated里，$nextTick也不行
    // this.getThemeTopY = () => {
    //   this.compsY = [];
    //   this.compsY.push(0);
    //   this.compsY.push(this.$refs.params.$el.offsetTop);
    //   this.compsY.push(this.$refs.comment.$el.offsetTop);
    //   this.compsY.push(this.$refs.recommend.$el.offsetTop);
    //   console.log(this.compsY);
    // };
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
}
.content {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
.bottom-bar {
  height: 49px;
  background-color: rgb(255, 255, 255);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>