$( document ).ready(function() {
	
	$('#btn_confirm').click( function() {
		checkPassword($('#password').val());	
	});
});

// 비밀번호 체크
function checkPassword(password) {
	var userPassword = $('#userPassword').val();
	
	// 비밀번호 일치 시 마이페이지로 이동 
	if( password == userPassword) {
		alert("비밀번호가 일치합니다.");
		location.href = "/user/myPage";
	}
	
	// 일치 하지 않았을 시 input 초기화 
	else {
		alert("비밀번호가 일치하지 않습니다. 다시 입력해주세요");
		$('#password').val("");
		$('#password').foucs();
	
	} 
}