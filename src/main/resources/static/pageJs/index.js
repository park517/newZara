$( document ).ready(function() {
	
	// 로그인 버튼 눌렀을 시 
	$('#btn_login').click( function() {
		login();
	})	
	
	$('#btn_logout').click( function() {
		logout();
	})
	
	$('#btn_mypage').click( function() {
		mypage();
	})

})



// 마이페이지 이동

function mypage() {
	loaction.href = "/user/mypage";
}


// 로그인 

function login() {

	// 로그인 성공 실패 여부 
	function checkResult(data, a,b ) {
		if(data.userNo != "0") {
			alert("로그인에 성공하였습니다.");
			location.reload();
		}
		else {
			alert("로그인에 실패하였습니다. 다시 한번 입력해주세요");
		}
	}	
	
	var param = {
		
		userId : $('#userId').val(),
		userPassword : $('#userPassword').val()
	
	}
	zaraAjax("/user/login",param,"POST",checkResult,"text");
	
}

// 로그아웃

function logout() {
	location.href = "/user/logout";
}