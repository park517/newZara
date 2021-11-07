$( document ).ready(function() {
			
	// 아이디 찾기 버튼 눌렀을 시
	$('#btnFindId').click(function() {
		findAccount("id");
	}); 

	// 비밀번호 찾기 버튼 눌렀을 시 
	$('#btnFindPassword').click(function() {
		findAccount("password");
	});
	
	// 취소 버튼 눌렀을 시 
	$('#btnCancle').click( function() {
		let check = confirm("이전화면으로 돌아가시겠습니까?") 
		if(check) {
			history.back();
		}
	});
	
	$('#userPhone').keyup( function() {
		$(this).val( $(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,"$1-$2-$3").replace("--", "-") );
	})
	
	

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
		
		// 이름
		var nameCheck = inputVaildCheck(iUserName,"이름을 입력해주세요","text");
		if(!nameCheck)  return false;
		// 핸드폰 번호
		var phoneCheck = inputVaildCheck(userPhone,"핸드폰 번호를 입력해주세요","text");
		if(!phoneCheck)  return false;
		
		// 전화번호 유효성 체크
		if(regVaildCheck('phone',$('#userPhone').val()) == null) {
			alert("전화번호 형식에 맞게 다시 입력해주세요");
			$('#userPhone').focus();
			return false;
		}
			
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
		
		
		// 아이디 널값 체크
		var idCheck = inputVaildCheck(userId,"아이디를 입력해주세요","text");
		if(!idCheck)  return false;
		// 이름 널값 체크
		var nameCheck = inputVaildCheck(pUserName,"이름을 입력해주세요","text");
		if(!nameCheck)  return false;
		// 이메일 널값 체크
		var emailCheck = inputVaildCheck(userEmail,"이메일을 입력해주세요","text");
		if(!emailCheck)  return false;
	
		// 이메일 유효성 체크
		if(regVaildCheck('email',$('#userEmail').val()) == null) {
			alert("이메일 형식에 맞게 다시 입력해주세요");
			$('#userEmail').focus();
			return false;
		}
	
		
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
