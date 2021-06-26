<template>
  <div class="toast" v-show="isShow">
    <div >
      {{message}}
    </div>
  </div>
</template>

<script>
export default {
  // props:{
  //   message:String,
  
  //   show:Boolean
  // },
  data(){
    return {
      message:'',
      isShow:0
    }
  },
  methods:{
    show(message,duration=500){
      this.isShow=true
      this.message=message
      setTimeout(()=>{
              this.isShow=false
      this.message=''
      },duration)
    }
  }
}
</script>

<style>
  .toast{
    position: fixed;
    z-index: 9;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(0, 0, 0, 0.288);
    color: white;
    padding: 2px;
  }
</style>