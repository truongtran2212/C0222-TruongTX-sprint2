package com.project.controller;

import com.project.dto.OrderDto;
import com.project.dto.StatisticDto;
import com.project.model.Order;
import com.project.repository.OrderRepository;
import com.project.service.IOrderMartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/order")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class OrderController {
    @Autowired
    private IOrderMartService orderMartService;

    @Autowired
    private OrderRepository orderRepository;

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

    @GetMapping("/statistics/week")
    public ResponseEntity<List<StatisticDto>> getAllStatisticsWeek() {
        List<StatisticDto> statisticsDTOS = orderRepository.findAllStatisticsWeek();
        if (statisticsDTOS.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        } else {
            return new ResponseEntity<>(statisticsDTOS, HttpStatus.OK);
        }
    }
    @GetMapping("/statistics/month")
    public ResponseEntity<List<StatisticDto>> getAllStatisticsMonth() {
        List<StatisticDto> statisticsDTOS = orderRepository.findAllStatisticsMonth();
        if (statisticsDTOS.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(statisticsDTOS, HttpStatus.OK);
        }
    }
    @GetMapping("/statistics/year")
    public ResponseEntity<List<StatisticDto>> getAllStatisticsYear() {
        List<StatisticDto> statisticsDTOS = orderRepository.findAllStatisticsYear();
        if (statisticsDTOS.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        } else {
            return new ResponseEntity<>(statisticsDTOS, HttpStatus.OK);
        }
    }
}
