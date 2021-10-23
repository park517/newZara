
/*
	@Param url : ajax 할 주소
	@Param param : 넘길 파라미터
	@Param method : ajax 동작 방식 (POST,GET)
	@Param callBack : 동작할 콜백 함수
	@Param type : 반환 타입 
*/
function zaraAjax(url, param,method ,callBack,type) {

	if(type =="text") {
		$.ajax({
				url:url,
				data :param,
				method :method,
				dataType : "text",
				success : callBack,
				contentType: 'application/json',
				error : function(a, b, c){
					//통신 실패시 발생하는 함수(콜백)
					alert(a + b + c);
				}
	
		});		
		
	}

	else {
		$.ajax({
				url:url,
				data :param,
				method :method,
				dataType : "json",
				success : callBack,
				contentType: 'application/json',
				error : function(a, b, c){
					//통신 실패시 발생하는 함수(콜백)
					alert(a + b + c);
				}
	
		});
	}


}