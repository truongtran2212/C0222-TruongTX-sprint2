package com.project.dto;

import com.project.model.Product;
import com.project.model.Transaction;

import javax.persistence.*;

public class OrderDto {

    private Integer id;

    private int isDelete = 0;

    private int quantity;

    private Transaction transactionOrder;

    private Product product;

    public OrderDto() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public int getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(int isDelete) {
        this.isDelete = isDelete;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Transaction getTransactionOrder() {
        return transactionOrder;
    }

    public void setTransactionOrder(Transaction transactionOrder) {
        this.transactionOrder = transactionOrder;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
