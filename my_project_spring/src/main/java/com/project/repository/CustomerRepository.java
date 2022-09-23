package com.project.repository;

import com.project.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

@Transactional
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
        @Query(value = "select * from customer where user_id = :userName", nativeQuery = true)
        Customer findCustomerByUserName(@Param("userName") String userName);
}
