<template>
  <div class="list-box">
    <ul class="box">
      <li class="list" v-for="(item,index) in lists" :key="index">
        <div class="top">
          <span>{{item.name}}</span>
          <span>{{item.age}}</span>
          <span v-if="item.gender == 1">男</span>
          <span v-if="item.gender == 0">女</span>
          <span class="detail" @click="detailShow(item,index)">详情</span>
        </div>
        <!-- 动画 -->
        <el-collapse-transition>
          <div class="bottom" v-show="item.showDetail">
               {{item.introduction}}
          </div>
        </el-collapse-transition>
      </li>
    </ul>
  </div>
</template>

<script>
import url from '@/api/Login'
export default {
  name: 'List',
  data () {
    return {
      lists:[], //数据列表
      indexList:[], //数据下标
    }
  },
  mounted() {
    this.getAjax();
  },
  methods:{
    getAjax:function () {
      let self = this;
      self.$axios.get(url.list)
        .then(function (res) {
          // 在返回的数据中添加一个字段showDetail
          for(let list of res.data.data){
            list.showDetail = false;
          }
          // 获取返回数据的下标
          for(let $index in res.data.data){
            self.indexList.push(Number($index))
          }
          self.lists = res.data.data;
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    detailShow:function(item,index){
      ////////////点击那个那个弹出其余关闭/////////////
      var array = [];
      for (let i of this.indexList) {
          if(i != index){
              array.push(i);
              this.lists[i].showDetail = false;
          }
      }
      //////////////////////////////////////////////
      this.lists[index].showDetail = !this.lists[index].showDetail
    }
  }
}
</script>

<style lang="scss" scoped>
  .box{
    width: 600px;
    // height: 550px;
    margin: 10px auto;
    padding: 5px;
    background: #ddd;
    .list{
      width: 100%;
      border-radius: 5px;
      padding: 10px 20px;
      background: #fff;
      box-sizing: border-box;
      margin-bottom: 15px;
      .top{
        width: 100%;
        height: 30px;
        user-select: none; //禁止选中
        line-height: 30px;
        .detail{
          font-size: 12px;
          color: #f4af9c;
          cursor: pointer;
        }
      }
      .bottom{
        padding-top: 5px;
        text-align: justify;
        border-top: 1px dashed #d4d4d4;
      }
    }
  }
</style>
