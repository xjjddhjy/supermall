<template>
  <div class="goods-item" @click='itemClick'> 
    <img  v-lazy="showImg" alt="" @load='imgLoad'>
      <div class="goods-info">
      <p>{{goodsItem.title}} </p>
      <span class="price">{{goodsItem.orgPrice}} </span>
      <span class="collect">{{goodsItem.cfav}} </span>
    </div>
  </div>
</template>

<script>
export default {
  name:'GoodsListItem',
  props:{
    goodsItem:{
      type:Object,
      default(){
        return {}
      }
    },
  },
  methods:{
    imgLoad(){
      if(this.$route.path.indexOf('/home')!==-1){
        this.$bus.$emit('itemImageLoad')
        console.log('itemImageLoad');
      }else if(this.$route.path.indexOf('/detail')!==-1){
        console.log('detailImageLoad');
        this.$bus.$emit('detailImageLoad')
      }
     
    },
    itemClick(){
      console.log('跳转到详情页');
      this.$router.push('/detail/'+this.goodsItem.iid)
    }
  },
  computed:{
    showImg(){
      return (this.goodsItem.show && this.goodsItem.show.img) || this.goodsItem.image
    }
  }
}
</script>

<style>
.goods-item{
  width: 50%;
  font-size:14px;
  text-align: center;
  
}
.goods-item img{
width: 95%;
border-radius: 5px;
}

.goods-info span{
  color: aqua;
}
.collect::before{
  content:'';
  width: 14px;
  height: 14px;
  display: inline-block;
  /* left: -15px;
  top: -1px;

  position: absolute; */

  background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
}
</style>