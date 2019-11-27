<template>
  <div class="child2">
      <div class="name">子组件2</div>
      <div class="listName">列表名：{{$store.state.listName}}</div>
      <h3>{{$store.state.count}}</h3>
  </div>
</template>

<script>
  export default {
    name: 'child2',
    data(){
      return{

      }
    },
    created(){

    },
    methods:{
      
    }
  }
</script>

<style lang="scss" scoped>
  .child2{
    width: calc(70% - 2px);
    height: 100%;
    border: 1px solid blue;
    float: right;
    .name{
      width: calc(100% - 2px);
      height: 50px;
      background: #f2f2f2;
      text-align: center;
      line-height: 50px;
      font-size: 20px;
    }
  }
</style>