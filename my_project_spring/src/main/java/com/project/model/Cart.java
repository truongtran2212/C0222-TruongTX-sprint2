package com.project.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.project.model.account.AppUser;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "cart")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer quantity;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    @JsonIgnore
    private AppUser appUser;

    @OneToMany(mappedBy = "cart")
    @JsonIgnore
    private List<ProductOrder> productOrderList;

    public Cart() {
    }

    public Cart(Integer id, Integer quantity, AppUser appUser, List<ProductOrder> productOrderList) {
        this.id = id;
        this.quantity = quantity;
        this.appUser = appUser;
        this.productOrderList = productOrderList;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public AppUser getAppUser() {
        return appUser;
    }

    public void setAppUser(AppUser appUser) {
        this.appUser = appUser;
    }

    public List<ProductOrder> getProductOrderList() {
        return productOrderList;
    }

    public void setProductOrderList(List<ProductOrder> productOrderList) {
        this.productOrderList = productOrderList;
    }
}
