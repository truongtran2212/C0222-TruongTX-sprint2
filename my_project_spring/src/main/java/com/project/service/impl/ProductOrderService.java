package com.project.service.impl;

import com.project.model.ProductOrder;
import com.project.repository.ProductOrderRepository;
import com.project.service.IProductOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductOrderService implements IProductOrderService {
    @Autowired
    private ProductOrderRepository productOrderRepository;

    @Override
    public List<ProductOrder> findAll() {
        return productOrderRepository.findAll();
    }

    @Override
    public void create(ProductOrder productOrder) {
        productOrderRepository.save(productOrder);
    }
}
