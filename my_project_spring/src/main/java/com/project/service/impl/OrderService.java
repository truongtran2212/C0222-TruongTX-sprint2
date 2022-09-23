package com.project.service.impl;

import com.project.dto.OrderDto;
import com.project.model.Order;
import com.project.repository.OrderRepository;
import com.project.service.IOrderMartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class OrderService implements IOrderMartService {
    @Autowired
    private OrderRepository orderRepository;

    @Override
    public List<Order> findAll() {
        return orderRepository.findAll();
    }

    @Override
    public void createOrder(OrderDto orderDto) {
        orderRepository.createOrder(orderDto.getQuantity(),orderDto.getProduct().getId(),orderDto.getTransactionOrder().getId());
    }

    @Override
    public List<Order> findOrderById(Integer id) {
        return orderRepository.findOrderById(id);
    }
}
