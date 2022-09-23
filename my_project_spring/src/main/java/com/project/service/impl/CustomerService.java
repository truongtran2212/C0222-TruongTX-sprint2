package com.project.service.impl;

import com.project.model.Customer;
import com.project.repository.CustomerRepository;
import com.project.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService implements ICustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public Customer findCustomerByUserName(String userName) {
        return customerRepository.findCustomerByUserName(userName);
    }
}
