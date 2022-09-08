package com.project.service.impl;

import com.project.model.Product;
import com.project.service.IProductService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {
    @Override
    public List<Product> getNewProducts() {
        return null;
    }

    @Override
    public void save(Product product) {

    }

    @Override
    public Page<Product> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Product findById(String id) {
        return null;
    }
}
