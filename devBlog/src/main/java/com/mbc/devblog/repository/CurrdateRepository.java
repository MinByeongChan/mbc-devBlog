package com.mbc.devblog.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.mbc.devblog.vo.Comment;
import com.mbc.devblog.vo.Currdate;

//@Repository
// Repository 어노테이션을 굳이 사용하지 않아도 된다.
public interface CurrdateRepository extends JpaRepository<Currdate, Long> {

	public List<Comment> findById(String id);

	public List<Comment> findByName(String name);
	
	
	public Currdate save();
}
