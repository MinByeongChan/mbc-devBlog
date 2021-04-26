package com.mbc.bo.jpaTest.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mbc.bo.test.vo.MemberVo;

@Repository
public interface MemberRepository extends JpaRepository<MemberVo, Long>{
	public List<MemberVo> findById(String id);
	
	public List<MemberVo> findByName(String name);
	
	public List<MemberVo> findByNameLike(String keyword);
	
}
