<template>
  <el-table :data="tableData" border style="width: 100%;" height="264">
    <el-table-column prop="name" label="属性名" width="180" align="center"></el-table-column>
    <el-table-column prop="value" label="属性值" width="180" align="center"></el-table-column>
    <el-table-column prop="defaultVal" label="默认值" width="180" align="center"></el-table-column>
    <el-table-column prop="type" label="属性类型" width="180" align="center"></el-table-column>
    <el-table-column prop="description" label="功能" align="center"></el-table-column>
  </el-table>
</template>

<script>
	export default{
		name: 'Table',
		data(){
			return{
	       tableData:[]
			}
		},
		methods:{
      getData:function(){
        let self = this;
        self.$axios.get('./../../../static/json/MenuData.json').then(function(res){
            self.tableData = res.data.tableData;
        })
        .catch(function(err){

        })
      }
		},
		mounted(){
      this.getData();
		}
	}
</script>

<style lang="scss" scoped>
  /deep/ .has-gutter{
    tr{
      th{
        color: #000;
        background:#eee;
      }
    }
  }
</style>