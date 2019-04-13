<template>
  <div class="login">
    <img src="../../static/images/bg.jpg" alt="" class="login-bg"/>
    <div class="box">
      <el-form :model="formData" :rules="rules" ref="ruleForm" label-width="0" class="demo-ruleForm" hide-required-asterisk>
        <el-form-item prop="username">
          <el-input v-model="formData.username"> <!--prefix-icon="el-icon-search" 属性方式-->
            <i slot="prefix" class="iconfont icon-user1"></i> <!--slot方式-->
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="formData.password" prefix-icon="iconfont icon-password"></el-input>
        </el-form-item>
      </el-form>
      <el-button @click="submitForm">立即创建</el-button>
    </div>
  </div>
</template>

<script>
  import url from '@/api'

  function isvalidPhone(str) {
    const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
    return reg.test(str)
  }
  var validPhone=(rule, value, callback)=>{
      if (!value){
          callback(new Error('请输入电话号码'))
      }else if (!isvalidPhone(value)){
        callback(new Error('请输入正确的11位手机号码'))
      }else {
          callback()
      }
  }
  export default {
    name: 'Login',
    data () {
      return {
        formData: {
          username: '',
          password:'',
        },
        rules: {
          username: [
            { required: true, message: '请输账号', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
          // phone: [
          //   { required: true, trigger: 'blur', validator: validPhone }//这里需要用到全局变量
          // ]
        }  
      }
    },
    mounted() {
      // this.loginAjax();
    },
    methods:{
      loginAjax:function () {
        let self = this;
        let params = {
          username: self.formData.username,
          password: self.formData.password
        }
        this.$axios.post(url.login,params)
          .then(function (res) {
            console.log(res);
            if(res.data.code == 200){
              setTimeout(function(){
                self.$router.push({ path: "/list", name: 'List'});
              },1000)
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
      submitForm:function(){
        let self = this;
        self.$refs.ruleForm.validate((valid) => {
            if(valid){
              this.loginAjax();
            }
        })
      } 
    }
  }
</script>

<style lang="scss" scoped>
  .login{
    width: 100%;
    height: 100%;
    position: relative;
    .login-bg{
      width: 100%;
      height: 100%;
    }
    .box{
      width: 320px;
      height: 350px;
      border-radius: 3px;
      box-shadow: 5px 5px 5px rgba(0,0,0,0.8);
      background:rgba(30, 30, 30, 0.6);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
  }
</style>
