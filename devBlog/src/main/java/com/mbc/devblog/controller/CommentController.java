package com.mbc.devblog.controller;

import com.mbc.devblog.service.CommentService;
import com.mbc.devblog.vo.Comment;

import java.util.*;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.slf4j.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("BLGCMT")
public class CommentController {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	CommentService commentService;

	@RequestMapping(value = "/")
	public String home() {
		return "index.html";
	}

	@ResponseBody
	@RequestMapping(value = "/001", method = RequestMethod.GET)
	public List<Comment> getAllComments() {
		List<Comment> comments = commentService.findAll();

		logger.info(comments.toString());

		return comments;
	}

	@ResponseBody
	@RequestMapping(value = "/002", method = RequestMethod.POST)
	public ResponseEntity<Comment> save(@RequestBody String jsonStr) {

		try {
			JSONParser parser = new JSONParser();
			Object obj = parser.parse(jsonStr);
			JSONObject jsonObj = (JSONObject) obj;
			
			String name = jsonObj.get("name").toString();
			String password = jsonObj.get("password").toString();
			String message = jsonObj.get("message").toString();
			int secret = Integer.parseInt(jsonObj.get("secret").toString());
			

			logger.info(name);
			logger.info(password);
			logger.info(message);
			logger.info(String.valueOf(secret));

			Comment comment = new Comment(name, password, message, secret);

			logger.info(comment.getId().toString());
			logger.info(comment.getCreated_at().toString());

			
			return new ResponseEntity<Comment>(commentService.save(comment), HttpStatus.OK);
		} catch (Exception e) {
			logger.error(e.toString());
		
		}

		return new ResponseEntity<Comment>(commentService.save(new Comment("", "", "", 0)), HttpStatus.OK);
		
	}
}
