package com.project.controller;

import com.project.dto.OrderDto;
import com.project.dto.TransactionDto;
import com.project.model.Order;
import com.project.service.IOrderMartService;
import com.project.service.ITransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class OrderController {
    @Autowired
    private IOrderMartService orderMartService;

    @GetMapping("/list")
    public ResponseEntity<List<Order>> showListOrder() {
        List<Order> orderList = orderMartService.findAll();
        if(orderList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(orderList,HttpStatus.OK);
    }

    @PostMapping("/createOrder")
    public ResponseEntity<?> createOrder(@RequestBody OrderDto orderDto) {
        orderMartService.createOrder(orderDto);

        return new ResponseEntity<>(HttpStatus.CREATED);

    }

    @GetMapping("/{id}")
    public ResponseEntity<List<Order>> findOrderById(@PathVariable Integer id){
        List<Order> orderList = orderMartService.findOrderById(id);
        return new ResponseEntity<>(orderList, HttpStatus.OK);
    }
}
