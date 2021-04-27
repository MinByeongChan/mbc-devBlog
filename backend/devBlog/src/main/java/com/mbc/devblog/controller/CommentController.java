package com.mbc.devblog.controller;

import java.util.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.mbc.devblog.vo.CommentVo;

@RestController
public class CommentController {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@RequestMapping(value = "/")
	public String home() {
		return "index.html";
	}

	@ResponseBody
	@RequestMapping(value = "/BLGCMT001", method=RequestMethod.GET)
	public String getComments(ArrayList<CommentVo> comments) {
		return "GET Comments";
	}
}
