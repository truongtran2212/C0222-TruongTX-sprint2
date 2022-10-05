package com.project.service;

import com.project.dto.ProductDto;
import com.project.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IProductService {
    List<Product> findAll(String name,String idCategory);
    List<Product> findAllSmartPhone(String name);
    List<Product> findAllSmartWatch(String name);

    void save(Product product);

    Page<Product> findAll(Pageable pageable);

    Product findById(Integer id);

    void deleteProduct(Integer id);

    void createProduct(ProductDto productDto);

    void updateProduct(ProductDto productDto);
}
