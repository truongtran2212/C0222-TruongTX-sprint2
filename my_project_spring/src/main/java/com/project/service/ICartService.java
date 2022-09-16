package com.project.service;

import com.project.model.Cart;

import java.util.List;

public interface ICartService {
    void createCart(Integer quantity, Integer userId);

    List<Cart> findAll();
}
