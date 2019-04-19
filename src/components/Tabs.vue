<template>
	<div id="tab-div">
		<!--<div>
		  <el-button
		    size="small"
		    @click="addTab(editableTabsValue)"
		  >
		    add tab
		  </el-button>
		</div>-->
		<el-tabs v-model="editableTabsValue" type="border-card" class="firstTabs" closable @tab-remove="removeTab">
		  <el-tab-pane
				:key="item.name"
		    v-for="(item, index) in editableTabs"
		    :label="item.title"
		    :name="item.name + ''"
		  >
				<el-tabs v-model="activeName1" @tab-click="handleClick" class="secondTabs">
			    <el-tab-pane label="用户管理" name="1">用户管理</el-tab-pane>
			    <el-tab-pane label="配置管理" name="2">配置管理</el-tab-pane>
			    <el-tab-pane label="角色管理" name="3">角色管理</el-tab-pane>
			    <el-tab-pane label="定时任务补偿" name="4">定时任务补偿</el-tab-pane>
			  </el-tabs>
		  </el-tab-pane> 
		</el-tabs>
	</div>
</template>

<script>
	import url from '@/api'

	export default{
		name:'Tabs',
		data(){
			return{
				editableTabsValue: '1',
				activeName1: '1',
        editableTabs: [
					{
						title: 'tabs1',
						name: '1'
					},
					{
						title: 'tabs2',
						name: '2'
					}
        ],
        tabIndex: 2
			}
		},
		methods:{
			tabsAjax:function () {
        let self = this;
        this.$axios.get(url.tabs)
          .then(function (res) {
            if(res.data.code == 200){
            	// self.editableTabs1 = res.data.data.editableTabs1;
            	// self.editableTabs2 = res.data.data.editableTabs2
            }
          })
          .catch(function (err) {
            console.log(err);
          });
      },
			handleClick(tab, event) {
        console.log(tab, event);
      },
      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
		},
		mounted(){
			this.tabsAjax();
			console.log(111111)
		}
	}
</script>

<style lang="scss" scoped>
	#tab-div{
		width: 100%;
		height: 100%;
		background: #EFF5F7;
		padding: 30px 20px;
		/deep/ .firstTabs{
			height:100%;
			border:0;
			box-shadow: none;
			>.el-tabs__header{
				background: #EFF5F7;
				.el-tabs__item{
					height: 35px;
					line-height: 35px;
					background: #fcfcfc;
    			margin-right: 10px;
					border:1px solid #e4e7ed;
					border-radius: 5px 5px 0 0;
					margin-left: 0;
					margin-top: 0;
				}
				.is-active{
					transition: all .3s cubic-bezier(.645,.045,.355,1);
   				border-bottom: 1px solid transparent;
					background: #fff;
				}
			} 
			>.el-tabs__content{
				height:calc(100% - 35px);
				padding-top: 5px;
				border: 1px solid #e4e7ed;
    		border-top: 0;
				.el-tabs__item:nth-child(2){
					padding-left: 0;
				}
				.el-tabs__item:last-child{
					padding-right: 0;
				}
			}
		}
	}
</style>