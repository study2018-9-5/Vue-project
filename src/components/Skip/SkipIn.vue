<template>
	<div id="skipIn">
		<div class="header">
			<span class="info">{{msg}}</span>
			<el-button type="primary" size="small" class="backBtn" @click="back">
			返回<i class="iconfont icon-fanhui back"></i>
			</el-button>
		</div>
		<div class="information">{{params}}</div>
	</div>
</template>

<script>
	export default{
		name:'SkipIn',
		data(){
			return{
				msg: "路由传参页面",
				params: ""
			}
		},
		methods:{
			back: function(){
				this.$router.go(-1);
			},
			showInfo: function(){
				this.params = this.$route.query.name;
				// this.params = this.$route.params.name;
			}
		},
		mounted(){
			this.showInfo();
		}
	}
</script>

<style lang="scss" scoped>
	#skipIn{
		width: 100%;
		height: 400px;
		background: red;
		.header{
			width: 100%;
			background: #eee;
			padding: 5px 20px;
			overflow: hidden;
			.info{
				font-size: 14px;
				line-height: 32px;
			}
			.backBtn{
				float: right;
				.back{
					font-size: 14px;
				}
			}
		}
		.information{
			font-size: 20px;
		}
	}
</style>