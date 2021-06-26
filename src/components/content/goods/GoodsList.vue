<template>
  <div class="goods-list">
    <goods-list-item v-for="i in goods" :goodsItem="i"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  components: { GoodsListItem },
  name:'GoodsList',
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
  .goods-list{
    display: flex;
    flex-wrap: wrap;
  }
</style>