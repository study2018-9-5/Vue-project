function supportStorage () {
	if (window.localStorage) {
		alert("本浏览器支持localStorage");
		return true;
	}else {
		alert("本浏览器不支持localStorage");
	}
}