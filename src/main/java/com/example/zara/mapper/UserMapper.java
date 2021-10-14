package com.example.zara.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.zara.model.UserVO;

@Mapper
public interface UserMapper {
	
	// 유저 목록 불러오기
	public List<UserVO> getUserList();

	// 회원 가입 하기
	public void register(UserVO userVO);
	
}
