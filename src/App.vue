<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return{

      }
    },
    methods:{
      resetRem(){
        (function(d, w){
          var de = d.documentElement
          console.log('de',de)

        })(document, window)
      }
    },
    mounted:function(){
      this.resetRem();
    },
  }
</script>

<style lang="scss">
  @import './assets/css/reset.css';
  @import './assets/fonts/iconfont.css';
  #app{
    width: 100%;
    height: 100%;
    position: relative;
    // height: calc(100% - 60px);
  }
</style>
