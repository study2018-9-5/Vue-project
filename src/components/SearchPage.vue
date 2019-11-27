<template>
  <div class="box">
    <div class="top">
      <el-form :model="formData" :rules="rules" ref="ruleForm" label-width="90px">
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item label="证件类型:" prop="paperType">
              <el-select v-model="formData.paperType" placeholder="请选择证件类型" size="small">
                <el-option
                  v-for="(item,index) in paperTypeList"
                  :key="index"
                  :label="item"
                  :value="item">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label=" 证件号码:" prop="paperNum">
              <el-input v-model="formData.paperNum" placeholder="请输入证件号码" size="small">
                <i slot="suffix" class="iconfont icon-credentials_icon"></i>
              </el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="用户姓名:" prop="userName">
              <el-input v-model="formData.userName" placeholder="请输入用户姓名" size="small"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="5">
            <el-button type="primary" class="searchBtn" size="small" @click="searchBtn('ruleForm')">查询</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <div class="bottom">
      <div class="total">共<span> {{total}} </span>条信息</div>
      <el-table :data="tableData" style="width: 100%;" height="264">
        <el-table-column prop="productName" label="产品名称"></el-table-column>
        <el-table-column prop="businessNumber" label="业务号码"></el-table-column>
        <el-table-column prop="certificateStatus" label="证号状态"></el-table-column>
        <el-table-column prop="assetStatus" label="资产状态"></el-table-column>
        <el-table-column prop="province" label="资产所属省市" width="180"></el-table-column>
        <el-table-column prop="custName" label="资产所属客户名称" width="180"></el-table-column>
        <el-table-column prop="custCode" label="资产所属客户编码" width="180"></el-table-column>
        <el-table-column prop="verificationWorkNum" label="核验工号"></el-table-column>
        <el-table-column label="操作" class="lastTd">
          <template slot-scope="scope">
            <!--<a @click="handle1(scope.$index, scope.row)">过户</a>
            <a @click="handle2(scope.$index, scope.row)">拆机</a>-->
            <a @click="handle3(scope.$index, scope.row)">申请解绑</a>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog title="申请解绑" :visible.sync="unbindDialogVisible" class="unbindDialog">
      <div class="dialog-top">
        <el-steps :active="active" align-center>
          <el-step title="打印回执单" icon="iconfont icon-ai69"></el-step>
          <el-step title="确认解绑" icon="iconfont icon-jiebang"></el-step>
        </el-steps>
      </div>

      <div class="input-div">
        属性方式:<el-input placeholder="请选择日期" v-model="input1" class="right-inp"></el-input>
      </div>

      <div class="dialog-bottom">
        <span @click="prev">上一步</span>
        <span @click="next">下一步</span>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import url from '@/api';
  var paperNumPass = (rule, value, callback)=>{
      if (!value || value.trim() == '') {
        callback(new Error('请输入证件号码'))
      }else {
        callback()
      }
  }
	export default {
		name: 'SearchPage',
		data(){
			return{
				formData:{
          paperType: '',
          paperNum: '',
          userName: ''
        },
        paperTypeList: ['身份证','护照'],
        rules: {
          paperType: [
            {required: true, message: '请选择证件类型', trigger: 'change'}
          ],
          paperNum: [
            { required: true, message: '请输入证件号码', trigger: 'blur', validator:paperNumPass},
          ],
          userName: [
            { required: true, message: '请输入用户姓名', trigger: 'blur' },
            { min: 2, max: 4, message: '长度在 2 到 4 个字符', trigger: 'blur' }
          ],
        },
        tableData:[],
        total:'',
        unbindDialogVisible: false,
        active: 0,
        input1:''
			}
		},
		methods:{
      getData:function(){
        let self = this;
        this.$axios.get(url.searchTable)
        .then(function (res) {
          if(res.data.code == 200){
            self.tableData = res.data.data;
            self.total = res.data.data.length;
            console.log(self.tableData);
            self.$message({
              type:'success',
              message:res.data.message
            })
          }
        })
        .catch(function (err) {
          console.log(err);
        });
      },
      // handle1:function(index,row){
      //   console.log('index',index,'row',row)
      // },
      // handle2:function(index,row){
      //   console.log(index,row)
      // },
      handle3:function(index,row){
        console.log(index,row);
        this.unbindDialogVisible = true;
      },
      prev:function(){
        if (this.active-- < 1) this.active = 0;
        // this.active--
      },
      next:function(){
        console.log(this.active++)
        if (this.active++ > 0) this.active = 1;
        // this.active++
      },
		  searchBtn:function(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('查询成功!');
          } else {
            alert('查询失败!!');
            return false;
          }
        });
      }
		},
		mounted(){
      this.getData();
		}
	}
</script>

<style lang="scss" scoped> 
	.box{
		width: 100%;
    height: 100%;
		// background: #f0f;
    .top{
      width: 100%;
      height: 60px;
      border-bottom: 1px solid #e4e7ed;
      .searchBtn{
        margin-top: 6px;
        margin-left: 15px;
      }
      .icon-credentials_icon{
        color: #ed795a;
      }
    }
    /deep/ .bottom{
      padding: 5px 10px;
      .total{
        padding: 10px 0;
        text-align: right;
        span{
          color: #eb795a;
        }
      }
      .el-table{
        border: 1px solid #e4e7ed;
        a{
          font-size: 12px;
          color: #eb795a;
          cursor: pointer;
        }
      }
    }
    .unbindDialog{
      /deep/ .el-dialog{
        width: 500px;
        height: 400px;
        // background: red;
        position: relative;
        .el-dialog__header{
          background: #f4f7fa;
          box-shadow: 0px 2px 5px #ccc;
        }
        .el-dialog__body{
          padding: 0;
          .dialog-top{
            padding: 15px 0;
            .el-step__line{
              top: 24px;
            }
            .el-step__icon{
              width: 40px;
              height: 40px;
              border-radius: 50%;
              background: #f6f8fa;
              border: 4px solid #b9c6d4;
            }
            .el-step__title{
              color: #4b535f;
              font-size: 12px;
              font-weight: normal;
            }
          }
          .dialog-bottom{
            width: 100%;
            height: 45px;
            background: #f7f9fb;
            padding: 0 20px;
            line-height: 45px;
            border-radius: 0 0 6px 6px;
            position: absolute;
            left: 0;
            bottom: 0;
            
            span{
              cursor: pointer;
            }
            span:nth-of-type(2){
              float: right;
            }
          }
        }
      }
      // 中间输入框
      .input-div{
        width: 100%;
        height: 42px;
        background: #f7f9fb;
        border-top: 2px solid #eff0f1;
        .right-inp{
          width: 170px;
          height: 30px;
          /deep/ .el-input__inner{
            width: 170px;
            height: 30px;
          }
        }
      }
    }
	}
  /deep/ .el-step>.is-process{
     .el-step__icon{
      width: 48px!important; 
      height: 48px!important;
      background: #7ed57a!important;
      color: #fff;
      border: 4px solid #dceddb!important;
    }
  }
  /deep/ .el-step>.is-finish{
    height: 48px;
    line-height: 54px;
    .el-step__icon{
      width: 40px!important; 
      height: 40px!important;
      background: #7ed57a!important;
      color: #fff;
      border: 4px solid #7ed57a!important;
    }
  }
  /deep/ .el-step>.is-wait{
    height: 48px;
    line-height: 54px;
  }  
</style>