<template>
  <swiper>
    <swiper-item v-for="i in banner">
      <a :href="i.link">
        <img :src="i.image" alt="" @load.once='loadImg' />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  components: { Swiper, SwiperItem },
  name:'HomeSwiper',
  props:{
    banner:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    loadImg(){
      this.$emit('swiperImageLoad')
    }
  }
};
</script>

<style>
</style>