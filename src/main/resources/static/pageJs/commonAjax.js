
/*
	@Param url : ajax 할 주소
	@Param param : 넘길 파라미터
	@Param method : ajax 동작 방식 (POST,GET)
	@Param callBack : 동작할 콜백 함수
*/
function zaraAjax(url, param,method ,callBack) {
	$.ajax({
			url:url,
			data :param,
			method :method,
			dataType : "json",
			success : callBack
	});
}