<template>
  <div class="list-box" v-loading="load">
    <ul class="box">
      <li class="list" v-for="(item,index) in lists.slice((page.currentPage-1)*page.pageSize,page.currentPage*page.pageSize)" :key="index">
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
    <!-- 分页 -->
    <div class="page-div">
      <el-pagination
        class="page"
        background
        layout="prev, pager, next"
        :page-size="page.pageSize"
        :total="page.total"
        :current-page="page.currentPage" 
        @size-change="handleSizeChange" 
        @current-change="handleCurrentChange">
      </el-pagination>
    </div>
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
      page:{
        currentPage: 1,
        total: 20,
        pageSize: 8
      },
      load:false,
    }
  },
  mounted() {
    this.getAjax();
  },
  methods:{
    getAjax:function () {
      let self = this;
      self.load = true;
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
          self.page.total = res.data.data.length;
          self.load = false;
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    detailShow:function(item,index){
      index = index + (this.page.currentPage-1)*this.page.pageSize
      ////////////点击那个那个弹出其余关闭/////////////
      // for (let i of this.indexList) {
      //     if(i != index){
      //       this.lists[i].showDetail = false;
      //     }else{
      //       this.lists[index].showDetail = !this.lists[index].showDetail
      //     }
      // }
      //////////////////////////////////////////////
      this.lists[index].showDetail = !this.lists[index].showDetail
    },
    handleCurrentChange(val) {
      this.page.currentPage = val;
    },
    handleSizeChange(val) {
      this.page.pageSize = val;
    },
  }
}
</script>

<style lang="scss" scoped>
  .list-box{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    // margin: 10px auto;
    .box{
      width: 600px;
      // height: 100%;
      
      padding: 5px;
      background: #ddd;
      // &::-webkit-scrollbar { /*滚动条整体样式*/
      //     width: 5px;        /*高宽分别对应横竖滚动条的尺寸*/
      //     // height: 100px;
      //   }
      // &::-webkit-scrollbar-thumb { /*滚动条里面小方块*/
      //   height: 10px;
      //   border-radius: 5px;
      //   -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
      //   background: rgba(0,0,0,0.2);
      // }
      // &::-webkit-scrollbar-track { /*滚动条里面轨道*/
      //   -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
      //   border-radius: 0;
      //   background: rgba(0,0,0,0.1);
      // }
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
    .page-div{
      width: 600px;
      height: 40px;
      padding: 5px 0px;
      background: #ccc;
      .page{
        float: right;
      }
    }
  }  
</style>
