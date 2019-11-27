<template>
  <div class="child1">
    <div class="name">子组件1</div>
    <!-- 你可以通过 $store.state 来获取状态对象，以及通过 this.$store.commit 方法触发状态变更 -->
    <div>
      <button @click="addFun(10)">增加</button>
      <button @click="reduceFun(10)">减少</button>
    </div>
    <slot :user="user">{{user.lastName}}</slot>
    <ul class="list">
      <li v-for="item in listData" @click="getName(item.name)">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'child1',
    data(){
      return{
        listData:[
          {name: '列表1'},
          {name: '列表2'},
          {name: '列表3'},
          {name: '列表4'},
        ],
        user:{
          lastName: 'di'
        }
      }
    },
    created(){

    },
    methods:{
      addFun(n){
        // 改变 store 中的状态的唯一途径就是显式地提交(commit) mutation。
        // 在组件里面进行改变 count的值。
        // this.$store.commit('addCount',n);
        this.$store.dispatch('addCount',n);
      },
      reduceFun(n){
        this.$store.commit('reduceCount',n);
      },
      getName(name){
        this.$store.commit('getName',name);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .child1{
    width: 30%;
    height: 100%;
    border: 1px solid red;
    float: left;
    .name{
      width: calc(100% - 2px);
      height: 50px;
      background: #f2f2f2;
      text-align: center;
      line-height: 50px;
      font-size: 20px;
    }
    .list{
      li{
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        cursor: pointer;
        padding: 0 5px;
      }
    }
  }
</style>