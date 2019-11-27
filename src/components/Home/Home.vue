<template>
  <div class="home">
		<div class="leftBox">
	    <nav-menu></nav-menu>
		</div>

		<div class="rightBox">
			<div class="top">
				<div class="topLeft">
					<div class="title">
						<a href="https://element.eleme.cn/#/zh-CN/component/carousel" target="_blank">
							Carousel 走马灯
						</a>
					</div>
					<div class="carouselBox">						
				    <el-carousel trigger="click"  arrow="never" :autoplay=false height="150px">
				      <el-carousel-item v-for="item in 4" :key="item">
				        <h3>{{ item }}</h3>
				      </el-carousel-item>
				    </el-carousel>					  
					</div>
				</div>
				<div class="topRight">
					<el-tabs v-model="activeName" @tab-click="handleClick">
				    <el-tab-pane label="业务公告" name="first">
							<ul>
								<li>1. @tab-click：tab被选中时触发，被选中的标签tab实例</li>
								<li>2. v-model：绑定值，选中选项卡的name。</li>
								<li>3. 默认值：第一个选项卡的name</li>
							</ul>
				    </el-tab-pane>
				    <el-tab-pane label="系统公告" name="second"></el-tab-pane>
				  </el-tabs>
				</div>
			</div>
			<div class="bottom">
				<div class="title">
					<a href="https://element.eleme.cn/#/zh-CN/component/menu">NavMenu 导航菜单</a>
				</div>
				<div class="table-div">
					<Table/>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
	import NavMenu from "@/components/Home/NavMenu";
	import Table from "@/components/Home/Table";
	export default {
		name: 'Home',
		components:{
			NavMenu,
			Table
		},
		data(){
			return{
				activeName: 'first'
			}
		},
		methods:{
			handleClick(tab, event) {
        console.log(tab, event);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
		},
		mounted(){

		}
	}
</script>

<style lang="scss">
	// 混合（mixin）允许您定义可以在整个样式表中重复使用的样式，
	// 而避免了使用无语意的类（class）
	@mixin title {
	 font-weight: bold;
		a{
			height: 25px;
			line-height: 25px;
			display: inline-block;
		}
	}

	.home{
		width: 100%;
		height: 100%;
		background: #eee;
		.leftBox{
			width: 200px;
			height: 100%;
			background: #444; 
			float: left;
			.el-menu{
				border: 0;
				.el-menu-item{
					min-width: 199px;
				}
			}
		}
		.rightBox{
			width: calc(100% - 200px);
			height: 100%;
			padding: 10px;
			background: #EFF5F7; 
			float: left;
			.top{
				width: 100%;
				height: 200px;
				display: flex;
				.topLeft{
					flex: 1;
					padding: 10px 20px;
					margin-right: 5px;
					border-radius: 3px;
					background: #fff;
					.title{
						@include title;
					}
					.carouselBox{
						.el-carousel__item:nth-child(2n) {
					  	background-color: #99a9bf;
					  }
					  .el-carousel__item:nth-child(2n+1) {
					  	background-color: #f60;
					  }
					  .el-carousel__button{
					  	width: 20px;
					  	height: 4px;
					  	border-radius: 4px;
					  }
					}
				}
				.topRight{
					flex: 1;
					padding: 10px 20px;
					margin-left: 5px;
					border-radius: 3px;
					background: #fff;
				}
			}
			.bottom{
				width: 100%;
				height: 320px;
				background: #fff;
				margin-top: 10px;
				padding: 10px 20px;
				border-radius: 3px;
				.title{
					@include title;
				}
			}
		}
	}
</style>