<template>
<div class="box">
  <el-button @click="handle">立即办理</el-button>
  <el-dialog
    :visible.sync="submitVisible" 
    width="520px" 
    class="submitDialog" 
    append-to-body
    :close-on-click-modal="false" 
   >
    <div class="dialog-div">
      <div class="info">{{result}}</div>
      <div class="detail">
        <span class="detail-info-btn" @click="detailShow(1)" v-show="detBtnShow">详细信息<i class="el-icon-arrow-down"></i></span>
        <div class="detail-info-div" v-show="detDivShow">
          <span class="title">详细信息</span>
          <div class="ruleCode-div">
            <span>规则编码：{{ruleCode}}</span>
            <span @click="detailShow(2)">收起</span>
          </div>
          <div class="rule-review-div">
            <span class="submit-review" @click="reviewShow(1)" v-show="revBtnShow">提交审核</span>
            <div class="rule-review" v-show="revDivShow">
              <span class="title">规则审核</span>
              <div class="submitWrap">
                <el-form ref="confirmForm" size="mini" :model="submitForm" label-width="120px" label-position="right"
                  :rules="submitFormRules">
                  <el-form-item label="审核人工号：" prop="applyUserCode">
                    <el-input v-model="submitForm.applyUserCode"></el-input>
                  </el-form-item>
                  <el-form-item label="提交审核原因：">
                    <el-input type="textarea" v-model="submitForm.applyReason" disabled autosize></el-input>
                  </el-form-item>
                </el-form>
              </div>
              <span class="cancel-review" @click="reviewShow(2)">取消审核</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button size="mini" type="primary" @click="submitConfirm();">{{btnName}}</el-button>
    </span>
  </el-dialog>
</div>
</template>
<script>
	export default{
		name: 'SearchBtn',
		data(){
			return{
				submitVisible: true,
        // detDivShow: true,
        // detBtnShow: false,
        // revBtnShow: false,
        // revDivShow: true,
        detDivShow: false,
        detBtnShow: true,
        revBtnShow: true,
        revDivShow: false,
        btnName: '关闭',
        info: '规则编码：FormalSaleOrderConfirm_1912错误信息：业务号码【057107976446】的预约时间或者预约时段不能为空！',
        result: '',
        ruleCode: '',
        submitForm: {
          applyUserCode: '',
          applyReason: ''
        },
        submitFormRules: {
          applyUserCode: [{ required: true,message: "请输入审核人工号",trigger: "blur" }],
          valueType: [{ required: true,message: "请选择审核类型",trigger: "change" }]
        },
			}
		},
		methods:{
      handle(){
        this.submitVisible = true;
      },
		  submitConfirm(){
        this.submitVisible = false;
      },
      strSplit:function(){
        this.result = this.info.split("：")[2];
        let str = this.info.split("：")[1];
        this.ruleCode = str.substring(0,str.length-4);
      },
      detailShow(num){
        if(num == 1){
          this.detDivShow = true;
          this.detBtnShow = false;
        }
        if(num == 2){
          this.detDivShow = false;
          this.detBtnShow = true;
        }
      },
      reviewShow(num1){
        if(num1 == 1){
          this.revDivShow = true;
          this.revBtnShow = false;
          this.btnName = '确定';
        }
        if(num1 == 2){
          this.revDivShow = false;
          this.revBtnShow = true;
          this.btnName = '关闭';
        }
      }
		},
		mounted(){
      this.strSplit();
		}
	}
</script>

<style lang="scss" scoped>
  .el-dialog{
    .el-dialog__body{
      padding-bottom: 0;
      .dialog-div{
        .info{
          padding-bottom: 15px;
          font-weight: bold;
        }
        .detail{
          .detail-info-btn{
            margin-top: 5px;
            font-size: 12px;
            font-weight: bold;
            cursor: pointer;
          }
          .detail-info-div{
            min-height: 120px;
            background: #f9f9f9;
            padding: 20px;
            padding-bottom: 0;
            border: 1px solid #eee;
            .title{
              padding-left: 10px;
              font-weight: bold;
            }
            .ruleCode-div{
              padding: 15px 10px 20px 10px;
              span:nth-of-type(2){
                float: right;
                text-decoration: underline;
                cursor: pointer;
              }
            }
            .rule-review-div{
              .submit-review{
                padding-left: 10px;
                text-decoration: underline;
                cursor: pointer;
              }
              .rule-review{
                // height: 300px;
                // background: red;
                border-top: 1px solid #d4d4d4;
                padding: 15px 10px;
                .title{
                  padding-left: 0;
                  font-weight: bold;
                }
                .submitWrap{
                  width: 400px; 
                  padding-top: 10px;
                  padding-right: 20px;
                  /deep/ .el-textarea__inner{
                    min-height: 100px!important;
                  }
                }
                .cancel-review{
                  text-decoration: underline;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
    }
  }
</style>