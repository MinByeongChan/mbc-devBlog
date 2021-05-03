package com.mbc.devblog.controller;

import com.mbc.devblog.service.CommentService;
import com.mbc.devblog.vo.Comment;

import java.util.*;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.slf4j.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
	@GetMapping(value = "/001/{id}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Comment> getComment(@PathVariable("id") Long id) {
		Optional<Comment> comment = commentService.findById(id);
		return new ResponseEntity<Comment>(comment.get(), HttpStatus.OK);
	}

	@ResponseBody
	@RequestMapping(value = "/002", method = RequestMethod.POST)
	public ResponseEntity<Comment> saveComment(@RequestBody String jsonStr) {
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

			return new ResponseEntity<Comment>(commentService.save(comment), HttpStatus.OK);
		} catch (Exception e) {
			logger.error(e.toString());

		}

		return null;
	}
	
	@ResponseBody
	@PutMapping(value = "/003", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Comment> updateComment2(@RequestBody String jsonStr) {
		try {
			JSONParser parser = new JSONParser();
			Object object = parser.parse(jsonStr);
			JSONObject jsonObj = (JSONObject) object;
			
			Long id = Long.parseLong(jsonObj.get("id").toString());
			String name;
			String message;
			String password;
			Integer secret;
			
			Optional<Comment> currComment = commentService.findById(id);			

			if (jsonObj.get("name") != null) {
				name = jsonObj.get("name").toString();
				currComment.get().setName(name);				
			}

			if (jsonObj.get("message") != null) {
				message = jsonObj.get("message").toString();
				currComment.get().setMessage(message);			
			}

			if (jsonObj.get("password") != null) {
				password = jsonObj.get("password").toString();
				currComment.get().setPassword(password);				
			}

			if (jsonObj.get("secret") != null) {
				secret = Integer.parseInt(jsonObj.get("secret").toString());
				currComment.get().setSecret(secret);
			}

			commentService.updateById(id, currComment.get());
			return new ResponseEntity<Comment>(currComment.get(), HttpStatus.OK);
		} catch (Exception err) {
			err.printStackTrace();
		}

		return null;
	}
	
	@ResponseBody
	@PutMapping(value = "/003/{id}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Comment> updateComment(@PathVariable("id") Long id, Comment comment) {
		Optional<Comment> currComment = commentService.findById(id);

		try {
			if (comment.getName() != null)
				currComment.get().setName(comment.getName());

			if (comment.getMessage() != null)
				currComment.get().setMessage(comment.getMessage());

			if (comment.getPassword() != null)
				currComment.get().setPassword(comment.getPassword());

			currComment.get().setSecret(comment.getSecret());

			commentService.updateById(id, currComment.get());
			return new ResponseEntity<Comment>(currComment.get(), HttpStatus.OK);
		} catch (Exception err) {
			err.printStackTrace();
		}

		return null;
	}

	@ResponseBody
	@DeleteMapping(value = "/004/{id}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Void> deleteComment(@PathVariable Long id) {
		logger.info("id : " + id.toString());
		commentService.deleteById(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}

}
