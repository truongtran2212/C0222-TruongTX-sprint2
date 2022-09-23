package com.project.dto;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.project.model.Customer;
import com.project.model.Order;

import javax.persistence.*;
import java.util.List;

public class TransactionDto {

    private Integer id;

    private Customer customer;

    private String startDate;

    private Integer payment;

    private String paymentMethod;

    public TransactionDto() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public Integer getPayment() {
        return payment;
    }

    public void setPayment(Integer payment) {
        this.payment = payment;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }
}
