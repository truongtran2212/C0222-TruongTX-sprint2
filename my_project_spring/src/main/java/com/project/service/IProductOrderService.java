package com.project.service;

import com.project.model.ProductOrder;

import java.util.List;

public interface IProductOrderService {
    List<ProductOrder> findAll();

    void create(ProductOrder productOrder);
}
