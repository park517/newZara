package com.example.zara.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.zara.mapper.UserMapper;
import com.example.zara.model.UserVO;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserMapper userMapper;

	// 유저 목록 불러오기
	@Override
	public List<UserVO> getUserList() {
		
		return userMapper.getUserList();
	}

	// 회원가입 하기 
	@Override
	public void register(UserVO userVO) {
		
		userMapper.register(userVO);
		
	}

}
