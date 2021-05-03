package com.mbc.devblog.service;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mbc.devblog.repository.CommentRepository;
import com.mbc.devblog.vo.Comment;

@Service
public class CommentService {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private CommentRepository commentRepository;

	// Find All Data
	public List<Comment> findAll() {
		List<Comment> comments = new ArrayList<>();

		commentRepository.findAll().forEach(e -> {
			comments.add(e);
		});

		return comments;
	}

	// Find Data By Id
	public Optional<Comment> findById(Long id) {
		Optional<Comment> comment = commentRepository.findById(id);
		return comment;
	}

	// Save
	public Comment save(Comment comment) {
		commentRepository.save(comment);
		return comment;
	}

	// Delete
	public void deleteById(Long id) {
		commentRepository.deleteById(id);
	}

	// Update
	public void updateById(Long id, Comment comment) {
		Optional<Comment> e = commentRepository.findById(id);

		if (e.isPresent()) {
			if (comment.getName() != null)
				e.get().setName(comment.getName());

			if (comment.getMessage() != null)
				e.get().setMessage(comment.getMessage());

			if (comment.getPassword() != null)
				e.get().setPassword(comment.getPassword());

			commentRepository.save(comment);
		}
	}
}
