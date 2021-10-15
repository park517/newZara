
/*
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