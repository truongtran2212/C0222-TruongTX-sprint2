package com.project.dto;

import com.project.model.Category;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.*;
import java.beans.Transient;

public class ProductDto {
    private Integer id;

    @NotBlank
    @Length(max = 20)
    private String name;

    @Override
    protected void finalize() throws Throwable {
        super.finalize();
    }
    @Transient
    @Override
    public boolean equals(Object obj) {
        return super.equals(obj);
    }

    @NotBlank
    private String origin;

    @Min(1)
    private Double price;

    @Min(1)
    private Integer quantity;

    @NotBlank
    private String description;

    @NotBlank
    private String image;

    private Integer isDeleted = 0;

    @NotNull
    private Category category;

    public ProductDto() {
    }

    public ProductDto(
                      String name,
                      String origin,
                      Double price,
                      Integer quantity,
                      String description,
                      String image,
                      Integer isDeleted,
                      Category category) {

        this.name = name;
        this.origin = origin;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
        this.image = image;
        this.isDeleted = isDeleted;
        this.category = category;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Integer getDeleted() {
        return isDeleted;
    }

    public void setDeleted(Integer deleted) {
        isDeleted = deleted;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
