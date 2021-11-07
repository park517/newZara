package com.example.zara.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.zara.model.UserVO;
import com.example.zara.service.UserService;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;
import javax.websocket.server.PathParam;

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
		userVO.setUserBirth(jumin.replace(",", "-"));
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
	// 아이디 중복 체크 
	@PostMapping("/idCheck")
	@ResponseBody
	public long ajaxTest(@Param("userId") String userId) {
		int idCount = userService.checkId(userId);
		return idCount;
	}
	// 로그인
	@PostMapping("/login")
	@ResponseBody
	public UserVO doLogin (HttpSession session, @Param("userId") String userId , @Param("userPassword") String userPassword) {
		
		System.out.println("아이디  : "+ userId +"비밀번호 : "+userPassword);
		// 아이디 , 패스워드에 맞는 유저 정보 가져오기
		UserVO user = userService.login(userId, userPassword);
		System.out.println("유저정보 :  "+ user);
		// 유저 정보가 없을 시 ( 실패 )
		if(user == null) {
			UserVO emptyUser = new UserVO();
			return emptyUser;
		}
		
		// 로그인 성공 시 세션 Set
		else {
			session.setAttribute("loginUser", user);
			return user;
		}

	}

	// 로그아웃 
	@GetMapping("/logout")
	public String logout(Model model, HttpSession session) {
		session.removeAttribute("loginUser");
		model.addAttribute("msg","로그아웃되었습니다.");
		model.addAttribute("back",true);
		return "common/redirect";
	}
	
	// 아이디 , 비밀번호 찾기 페이지로 이동
	@GetMapping("/find") 
	public String findAccount() {
		return "findAccount";
	}
	
	// 아이디 비밀번호 찾기 
	@PostMapping("/find")
	@ResponseBody
	public String findAccount(@RequestBody UserVO userVO) { 

		System.out.println(userVO);
		String account = userService.findAccount(userVO);
		String subAccount = account.substring(0, 3);
		for(int i = 3 ; i < account.length() ; i++) subAccount += "*";
		System.out.println("찾은 정보 : "+account);
		
		return subAccount;
	}
	
	// 마이페이지로 이동
	@GetMapping("/myPage")
	public String myPage() {
		
		return "myPage";
	}
	
	// 유저 비밀번호 체크 페이지
	// type 
	// 0 : 마이페이지
	@GetMapping("/userCheck/{type}")
	public String userCheck(@PathVariable("type") int type) {
		System.out.println("타입 : "+type);

		return "userCheck";
	}
	
}
