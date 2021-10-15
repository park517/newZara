// 중북 체크 여부 
let idCheckYn = false;
let passCheckYn = false;
$( document ).ready(function() {
	// 회원가입 버튼 눌렀을 시 
	$('#btnRegister').click( function() {
		let check = confirm("회원 가입 하시겠습니까?") 
		if(check) {
				register();
				//$('#registerForm').submit();
		}
	})
	
	// 취소 버튼 눌렀을 시 
	$('#btnCancle').click( function() {
		let check = confirm("이전화면으로 돌아가시겠습니까?") 
		if(check) {
			history.back();
		}
	})
	
	// 아이디 중복체크 클릭 시 
	$('#checkId').click( function() {
		 checkId();
	})
	
	$('#userId').keydown( function() {
		idCheckYn = false;
	})
	
	// 비밀번호 일치 확인
	$('#userPassword2').blur( function() {
		if($('#userPassword').val() != $('#userPassword2').val()) {
			alert("두 비밀번호가 일치하지 않습니다.");
			$('#userPassword2').val("");
			$('#passChecking').css("display","none");
		}
		else {
			$('#passChecking').css("display","");	
			passCheckYn = true;
		}
	})
});



// ajax로 아이디 중복체크
function checkId() {
	
	function checkResult(data,a,b) {
		if(data != 0 ) {
			alert("중복된 아이디 입니다. 다시 입력해주세요");
			$('#userId').val("");
			idCheckYn = true;
		}
		else {
			alert("사용 가능한 아이디 입니다.");
		}
	}
	
	
	var param = {
		userId : $('#userId').val()
	}
	zaraAjax("/user/test",param,"POST",checkResult);
	

}

// 회원가입 했을 시 유효성 체크 
function register() {
	var idCheck = inputVaildCheck(userId,"아이디를 입력해주세요","text");
	if(!idCheck)  return false;
	var passCheck = inputVaildCheck(userPassword,"비밀번호를 입력해주세요","text");
	if(!passCheck)  return false;
	var passCheck1 =inputVaildCheck(userPassword2,"비밀번호 확인을 입력해주세요","text");
	if(!passCheck1)  return false;
	var nameCheck = inputVaildCheck(userName,"이름을 입력해주세요","text");
	if(!nameCheck)  return false;
	var nickCheck = inputVaildCheck(userNick,"닉네임을 입력해주세요","text");
	if(!nickCheck)  return false;
	var emailCheck = inputVaildCheck(userEmail,"이메일을 입력해주세요","text");
	if(!emailCheck)  return false;
	var addrCheck = inputVaildCheck(sample4_postcode,"주소를 입력해주세요","text");
	if(!addrCheck)  return false;
	var telCheck = inputVaildCheck(userPhone,"햔두폰번호를 입력해주세요","text");
	if(!telCheck)  return false;
	var juminCheck = inputVaildCheck(userBirth,"주민번호를 입력해주세요","text");
	if(!juminCheck)  return false;
	
	$('#registerForm').submit();
}



// 주소 검색 api 사용 
function sample4_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function (data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var roadAddr = data.roadAddress; // 도로명 주소 변수
            var extraRoadAddr = ''; // 참고 항목 변수

            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                extraRoadAddr += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if (data.buildingName !== '' && data.apartment === 'Y') {
                extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if (extraRoadAddr !== '') {
                extraRoadAddr = ' (' + extraRoadAddr + ')';
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('sample4_postcode').value = data.zonecode;
            document.getElementById("sample4_roadAddress").value = roadAddr;


            var guideTextBox = document.getElementById("guide");
            // 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
            if (data.autoRoadAddress) {
                var expRoadAddr = data.autoRoadAddress + extraRoadAddr;
                guideTextBox.innerHTML = '(예상 도로명 주소 : ' + expRoadAddr + ')';
                guideTextBox.style.display = 'block';

            } else if (data.autoJibunAddress) {
                var expJibunAddr = data.autoJibunAddress;
                guideTextBox.innerHTML = '(예상 지번 주소 : ' + expJibunAddr + ')';
                guideTextBox.style.display = 'block';
            } else {
                guideTextBox.innerHTML = '';
                guideTextBox.style.display = 'none';
            }
        }
    }).open();
}