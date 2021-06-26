import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    cartList:[]
  },
  mutations:{
    addCounter(state,payload){
      payload.count++
    },
    addToCart(state,payload){
      console.log(payload);
      state.cartList.push(payload)
    },

  },
  getters:{
    cartLength(state){
      return state.cartList.length
    },
    cartList(state){
      return state.cartList
    }
  },
  actions:{
    // addCart(context,payload){
    //   let oldProduct=context.state.cartList.find(item=>item.iid===payload.iid)
    //   for(let i of state.cartList){
    //     if(i.iid===payload.iid){
    //       oldProduct=i
    //     }
    //   }
    //   if(oldProduct){
    //     oldProduct.count+=1
    //   }else{
    //     payload.count=1
    //     state.cartList.push(payload)
    //   }
    addCart(context,payload){
      return new Promise((resolve,reject)=>{
        let oldProduct=context.state.cartList.find(item=>item.iid===payload.iid)
        if(oldProduct){
          console.log(oldProduct);
          context.commit('addCounter',oldProduct)
          resolve('数量加一')
        }else{
          console.log(payload);
          payload.count=1
          payload.checked=false
          // context.state.catList.push(payload)
          context.commit('addToCart',payload)
          resolve('添加商品')
      }
      
        

      })
    }
  }
})