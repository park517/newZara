package com.example.zara.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.example.zara.model.UserVO;

public interface UserService {

	// 유저 목록 불러오기 
	public List<UserVO> getUserList();
	
	// 회원 가입 하기
	public void register(UserVO userVO);
	
	// 중복체크 하기
	public int checkId(@Param("userId") String userId);

	// 로그인 하기
	public UserVO login(@Param("userId") String userId , @Param("userPassword") String userPassword);
	
	// 아이디 , 비밀번호 찾기
	public String findAccount(UserVO userVO);
	

}
