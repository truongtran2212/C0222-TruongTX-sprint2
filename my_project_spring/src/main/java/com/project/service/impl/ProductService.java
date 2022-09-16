package com.project.service.impl;

import com.project.model.Product;
import com.project.repository.product.IProductRepository;
import com.project.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository productRepository;

    @Override
    public List<Product> findAll(String name, String idCategory) {
        return productRepository.findAll(name,  idCategory);
    }

    @Override
    public List<Product> findAllSmartPhone(String name) {
        return productRepository.findAllSmartPhone(name);
    }

    @Override
    public List<Product> findAllSmartWatch(String name) {
        return productRepository.findAllSmartWatch(name);
    }

    @Override
    public void save(Product product) {

    }

    @Override
    public Page<Product> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Product findById(Integer id) {
        return productRepository.findById(id).orElse(null);
    }
}
