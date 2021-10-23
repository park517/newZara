$( document ).ready(function() {
			
	// 아이디 찾기 버튼 눌렀을 시
	$('#btnFindId').click(function() {
		alert("아이디 찾기" );		
		findAccount("id");
	}); 

	// 비밀번호 찾기 버튼 눌렀을 시 
	$('#btnFindPassword').click(function() {
		alert("비밀번호 찾기 ");		
		findAccount("password");
	});
	
	// 취소 버튼 눌렀을 시 
	$('#btnCancle').click( function() {
		let check = confirm("이전화면으로 돌아가시겠습니까?") 
		if(check) {
			history.back();
		}
	});
	
	

});



// 계정찾기
function findAccount(type) {
	
	// 계청 찾기 결과
	
	function resultAccount(data,a,b) {
		if(data == "") {
			alert("찾는 정보가 없습니다. 다시 한번 확인해주세요");
		}
		else {
		
			if (type == "id") {
				alert("아이디는 "+data+" 입니다.");
			} 
		
			else {
				alert("비밀번호는 "+data+"입니다.");
			}	
		}
	}

	let userVO ={}
	let param;
	if(type == "id") {
		
		userVO =
		{
			userName : $('#iUserName').val() ,
			userPhone : $('#userPhone').val() , 
			findType : type
		}
		param = JSON.stringify(userVO)
		zaraAjax("/user/find", param,"POST",resultAccount,"text");	
	}
	
	else {
		
		userVO =
		{
			userId : $('#userId').val(),
			userName : $('#pUserName').val() ,
			userEmail : $('#userEmail').val() , 
			findType : type
		}
		param = JSON.stringify(userVO)
		zaraAjax("/user/find", param,"POST",resultAccount,"text");	
		
		
	}
}
