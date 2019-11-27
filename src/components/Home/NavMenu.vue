<template>
	<el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="/tabs">选项1-1</el-menu-item>
        <el-menu-item index="/VuexDemo">VuexDemo</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="/EventDemo">EventDemo</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template slot="title">选项1-4</template>
        <el-menu-item index="/input">Input</el-menu-item>
      </el-submenu>
    </el-submenu>

    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>导航二</span>
      </template>
      <el-menu-item index="/routerSkip">路由传参</el-menu-item>
      <el-menu-item index="/catalog">目录</el-menu-item>
      <el-menu-item index="2-3">选项2-3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项2-4</template>
        <el-menu-item index="2-4-1">选项2-4-1</el-menu-item>
      </el-submenu>
    </el-submenu>
  </el-menu>
</template>

<script>
	export default {
		name: 'NavMenu',
		data(){
			return{
	
			}
		},
		methods:{
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