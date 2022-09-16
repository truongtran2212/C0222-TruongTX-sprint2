package com.project.controller;

import com.project.model.Cart;
import com.project.service.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CartRestController {
    @Autowired
    private ICartService cartService;

    @PostMapping("/create")
    public ResponseEntity<?> createCart(@RequestBody Cart cart) {
        if (cart == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        cartService.createCart(cart.getQuantity(), cart.getAppUser().getId());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/list")
    public ResponseEntity<List<Cart>> findAll() {
        List<Cart> cartList = cartService.findAll();
        if(cartList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(cartList,HttpStatus.OK);
    }
}
