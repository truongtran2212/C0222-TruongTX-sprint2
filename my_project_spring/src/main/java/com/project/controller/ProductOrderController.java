package com.project.controller;

import com.project.model.ProductOrder;
import com.project.service.IProductOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/productOrder")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProductOrderController {
    @Autowired
    private IProductOrderService productOrderService;

    @GetMapping("/list")
    public ResponseEntity<List<ProductOrder>> getAllProductOrder() {
        List<ProductOrder> productOrderList = productOrderService.findAll();

        if (productOrderList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productOrderList, HttpStatus.OK);

    }

    @PostMapping("/create")
    public ResponseEntity<?> createProductOrder(@RequestBody ProductOrder productOrder) {
        productOrderService.create(productOrder);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
