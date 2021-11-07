
<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  
<!doctype html>
<html lang="ko">

<head>
	<!-- 공통 css 단  -->
	<jsp:include page="/WEB-INF/include/commonCss.jsp"></jsp:include>
	<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
	<script src="/pageJs/commonAjax.js"></script>
	<script src="/pageJs/common.js"></script>
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
	
	#checkId , #passChecking {
		margin-left : 30px;
	}
	
	input {
	readonly : "readonly"
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
				<h1 >마이페이지</h1>
				<hr>
				<form  id ="registerForm" action="/user/register" method="post">
					 <div class = "title">회원 정보</div>
					 <table>
		                <colgroup>
		                    <col width = "10%">
		                    <col width = "60%">
		                    <col width = "20%">
		                </colgroup>
		               	
		                <tr>
		                    <td class = ""><label for="">아이디</label></td>
		                    <td><input readonly="readonly" value = "${loginUser.userId}" name="userId" id="userId" type="text" class="form-control"></td>
		                </tr>
		                <tr>
		                    <td class = ""><label for="">이름</label></td>
		                    <td><input readonly="readonly" name="userName" value="${loginUser.userName}" id="userName" type="text" class="form-control"></td>
		                </tr>
		                <tr>
		                    <td class = ""><label for="">닉네임</label></td>
		                    <td><input readonly="readonly" name="userNick" value="${loginUser.userNick}"  id="userNick" type="text" class="form-control"></td>
		                </tr>
		                <tr>
		                    <td class = ""><label for="">성별</label></td>
		                    <td><input readonly="readonly" name="uesrGender" value="${loginUser.userGender}" id="userGender" type="text" class="form-control"></td>
		                </tr>
		                <tr>
		                    <td class = ""><label for="">이메일</label></td>
		                    <td><input readonly="readonly" name="userEmail"  value="${loginUser.userEmail}"id="userEmail" type="text" class="form-control"></td>
		                </tr>
		                <tr>
		                    <td class = ""><label for="">주소</label></td>
		                    <td><input readonly="readonly" name="userAddress"  value="${loginUser.userAddress}" id="userAddress" type="text" class="form-control"></td>
		                </tr>
		                <tr>
		                    <td class = ""><label for="">전화번호</label></td>
		                    <td><input readonly="readonly" name="userPhone" value="${loginUser.userPhone}" id="userPhone" type="text" class="form-control"></td>
		                </tr>
		                <tr>
		                    <td class = ""><label for="">가입일자</label></td>
		                    <td><input readonly="readonly" name="userPhone" value="${loginUser.userCDate}" id="userPhone" type="text" class="form-control"></td>
		                </tr>
		            </table>
	            </form>
			</div>
        </div>
    </section>
	<!--  End mainContent -->

	<!--  footer 부분 -->
	<jsp:include page="/WEB-INF/include/footer.jsp"></jsp:include>
</body>

</html>