package com.project.model;


import javax.persistence.*;

@Entity(name = "order_mart")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "is_deleted")
    private int isDelete = 0;

    @Column(name = "quantity")
    private int quantity;

    @ManyToOne
    @JoinColumn(name = "transaction_id", referencedColumnName = "id")
    private Transaction transactionOrder;

    @ManyToOne
    @JoinColumn(name = "product_id", referencedColumnName = "id")
    private Product product;

    public Order() {
    }

    public Order(Integer id, int isDelete, int quantity, Transaction transactionOrder, Product product) {
        this.id = id;
        this.isDelete = isDelete;
        this.quantity = quantity;
        this.transactionOrder = transactionOrder;
        this.product = product;
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
