// 중북 체크 여부 
let idCheckYn = false;

// 비밀번호 재입력 일치 여부 
let passCheckYn = false;

$( document ).ready(function() {
	
	// 회원가입 버튼 눌렀을 시 
	$('#btnRegister').click( function() {
		let check = confirm("회원 가입 하시겠습니까?") 
		if(check) {
				register();
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
	
	// 아이디 재 입력 시 중복체크 false로 바꾸기 미체크 방지 
	$('#userId').keydown( function() {
		idCheckYn = false;
	})
	
	// 비밀번호 일치 확인
	$('#userPassword2').blur( function() {
		if($('#userPassword').val() != $('#userPassword2').val()) {
			alert("두 비밀번호가 일치하지 않습니다.");
			$('#userPassword2').val("");
			$('#userPassword2').focus();
			$('#passChecking').css("display","none");
		}
		else {
			$('#passChecking').css("display","");	
			passCheckYn = true;
		}
	})
	
	$('#userPhone').keyup( function() {
		$(this).val( $(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,"$1-$2-$3").replace("--", "-") );
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
	
	zaraAjax("/user/idCheck",param,"POST",checkResult);
	

}

// 회원가입 시도
function register() {
	
	// 빈 값 체크 
	
	// 아아디
	var idCheck = inputVaildCheck(userId,"아이디를 입력해주세요","text");
	if(!idCheck)  return false;
	
	// 비밀번호
	var passCheck = inputVaildCheck(userPassword,"비밀번호를 입력해주세요","text");
	if(!passCheck)  return false;
	
	// 비밀번호 확인 란
	var passCheck1 =inputVaildCheck(userPassword2,"비밀번호 확인을 입력해주세요","text");
	if(!passCheck1)  return false;
	
	// 사용자 이름
	var nameCheck = inputVaildCheck(userName,"이름을 입력해주세요","text");
	if(!nameCheck)  return false;
	
	// 닉네임
	var nickCheck = inputVaildCheck(userNick,"닉네임을 입력해주세요","text");
	if(!nickCheck)  return false;
	
	// 성별
	if ($('input[name=userGender]:checked').length == 0) {
		alert("성별을 선택해주세요");
		return false;
	}
		
	// 이메일
	var emailCheck = inputVaildCheck(userEmail,"이메일을 입력해주세요","text");
	if(!emailCheck)  return false;
	
	// 이메일 유효성 체크
	if(regVaildCheck('email',$('#userEmail').val()) == null) {
		alert("이메일 형식에 맞게 다시 입력해주세요");
		$('#userEmail').focus();
		return false;
	}
	
	// 주소 
	var addrCheck = inputVaildCheck(sample4_postcode,"주소를 입력해주세요","text");
	if(!addrCheck)  return false;
	

	
	// 전화번호 
	var telCheck = inputVaildCheck(userPhone,"햔두폰번호를 입력해주세요","text");
	if(!telCheck)  return false;
	
	// 전화번호 유효성 체크
	if(regVaildCheck('phone',$('#userPhone').val()) == null) {
		alert("전화번호 형식에 맞게 다시 입력해주세요");
		$('#userPhone').focus();
		return false;
	}
	
	// 주민번호 
	var FjuminCheck = inputVaildCheck(userBirthF,"주민번호를 입력해주세요","text");
	var BjuminCheck = inputVaildCheck(userBirthB,"주민번호 뒷자리를 입력해주세요","text");
	if(!FjuminCheck || !BjuminCheck)  return false;
	let jumin = $('#userBirthF').val()+"-"+$('#userBirthB').val();
	if(regVaildCheck('jumin',jumin) == null ) {
		alert("주민등록번호 형식을 확인해주세요");
		$('#userBirthF').focus();
		return false;	
	}	
	
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