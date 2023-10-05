package com.CtrlFreaks.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.CtrlFreaks.model.Model;
import com.CtrlFreaks.service.Service;


@RestController
@RequestMapping("/login")
public class Controller {
	
	@Autowired
	public Service ls;
	
	@GetMapping("/getdetails")
	public List<Model> getuserdetails()
	{
		return ls.getuserdetails();
	}
	
	@GetMapping("/getdetailsById/{id}")
	public Optional<Model> getuserByID(@PathVariable int loginid){
		return ls.getuserByID(loginid);
	}
	
	@PostMapping("/postdetails")
	public void postDetails(@RequestBody Model lm) {
		ls.postDetails(lm);
	}
	
	@PutMapping("/putdetails/{id}")
	public void putDetails(@PathVariable int loginid, @RequestBody Model lm){
		lm.setId(loginid);
		ls.putDetails(lm);
	}
	
	@DeleteMapping("/deleteByid/{id}")
	public void deleteById(@PathVariable int loginid){
		ls.deletedetailsById(loginid);
	}
	
	@GetMapping("/welcome")
	public String Hello()
	{
		return "Login Successfull";
	}
	
}
