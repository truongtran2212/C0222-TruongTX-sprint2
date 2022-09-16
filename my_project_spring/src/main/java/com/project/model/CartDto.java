package com.project.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.project.model.account.AppUser;

import javax.persistence.*;
import java.util.Set;

public class CartDto {

    private Integer id;
    private Integer quantity;

    private AppUser appUser;
    private Product productSet;
}
