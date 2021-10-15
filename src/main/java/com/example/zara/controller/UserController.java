package com.example.zara.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.zara.model.UserVO;
import com.example.zara.service.UserService;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

@Controller
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	UserService userService;
	
	// 회원가입 페이지 이동 
	@GetMapping("/register")
	public String showRegisterPage() {
		return "register";
	}
	
	// 회원가입
	@PostMapping("/register")
	
	public String doRegister(UserVO userVO ,@RequestParam("zipCode") String zipCode, @RequestParam("loadAddr") String loadAddr , @RequestParam("detailAddr") String detailAddr) {
		// 주소 스트링 처리 
		String addr = zipCode+"_"+loadAddr+"_"+detailAddr;
		// 주민등록번호 형식 바꿔주기 
		String jumin = userVO.getUserBirth();
		jumin.replace(",", "-");
		userVO.setUserBirth(jumin);
		userVO.setUserAddress(addr); 
		userService.register(userVO);

		return "index";
		}
	
	// 유저목록 불러오기 
	@GetMapping("/userList") 
	public String getUserList(Model model) {
		List<UserVO> userList = userService.getUserList();
		model.addAttribute("userList",userList);
		return "register";
	}
	
	@PostMapping("/test")
	@ResponseBody
	public long ajaxTest(@Param("userId") String userId) {
		int idCount = userService.checkId(userId);
		return idCount;
	}
}
