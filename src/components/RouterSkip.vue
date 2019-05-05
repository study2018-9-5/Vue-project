<template>
	<div id="skip">
		<div class="Input">
			<el-input></el-input>
			<el-input></el-input>
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

			}
		},
		methods:{
			skipBtn: function(){
				this.$router.push({ path: "/skipIn/" + "小明" + "/" + "20"})
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
	}
</style>