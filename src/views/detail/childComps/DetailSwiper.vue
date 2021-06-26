<template>
    <swiper class="Swiper">
      <swiper-item v-for="i in topImages">
        <img :src="i" alt="">
      </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  components: { Swiper, SwiperItem },
  name:'DetailSwiper',
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
  .Swiper{
    height: 300px;
  }
</style>