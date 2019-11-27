import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// vuex有哪几种属性? 答：有五种，分别是 State、 Getter、Mutation 、Action、 Module

// 由于 store 中的状态是响应式的，
// 在组件中调用 store 中的状态简单到仅需要在计算属性中返回即可。
// 触发变化也仅仅是在组件的 methods 中提交(commit) mutation。

// 最好提前在你的 store 中初始化好所有所需属性。
// 当需要在对象上添加新属性时，你应该使用 Vue.set(obj, 'newProp', 123)
const state = {
		count: 0,
		listName: '',
		login: false,
}

// mutations(突变、变动) 里面放置的是我们改变state的初始值的方法。
// mutations里面的参数, 第一个默认为state, 接下来的为自定义参数。
const mutations = {
	addCount(state, n = 0) {
		setTimeout(function(){
			state.count += n
		},5000)
		
	},
	reduceCount(state, n = 0) {
		return (state.count -= n)
	},
	getName(state, payload){  // 载荷, 对于接收者有用的数据(传入的参数)
		return (state.listName = payload)
	},
	// 判断是否登陆
	checkLogin(state, payload){  // 载荷, 对于接收者有用的数据(传入的参数)
		return (state.login = payload)
	}
}

const actions = {
	addCount(context,n) {
		context.commit('addCount',n)
	}
}

const store = new Vuex.Store({
	state,
	mutations,
	actions
})

export default store;