package com.project.controller;

import com.project.model.Product;
import com.project.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProductController {
    @Autowired
    private IProductService productService;

    @GetMapping("/list")
    public ResponseEntity<List<Product>> findAll(@RequestParam(defaultValue = "") String name) {
        List<Product> productList = productService.findAll(name);

        if(productList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productList, HttpStatus.OK);
    }

    @GetMapping("/smartPhone")
    public ResponseEntity<List<Product>> findAllSmartPhone(@RequestParam String name) {
        List<Product> productList = productService.findAllSmartPhone(name);

        if(productList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(productList, HttpStatus.OK);
    }

    @GetMapping("/smartWatch")
    public ResponseEntity<List<Product>> findAllSmartWatch(@RequestParam String name) {
        List<Product> productList = productService.findAllSmartWatch(name);

        if(productList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(productList, HttpStatus.OK);
    }
}
