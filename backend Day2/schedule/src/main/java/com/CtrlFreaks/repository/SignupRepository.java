package com.CtrlFreaks.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.CtrlFreaks.model.SignupModel;



public interface SignupRepository extends JpaRepository<SignupModel, Integer>{

}
