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
	<script src="/pageJs/userCheck.js"></script>
	<style>
	
	
	.section_padding {
		padding : 50px;
	}
	.check_wrap {
		width: 50%;
		height: 100%;
		background-color: white;
		color: black;
		padding : 10px;
		margin: auto;

	}
	#btn_confirm {
		margin-top: 20px;
	}
	
	</style>


</head>

<body>
   <!--::header part start::-->
	<jsp:include page="/WEB-INF/include/header.jsp"></jsp:include>
    <!-- Header part end-->
	<input type="hidden" id="userPassword" value="${loginUser.userPassword}">
    <!--mainContent Start-->
    <section class="client_review section_padding">
        <div class="container">
			<div class = "check_wrap form-group">
				<h1>비밀번호 확인</h1>
				<hr>
				<h3>비밀번호를 입력해주세요</h3> 
				<input class="form-control" id="password" type="password" placeholder="비밀번호를 입력해주세요">
				<button id="btn_confirm" class="btn btn-primary">확인</button>
			</div>
        </div>
    </section>
	<!--  End mainContent -->

	<!--  footer 부분 -->
	<jsp:include page="/WEB-INF/include/footer.jsp"></jsp:include>
</body>

</html>