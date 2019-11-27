<template>
  <div class="Input">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="活动名称1" prop="name1">
        <el-input v-model="ruleForm.name1" @change="inputFun(ruleForm.name1,'name2')"></el-input>
      </el-form-item>
      <el-form-item label="活动名称2" prop="name2">
        <el-input v-model="ruleForm.name2" @change="inputFun(ruleForm.name2,'name1')"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">查询</el-button>
        <el-button @click="resetForm()">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'Input',
    data(){
      return{
        ruleForm: {
          name1: '',
          name2: '',
        },
        rules: {
          name1: [
            { required: true, message: '请输入活动名称1', trigger: 'blur' },
          ],
          name2: [
            { required: true, message: '请输入活动名称2', trigger: 'blur' },
          ],
        }
      }
    },
    created(){

    },
    methods:{
      inputFun(value,name){
        if(value){
          this.rules[name][0].required = false;
        }else{
          this.rules[name][0].required = true;
        }
      },
      submitForm() {
        this.$refs.ruleForm.validate((valid) => {
          if(valid) {
            
          }else{
            
          }
        });
      },
      resetForm() {
        this.$refs.ruleForm.resetFields();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .Input{
    width: 400px;
    height: 500px;
    margin: 20px auto;
  }
</style>