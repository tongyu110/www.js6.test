
/**
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * 使用 Promise 来处理，异步加载
 */
function imgAjaxLoadFromPromise (url) {

	return new Promise(function(resolve, reject){

		  var request = new XMLHttpRequest();
	      request.open('GET', url);
	      request.responseType = 'blob';
	      request.onload = function() {
	        if (request.status === 200) {
	          resolve(request.response);
	        } else {
	          reject(request.statusText+'11');
	        }
	      };
	      request.onerror = function() {
	          reject('There was a network error.');
	      };
	      request.send();

	});

}


function imgAjaxLoadFromPromiseTest() {

	  var body = document.querySelector('body');
	  var myImage = new Image();
	  imgAjaxLoadFromPromise('myLittleVader.jpg').then(function(response) {
	    var imageURL = window.URL.createObjectURL(response);
	    myImage.src = imageURL;
	    body.appendChild(myImage);
	  }, function(Error) {
	    console.log(Error);
	  });

}
