<template>
  <div v-if='Object.keys(goods).length!==0' class="base-info">
    <b><div class="info-title">
      {{goods.title}}
    </div></b>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}} </span>
      <s><span class="o-price">{{goods.oldPrice}} </span></s>
      <span v-if="goods.discount" class="discount">{{goods.discount}} </span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}} </span>
      <span>{{goods.columns[1]}} </span>
      <span>{{goods.services[goods.services.length-1].name}} </span>
    </div>
    <div class="binfo-service">
      <div class="info-service"  v-for="index in goods.services.length"
      :key='index'>
      <span class="info-service-item"></span>
      <img :src="goods.services[index-1].icon" alt="">
      <span>{{goods.services[index-1].name}} </span>
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props:{
    goods:{}
  }
};
</script>

<style scoped>
.base-info{
  padding: 2px;
}
.info-title{
  padding: 10px 5px;
}
.info-price{
  padding: 10px 5px;
}
.info-price .n-price{
  font-size: 20px;
  color: rgb(255, 169, 184);
}
.info-price .o-price{
font-size: 10px;
}
.info-price .discount{
  position: relative;
  top: -4px;
  font-size: 12px;
  padding: 2px;
  color: rgb(255, 255, 255);
  background-color: rgb(255, 160, 160);
  border-radius: 15px;
}
.info-other{
  padding: 10px 5px;
  display: flex;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.385);
  justify-content:space-around;
}
.binfo-service{
  display: flex;
  flex-wrap: wrap;
  justify-content:space-around;
}
.info-service{
  padding: 10px 5px;
  font-size: 12px;
  text-align: center;
}
.info-service img{
  width: 12px;
  height: 12px;
}
</style>