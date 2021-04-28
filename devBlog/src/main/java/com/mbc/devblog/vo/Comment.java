package com.mbc.devblog.vo;

import java.time.OffsetDateTime;

import javax.persistence.*;
import lombok.*;

@Getter
@NoArgsConstructor
@Entity
@Table(name = "comment")
public class Comment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;

	@Column(nullable = false)
	String name;

	@Column(nullable = false)
	String message;

	@Column(nullable = true)
	String password;

	@Column(nullable = true)
	int secret;
	
	@Column(columnDefinition = "DATETIME default CURRENT_TIMESTAMP")
	OffsetDateTime created_at;

	public Comment() {}

	public Comment(String name, String password, String message, int secret) {
		this.name = name;
		this.password = password;
		this.message = message;
		this.secret = secret;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public OffsetDateTime getCreated_at() {
		return created_at;
	}

	public void setCreated_at(OffsetDateTime created_at) {
		this.created_at = created_at;
	}

	public int getSecret() {
		return secret;
	}

	public void setSecret(int secret) {
		this.secret = secret;
	}

	public String print() {
		return "id :" + id + "name :" + name + "message :" + message + "password :" + password + "secret :" + secret;
	}
}
