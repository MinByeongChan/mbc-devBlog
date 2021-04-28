package com.mbc.bo.test.controller;

import java.util.*;

import javax.servlet.http.HttpServletRequest;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mbc.bo.test.service.TestService;
import com.mbc.bo.test.vo.TestVo;

@RestController
public class TestController {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
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
	
	@RequestMapping(value="/test", method=RequestMethod.GET)
	public String test() throws Exception {		
	
		JSONObject jo = new JSONObject();
		
		System.out.println("json Object"+ jo);
		
		List<TestVo> testList = testService.selectTest();
		
		for(int i=0; i<testList.size(); i++) {
			logger.info(testList.get(i).getId() +" / "+testList.get(i).getName());			
		}
		

		
		return jo.toString();
	}
	
	@RequestMapping(value="/api/ip", method=RequestMethod.POST)
	public ResponseEntity<String> postIp(HttpServletRequest req) {
		return ResponseEntity.ok(req.getRemoteAddr());
	}
}
