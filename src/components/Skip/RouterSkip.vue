<template>
	<div id="skip">
		<div class="Input">
			<el-form ref="form" :model="form" label-width="80px">
				<el-row :gutter="20">
	  			<el-col :span="6">
						<el-form-item label="姓名:">
					    <el-input v-model="form.name" size="small"></el-input>
					  </el-form-item>
	  			</el-col>
	  			<el-col :span="6">
						<el-form-item label="年龄:">
					    <el-input v-model="form.age" size="small"></el-input>
					  </el-form-item>
	  			</el-col>
	  		</el-row>
			</el-form>
		</div>
		<div class="footer">
			<el-button type="primary" size="small" class="skipBtn" @click="skipBtn">路由跳转</el-button>
		</div>
	</div>

</template>

<script>
	export default{
		name:'RouterSkip',
		data(){
			return{
				form:{
					name: "",
					age: ""
				}
			}
		},
		methods:{
			skipBtn: function(){
		  	// 写法 1.如果以这种方式传递参数，那么路由的写法要以(1)为准。
		  	// url的表现形式为(url中带参数)：http://localhost:8080/#/skipIn/小明/20
		    this.$router.push({ path: "/skipIn/" + this.form.name + "/" + this.form.age});
		    
		    // 写法 2. 如果以这种方式传递参数，那么路由的写法要以(2)就可以了。
		    // url的表现形式为(url中不带参数)：http://localhost:8080/#/skipIn
				//this.$router.push({ name: 'SkipIn', params:{name: this.form.name, age:this.form.age}});
				// 注：如果以2这种方式传递参数时，那么当刷新跳转后传参的页面，数据将不存在。
				
				// 写法 3. 如果以这种方式传递参数，那么路由的写法要以(2)就可以了。
			  // url的表现形式为(url中带参数)：http://localhost:8080/#/skipIn?name=小明&age=20
				//this.$router.push({ path: "/skipIn", query: {name: this.form.name, age:this.form.age}});
				// 注：如果以1、3这种方式传递参数时，刷新跳转后传参的页面，数据还会显示存在。
		  }
		},
		mounted(){
			
		}
	}
</script>

<style lang="scss" scoped>
	#skip{
		width: 100%;
		height: 400px;
		background: #eee;
		.Input{
			padding: 10px 20px;
		}
		.footer{
			width: 100%;
			background: #ccc;
			padding: 5px 20px;
			overflow: hidden;
			.skipBtn{
				float: right;
			}
		}
	}
</style>