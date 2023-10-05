package com.CtrlFreaks.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.CtrlFreaks.model.Model;
import com.CtrlFreaks.repository.Repository;



@org.springframework.stereotype.Service
public class Service {

	@Autowired
	private Repository loginrepo;
	
	public List<Model> getuserdetails(){
		return loginrepo.findAll();
	}
	
	public Optional<Model> getuserByID(int loginid){
		return loginrepo.findById(loginid);
	}
	
	public void postDetails(Model lm){
		loginrepo.save(lm);
	}
	
	public Model putDetails(Model lm) {
		return loginrepo.save(lm);
	}
	
	public void deletedetailsById(int loginid) {
		loginrepo.deleteById(loginid);
	}
	
}
