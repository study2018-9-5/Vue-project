<template>
  <div class="parent">
    <div class="name">父组件</div>
    <Child1>
      <!-- 请注意，v-slot只能添加到<template>或自定义组件上，这点与弃用的slot属性不同 -->
      <template v-slot:default="slotProp">
        <h1>{{slotProp.user.lastName}}</h1>
      </template>
    </Child1>
    <Child2/>
  </div>
</template>

<script>
  import Child1 from '@/components/VuexDemo/child1';
  import Child2 from '@/components/VuexDemo/child2';
  export default {
    name: 'VuexDemo',
    data(){
      return{
        firstName: 'wang'
      }
    },
    components:{
      Child1,
      Child2
    },
    created(){

    },
    methods:{

    }
  }
</script>

<style lang="scss" scoped>
  .parent{
    width: 600px;
    height: 400px;
    border: 1px solid black;
    margin: 50px auto;
    position: relative;
    padding: 2px{
      top: 50px;
    }
    .name{
      width: calc(100% - 2px);
      height: 50px;
      background: #f2f2f2;
      text-align: center;
      line-height: 50px;
      position: absolute;
      top: 0;
      left: 0;
      font-size: 20px;
    }
  }
</style>