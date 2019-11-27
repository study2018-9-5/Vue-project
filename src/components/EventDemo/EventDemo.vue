<template>
  <div class="EventDemo">
    <div class="box">
      <el-input v-model="name"></el-input>
      <el-button @click="click1()">click</el-button>
      <div>{{count}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        name: '',
        count: 0
      }
    },
    created(){

    },
    methods:{
      click1(){
        let self = this;
        let params = {
          
        }
        // let url = '/mock/demo'
        let url = 'http://localhost:3000/api/demo1'
        this.$axios.get(url)
        .then(function (res) {
        
        })
        .catch(function (err) {
          console.log(err);
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .EventDemo{
    .box{
      width: 300px;
      height: 300px;
      padding: 10px;
      margin: 50px auto;
      border: 1px solid #ccc;
    }
  }
</style>