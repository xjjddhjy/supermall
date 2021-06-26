import Toast from './Toast.vue'
const obj={}
// 一但调用vue。use，就回去调用obj的install的函数
obj.install=function(Vue){
  // document.body.appendChild(Toast.$el)
  // Vue.prototype.$toast=Toast
  // console.log(Vue);
  const toastContrustor=Vue.extend(Toast)
  
  const toast=new toastContrustor()
  toast.$mount(document.createElement('div'))
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast=toast
}
export default obj