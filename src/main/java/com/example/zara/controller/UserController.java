package com.example.zara.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.zara.model.UserVO;
import com.example.zara.service.UserService;

import java.util.ArrayList;
import java.util.List;

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
		
		String addr = zipCode+"_"+loadAddr+"_"+detailAddr;
		userVO.setUserAddress(addr);
//		userService.register(userVO);
		List<UserVO> userList = new ArrayList<>();
		
		userList = userService.getUserList();
		
		System.out.println(userList);
		return "register";
		}
	
	// 유저목록 불러오기 
	@GetMapping("/userList") 
	public String getUserList(Model model) {
		List<UserVO> userList = userService.getUserList();
		model.addAttribute("userList",userList);
		return "register";
	}
}
