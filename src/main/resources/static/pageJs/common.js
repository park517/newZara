
/*
	기입란 빈 값 체크 
	@Param selector : 유효성 검사할 아이디
	@Param massage  : 빈 값일 때의 메시지
	@Param type     : input 타입
*/

function inputVaildCheck(selector , massage, type) {
	var vail = true;
	if($(selector).val() == "") {
		alert(massage);
		$(selector).focus();
		vail = false;
	}
	
	return vail;
}


/*
	입력란 형식 체크 
	@Param type : 검증할 타입  
	@Param value  : 검증 할 값 

*/

function regVaildCheck(type,value) {
	let regExp;
	
	if(type == 'email') {
		regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
	}
	
	if(type == 'phone') {
		regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
	}
	
	if(type == 'jumin') {
		regExp = /\d{6}\-[1-4]\d{6}/;
	}
	
	return value.match(regExp);

}