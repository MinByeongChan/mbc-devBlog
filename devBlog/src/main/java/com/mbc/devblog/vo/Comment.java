package com.mbc.devblog.vo;

import java.sql.Timestamp;
import javax.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import lombok.*;

@Getter
@NoArgsConstructor
@Entity
@Table(name = "comment")
public class Comment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;

	@Column(name = "name", nullable = false)
	String name;

	@Column(name = "message", nullable = false)
	String message;

	@Column(name = "password", nullable = true)
	String password;

	@Column(name = "secret", nullable = true)
	int secret;

	@Column(name = "created_at")
	@CreationTimestamp
	Timestamp created_at;

	@Column(name = "modified_at")
	@UpdateTimestamp
	Timestamp modified_at;

	public Comment() {
	}

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

	public Timestamp getCreated_at() {
		return created_at;
	}

	public void setCreated_at(Timestamp created_at) {
		this.created_at = created_at;
	}

	public int getSecret() {
		return secret;
	}

	public void setSecret(int secret) {
		this.secret = secret;
	}

	public Timestamp getModified_at() {
		return modified_at;
	}

	public void setModified_at(Timestamp modified_at) {
		this.modified_at = modified_at;
	}

	public String print() {
		return "id :" + id + "name :" + name + "message :" + message + "password :" + password + "secret :" + secret;
	}
}
