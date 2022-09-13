package com.project.repository.product;

import com.project.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface IProductRepository extends JpaRepository<Product, Integer> {

    @Query(value = "select * from product where is_deleted = 0 and name like %:name%", nativeQuery = true)
    List<Product> findAll(@Param("name") String name);

    @Query(value = "select * from product where is_deleted = 0 and name like %:name% and category_id = 1", nativeQuery = true)
    List<Product> findAllSmartPhone(@Param("name") String name);

    @Query(value = "select * from product where is_deleted = 0 and name like %:name% and category_id = 2", nativeQuery = true)
    List<Product> findAllSmartWatch(@Param("name") String name);
}
