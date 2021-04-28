package com.mbc.bo.test.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.mbc.bo.test.vo.TestVo;

@Repository
@Mapper
public interface TestMapper {
	List<TestVo> selectTest();
}
