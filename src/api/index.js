import url from './Login'

let host = 'http://rap2api.taobao.org/app/mock/164688'

// 遍历对象: 通常用for in来遍历对象的键名
// for in遍历数组的毛病
// 1.index索引为字符串型数字，不能直接进行几何运算
// 2.for in遍历的是数组的索引，而for of遍历的是数组元素值。
for(let key in url ){
	// console.log(url.hasOwnProperty(key))
	// console.log(key)
	if(url.hasOwnProperty(key)){
		// console.log(url[key])
		url[key] = host + url[key];
	}
}


export default url