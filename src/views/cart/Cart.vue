<template>
<div class="cart">
  <nav-bar class="nav-bar">
    <div slot="center" >购物车({{cartLength}})</div>
  </nav-bar>
  <cart-list/>
  <cart-total></cart-total>
</div>

</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue"
import {mapGetters} from 'vuex'
import CartList from './childComps/CartList.vue'
import CartTotal from './childComps/CartTotal.vue'

export default {
  name:'Cart',
  components: { NavBar, CartList, CartTotal },
  computed:{
    ...mapGetters(['cartLength'])
  }
}
</script>

<style scoped>
  .nav-bar{
    background-color: rgb(255, 193, 193);
    color: white;
  }
</style>