package com.example.zara.model;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserVO {
	
	private long userNo; // 유저 고유 번호
	private String userId; // 유저 아이디
	private String userEmail; // 유저 이메일
	private long userState; // 유저 상태 정보 ( 탈퇴, 휴면, 활성화 등 ) 
	private String userPassword; // 유저 비밀번호
	private String userName;  // 유저 이름
	private String userNick; // 유저 닉네임
	private String userAddress; // 유저 주소 (우편번호_도로명 주소_상세주소)
	private String userPhone; // 유저 연락처
	private String userGender; // 유저 성별
	private String userBirth; // 주민등록번호
	private Date userCDate; // 생성일
	private Date userDDate; // 삭제일
	private Date llDate; // 마지막 로그인 일자 
	private String findType; // 계정 찾기에 이용하려고 추가  
	

}
