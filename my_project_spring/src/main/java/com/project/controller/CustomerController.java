package com.project.controller;
import com.project.model.Customer;
import com.project.model.Order;
import com.project.repository.CustomerRepository;
import com.project.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customer")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CustomerController {
    @Autowired
    private ICustomerService customerService;

    @Autowired
    private CustomerRepository customerRepository;

    @GetMapping("")
    public ResponseEntity<Customer> findCustomerByUserName(@RequestParam String userName) {
        Customer customer = customerService.findCustomerByUserName(userName);
        if(customer == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(customer, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> createCustomer(@RequestBody Customer customer) {
        customerService.create(customer);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/list")
    public ResponseEntity<List<Customer>> findAll() {
        return new ResponseEntity<>(customerRepository.findAll(), HttpStatus.OK);
    }
}
