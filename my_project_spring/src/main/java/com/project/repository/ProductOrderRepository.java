package com.project.repository;

import com.project.model.ProductOrder;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;

@Transactional
public interface ProductOrderRepository extends JpaRepository<ProductOrder, Integer> {

}
