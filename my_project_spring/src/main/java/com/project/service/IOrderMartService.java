package com.project.service;

import com.project.dto.OrderDto;
import com.project.model.Order;

import java.util.List;

public interface IOrderMartService {
    List<Order> findAll();

    void createOrder(OrderDto orderDto);

  List<Order> findOrderById(Integer id);
}
