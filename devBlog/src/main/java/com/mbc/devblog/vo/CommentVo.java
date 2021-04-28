package com.mbc.devblog.vo;

public class CommentVo {
	String id;
	String name;
	String message;
	String password;
	String created_at;
	Boolean secret;

	public String getId() {
		return id;
	}

	public void setId(String id) {
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

	public String getCreated_at() {
		return created_at;
	}

	public void setCreated_at(String created_at) {
		this.created_at = created_at;
	}

	public Boolean getSecret() {
		return secret;
	}

	public void setSecret(Boolean secret) {
		this.secret = secret;
	}

}
