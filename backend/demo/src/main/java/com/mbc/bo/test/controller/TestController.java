package com.mbc.bo.test.controller;

import java.util.*;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mbc.bo.test.service.TestService;
import com.mbc.bo.test.vo.TestVo;

@RestController
public class TestController {
	@Autowired
	TestService testService;
	
	@RequestMapping(value = "/home")
	public String home() {
		return "index.html";
	}
	
	@RequestMapping(value="/valueTest", method=RequestMethod.GET)
	public String valueTest() {
		String value = "테스트 String";
		return value;
	}
	
	@RequestMapping("/test")
	public String test() throws Exception {		
		TestVo vo = new TestVo("1", "MBC");
		
		JSONObject jo = new JSONObject();
		
		jo.append("id", vo.getId());
		jo.append("name", vo.getName());
		
		System.out.println("json Object"+ jo);
		
		List<TestVo> testList = testService.selectTest();
		testList.add(vo);
		
		return jo.toString();
	}
}
