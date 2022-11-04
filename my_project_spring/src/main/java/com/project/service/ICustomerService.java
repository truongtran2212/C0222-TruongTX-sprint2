package com.project.service;

import com.project.model.Customer;

public interface ICustomerService {
    Customer findCustomerByUserName(String userName);

    void create(Customer customer);
}
