package com.example.zara.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.zara.model.UserVO;

import org.springframework.stereotype.Controller;

@Controller
@RequestMapping("/user")
public class UserController {
	
	
	@GetMapping("/register")
	public String showRegisterPage() {
		return "register";
	}
	
	@PostMapping("/register")
	
	public String doRegister(UserVO userVO) {
		
		System.out.println(userVO.toString());
		
		return "register";
		}
}
