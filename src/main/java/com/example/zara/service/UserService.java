package com.example.zara.service;

import java.util.List;

import com.example.zara.model.UserVO;

public interface UserService {

	// 유저 목록 불러오기 
	public List<UserVO> getUserList();
}
