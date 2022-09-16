package com.project.service.impl;

import com.project.model.Cart;
import com.project.repository.cart.CartRepository;
import com.project.service.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService implements ICartService {
    @Autowired
    private CartRepository cartRepository;

    @Override
    public void createCart(Integer quantity, Integer userId) {
        cartRepository.createCart(quantity,userId);
    }

    @Override
    public List<Cart> findAll() {
        return cartRepository.findAll();
    }
}
