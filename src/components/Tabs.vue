<template>
	<div id="tab-div">
		<el-tabs v-model="editableTabsValue" type="border-card" class="firstTabs" editable @edit="handleTabsEdit">
		  <el-tab-pane label="用户管理1"
				:key="item.name"
		    v-for="(item, index) in editableTabs"
		    :label="item.title"
		    :name="item.name"
		  >
				<el-tabs v-model="activeName" @tab-click="handleClick" class="secondTabs">
			    <el-tab-pane label="用户管理">用户管理</el-tab-pane>
			    <el-tab-pane label="配置管理">配置管理</el-tab-pane>
			    <el-tab-pane label="角色管理">角色管理</el-tab-pane>
			    <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
			  </el-tabs>
		  </el-tab-pane> 
		</el-tabs>
	</div>
</template>

<script>
	export default{
		name:'Tabs',
		data(){
			return{
				editableTabsValue: '1',
				activeName: '0',
        editableTabs: [],
        tabIndex: 2
			}
		},
		methods:{
			handleClick(tab, event) {
        console.log(tab, event);
      },
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
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
      }
		},
		mounted(){

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
			// background:red;
			.el-tabs__content{
				height:calc(100% - 30px);
				// background:green;
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