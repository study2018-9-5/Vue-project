import url from './Login'

let host = 'http://rap2api.taobao.org/app/mock/164688'

for(let key in url ){
	console.log(url.hasOwnProperty(key))
	console.log(key)
	if(url.hasOwnProperty(key)){
		console.log(url[key])
		url[key] = host + url[key];
	}
}


export default url