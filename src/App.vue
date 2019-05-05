<template>
  <div id="app">
    <keep-alive>
      <!--这里是会被缓存的组件-->
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>

    <!--这里是不会被缓存的组件-->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
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
          (function(d, w) {
          var de = d.documentElement,
            windowWith = 2560,
            windowFont = 25.6,
            ww = de.clientWidth > windowWith ? windowWith : de.clientWidth,
            fn = function() {
              de.style.fontSize = ww / windowFont + 'px';
            },
            e = "onorientationchange" in w ? "orientationchange" : "resize";
          fn();
          (function() {
            d.addEventListener("DOMContentLoaded", function() {
              if (!de.style.fontSize) {
                fn();
              }
            }, false);
          })();
          w.addEventListener(e, function() {
            setTimeout(function() {
              var de = d.documentElement,
                ww = de.clientWidth > windowWith ? windowWith : de.clientWidth;
              de.style.fontSize = ww / windowFont + 'px';
            }, 200);
          }, false);
        })(document, window);
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
    // height: 100%;
    height: calc(100% - 60px);
    position: relative;
  }
</style>
