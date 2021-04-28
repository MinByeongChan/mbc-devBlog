package com.mbc.devblog.service;

import java.util.*;

import org.slf4j.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mbc.devblog.repository.CommentRepository;
import com.mbc.devblog.vo.Comment;

@Service
public class CommentService {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private CommentRepository commentRepository;
	
	
	public List<Comment> findAll() {
		List<Comment> comments = new ArrayList<>();
		
		commentRepository.findAll().forEach(e -> {
			comments.add(e);
			logger.info(e.print());
		});
		
		return comments;	
	}
	
	public Comment save(Comment comment) {
		commentRepository.save(comment);
		return comment;
	}
	
}
