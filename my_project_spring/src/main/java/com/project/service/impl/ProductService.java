package com.project.service.impl;

import com.project.dto.ProductDto;
import com.project.model.Product;
import com.project.repository.product.IProductRepository;
import com.project.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
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

    @Override
    public void deleteProduct(Integer id) {
        productRepository.deleteProduct(id);
    }

    @Override
    public void createProduct(ProductDto productDto) {
        productRepository.createProduct(productDto.getDescription(),
                                        productDto.getImage(),
                                        productDto.getName(),
                                        productDto.getOrigin(),
                                        productDto.getPrice(),
                                        productDto.getQuantity(),
                                        productDto.getCategory().getId());
    }

    @Override
    public void updateProduct(ProductDto productDto) {
        productRepository.updateProduct(productDto.getDescription(),
                                productDto.getImage(),
                                productDto.getName(),
                                productDto.getOrigin(),
                                productDto.getPrice(),
                                productDto.getQuantity(),
                                productDto.getCategory().getId(),
                                productDto.getId());
    }
}
