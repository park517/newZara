
<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<!doctype html>
<html lang="ko">

<head>
	<!-- 공통 css 단  -->
	<jsp:include page="/WEB-INF/include/commonCss.jsp"></jsp:include>
	<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
	<script src="/pageJs/commonAjax.js"></script>
	<script src="/pageJs/common.js"></script>
	<script src="/pageJs/findAccount.js"></script>
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
				<h1 >계정 찾기 </h1>
				<hr>
				<form  id ="registerForm" action="/user/register" method="post">
					 <div class = "title">아이디 찾기</div>
						 <form action="" method="post">
							 <table>
				                <colgroup>
				                    <col width = "10%">
				                    <col width = "80%">
				                </colgroup>
				               	
				                <tr>
				                    <td class = ""><label for="">이름</label></td>
				                    <td><input name="userName" id="iUserName" type="text" class="form-control"></td>
				                </tr>
				                <tr>
				                    <td><label for="">핸드폰 번호</label></td>
				                    <td><input name="userPhone" id="userPhone"  type="tel" class="form-control"></td>
				                </tr>
				                <tr>
				                	<td colspan="2"><button  style = "width : 100%;"class = "btn btn-light" type = "button" id ="btnFindId">아이디 찾기</button></td>
								</tr>
				            </table>
			            </form>
					<div class = "title">비밀번호 찾기 </div>
		            <table>
		                <colgroup>
		                    <col width = "10%">
		                    <col width = "80%">
		                </colgroup>
		                <tr>
		                    <td><label for="">아이디</label></td>
		                    <td><input name="userId" id = "userId" type="text" class="form-control"></td>
		                </tr>
		                <tr>
		                    <td><label for="">이름</label></td>
		                    <td><input name="userName" id = "pUserName"  type="text" class="form-control"></td>
		                </tr>
		                <tr>
		                    <td><label for="">이메일</label></td>
		                    <td>
		                  	  <input name="userEmail" style="width : 100% ; display: inline-block;" id = "userEmail"  type="text" class="form-control">
		                    </td>
		                </tr>
		                <tr>
				        	<td colspan="2"><button  style = "width : 100%;"class = "btn btn-light" type = "button" id ="btnFindPassword">비밀번호 찾기</button></td>
						</tr>
	
		            </table>
		            
		            <div class="btn_group">
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