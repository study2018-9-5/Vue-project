<template>
  <div class="login">
    <img src="../../../static/images/bg.jpg" alt="" class="login-bg"/>
    <div class="box">
      <el-form :model="formData" :rules="rules" ref="ruleForm" label-width="0" class="demo-ruleForm" hide-required-asterisk>
        <el-form-item prop="phone">
          <el-input v-model="formData.phone"> <!--prefix-icon="el-icon-search" 属性方式-->
            <i slot="prefix" class="iconfont icon-user1"></i> <!--slot方式-->
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input :type="inputType" v-model="formData.password" prefix-icon="iconfont icon-password">
            <i slot="suffix" :class="eyes" @click="changeType" style="cursor:pointer"></i>
          </el-input>
        </el-form-item>
      </el-form>
      <el-checkbox v-model="checked">记住密码</el-checkbox>
      <el-button type="primary" @click="submitForm" class="loginBtn">登陆{{$store.state.login}}</el-button>
    </div>
  </div>
</template>

<script>
  import url from '@/api'

  function isvalidPhone(str) {
    const reg = /^1[3456789][0-9]\d{8}$/
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
        inputType: 'password',
        checked: false,
        eyes: 'iconfont icon-yanjing-',
        formData: {
          phone: '',
          username: '',
          password:'',
        },
        rules: {
          // username: [
          //   { required: true, message: '请输账号', trigger: 'blur' },
          //   { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          // ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
          phone: [
            { required: true, trigger: 'blur', validator: validPhone }//这里需要用到全局变量
          ]
        }  
      }
    },
    mounted() {
      this.remember();
    },
    methods:{
      remember:function(){
        let self = this;
        let checked = window.localStorage.getItem("checked");
        if(checked){
          self.formData.phone = window.localStorage.getItem("phone");
          self.formData.password = window.localStorage.getItem("password");
          self.checked = JSON.parse(checked);
        }
      },
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
              // setTimeout(function(){
              //   self.$router.push({ path: "/home", name: 'Home'});
              // },1000)
              // self.$message({
              //   type:'success',
              //   message:res.data.message
              // })
              self.$store.commit('checkLogin',true);
            }
          })
          .catch(function (err) {
            console.log(err);
          });
      },
      // 提交验证
      submitForm:function(){
        let self = this;
        self.$refs.ruleForm.validate((valid) => {
            if(valid){
              self.loginAjax();
              if(self.checked == true){
                window.localStorage.setItem("phone",self.formData.phone); //设置localStorage
                window.localStorage.setItem("password",self.formData.password);
                window.localStorage.setItem("checked",self.checked);
              }else{
                window.localStorage.clear(); //清除localStorage
              }
            }
        })
      },
      // 密码的显示和隐藏
      changeType:function(){
        if(this.inputType === "text"){
          this.inputType = "password";
          this.eyes = "iconfont icon-eyes_close";
        }else{
          this.inputType = "text"
          this.eyes = "iconfont icon-yanjing-";
        }
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
      // height: 100%;
      height: calc(100% + 60px);
      position: absolute;
      top: -60px;
      z-index: 999;
    }
    .box{
      width: 320px;
      height: 350px;
      background:rgba(30, 30, 30, 0.6);
      padding: 90px 20px;
      border-radius: 3px;
      box-shadow: 5px 5px 5px rgba(0,0,0,0.8);
      position: absolute;
      z-index: 9999;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      .loginBtn{
        width: 100%;
        margin-top: 8px;
        font-size: 16px;
        letter-spacing: 4px;
      }
    }
  }
</style>
