package com.mbc.bo.jpaTest.controller;

import java.util.*;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.mbc.bo.jpaTest.service.MemberService;
import com.mbc.bo.test.vo.MemberVo;

@RestController
@RequestMapping("memberTest")
public class TestJpaRestController {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	MemberService memberService;

	@GetMapping(produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<List<MemberVo>> getAllmember() {
		List<MemberVo> member = memberService.findAll();
		logger.info(member.toString());
		return new ResponseEntity<List<MemberVo>>(member, HttpStatus.OK);
	}

	@GetMapping(value = "/{mbrNo}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<MemberVo> getMember(@PathVariable("mbrNo") Long mbrNo) {
		Optional<MemberVo> member = memberService.findById(mbrNo);
		logger.info(member.toString());
		return new ResponseEntity<MemberVo>(member.get(), HttpStatus.OK);
	}

	@DeleteMapping(value = "/{mbrNo}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Void> deleteMember(@PathVariable("mbrNo") Long mbrNo) {
		memberService.deleteById(mbrNo);
		logger.info(mbrNo.toString());
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}

	@PutMapping(value = "/{mbrNo}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<MemberVo> updateMember(@PathVariable("mbrNo") Long mbrNo, MemberVo member) {
		memberService.updateByid(mbrNo, member);
		logger.info(member.toString());
		return new ResponseEntity<MemberVo>(member, HttpStatus.OK);
	}

	// 회원 입력
	@PostMapping
	public ResponseEntity<MemberVo> save(MemberVo member) {
		logger.info(member.toString());
		return new ResponseEntity<MemberVo>(memberService.save(member), HttpStatus.OK);
	}

	@RequestMapping(value = "/saveMember", method = RequestMethod.GET)
	public ResponseEntity<MemberVo> save(HttpServletRequest req, MemberVo member) {
		logger.info(member.toString());
		return new ResponseEntity<MemberVo>(memberService.save(member), HttpStatus.OK);
	}
}
