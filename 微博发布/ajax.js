
/**
 * ajax异步请求数据封装
 * @param {Object} url
 * @param {Object} type
 * @param {Object} param
 * @param {Object} datastyle
 * @param {Object} callback
 */
function ajax(url,type,param,datastyle,callback){
		var xhr = null;
		if(window.XMLHttpRequest){
			xhr = new XMLHttpRequest();
		}else{
			xhr = new ActiveXObject('Microsoft.XMLHTTP');
		}
		if(type == 'get'){
			url += '?' + param;//url拼接的字符串
		}
		xhr.open(type,url,true);
		var demo = null;
		if(type == 'post'){
			demo = param;
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		}
		xhr.send(demo);
		xhr.onreadystatechange = function(){
			if (xhr.readyState == 4) {
				if(xhr.status == 200){
					var data = xhr.responseText;
					if(datastyle == 'json'){
						data = JSON.parse(data);
					}
					callback(data);
				}
			}
		}
	}