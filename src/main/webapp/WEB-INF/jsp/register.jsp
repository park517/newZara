
<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<!doctype html>
<html lang="ko">

<head>
	<!-- 공통 css 단  -->
	<jsp:include page="/WEB-INF/include/commonCss.jsp"></jsp:include>
	<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
	<script src="/pageJs/register.js"></script>
	<style>
	
	
	.section_padding {
		padding : 50px;
	}
	.register_wrap {
		width: 100%;
		height: 100%;
		background-color: white;
		color: black;
		padding : 10px;

	}
	.register_wrap table {
		margin : auto;
		width: 100%;
		padding : 10px;
		border : 1px solid black;
	    border-collapse: separate;
  	    border-spacing: 0 10px;
	}
	tr > td:first-child {
		margin-right : 20px;
		font-size : 15px;
		text-align: center;
		height: 40px;
		vertical-align: middle;

	}

	.title { 
		font-weight: bold;
		font-size : 20px;
		padding : 10px;
		border-bottom: 1px solid black;
	}
	.btn_group {
		text-align: center;
	
	}
	colgroup > col:first-child {
		background-color : #F6F6F6;
	}
	
	input {
		margin-left: 10px;
		margin-bottom: 5px;
	}
	
	#checkId {
		margin-left : 30px;
	}

	
	</style>


</head>

<body>
   <!--::header part start::-->
	<jsp:include page="/WEB-INF/include/header.jsp"></jsp:include>
    <!-- Header part end-->

    <!--mainContent Start-->
    <section class="client_review section_padding">
        <div class="container">
			<div class = "register_wrap form-group">
				<h1 >Zara 회원가입</h1>
				<hr>
				<form  id ="registerForm" action="/user/register" method="post">
					 <div class = "title">로그인 정보</div>
					 <table>
		                <colgroup>
		                    <col width = "10%">
		                    <col width = "60%">
		                    <col width = "20%">
		                </colgroup>
		               	
		                <tr>
		                    <td class = ""><label for="">아이디</label></td>
		                    <td><input name="userId" id="userId" type="text" class="form-control"></td>
		                    <td><button id="checkId" class = "btn btn-secondary">중복체크</button></td>
		                </tr>
		                <tr>
		                    <td><label for="">비밀번호</label></td>
		                    <td><input name="userPassword" id="userPassword"  type="text" class="form-control"></td>
		                </tr>
		                <tr>
		                    <td><label for="">비밀번호 확인</label></td>
		                    <td><input id="userPassword2" type="text" class="form-control"></td>
		                </tr>
		            </table>
					<div class = "title">회원 정보</div>
		            <table>
		                <colgroup>
		                    <col width = "10%">
		                    <col width = "60%">
		                    <col width = "20%">
		                </colgroup>
		                <tr>
		                    <td><label for="">이름</label></td>
		                    <td><input name="userName" id = "userName" type="text" class="form-control"></td>
		                </tr>
		                <tr>
		                    <td><label for="">닉네임</label></td>
		                    <td><input name="userNick" id = "userNick"  type="text" class="form-control"></td>
		                </tr>
		                <tr>
		                    <td><label for="">성별</label></td>
		                    <td>  
								<input type = "radio" name ="userGender" value ="남"> 남
								<input type = "radio" name ="userGender" value ="여"> 여
			                   
  							</td>
		                </tr>
		                <tr>
		                    <td><label for="">이메일</label></td>
		                    <td><input name="userEmail" id = "userEmail" type="text" class="form-control"></td>
		                </tr>
		                <tr>
		                    <td><label for="">주소</label></td>
		                    <td>
		                        <input type="text" name="zipCode" id="sample4_postcode"  class="form-control" placeholder="우편번호">
		                        <input type="button" onclick="sample4_execDaumPostcode()" class="form-control" value="우편번호 찾기"><br>
		                        <input type="text" name="loadAddr" id="sample4_roadAddress" class="form-control" placeholder="도로명주소">
		                        <span id="guide" style="color:#999;display:none"></span>
		                        <input type="text" name="detailAddr" id="sample4_detailAddress" class="form-control"  placeholder="상세주소">
		                    </td>
		                </tr>
		                <tr>
		                    <td><label for="">전화번호</label></td>
		                    <td><input name="userPhone" id = "userPhone"  type="text" class="form-control"></td>
		                </tr>
		                <tr>
		                    <td><label for="">주민등록번호</label></td>
		                    <td>
		                  	  <input name="userBirth" style="width : 40% ; display: inline-block;" id = "userBirth"  type="text" class="form-control">
		                  	  <span style = "font-size : 30px;"> -</span>
		                  	  <input type="password" name="userBirth" style="width : 40% ; display: inline-block;" id = "userBirth"  type="text" class="form-control">
		                    </td>
		                    
		                </tr>
	
		            </table>
		            
		            <div class="btn_group">
		            	<button type="button" id="btnRegister" class="btn btn-primary" >회원가입</button>	
		            	<button type="button" id="btnCancle" class="btn btn-danger" >취소</button>	
		            </div>
	            </form>
			</div>
        </div>
    </section>
	<!--  End mainContent -->

	<!--  footer 부분 -->
	<jsp:include page="/WEB-INF/include/footer.jsp"></jsp:include>
</body>

</html>