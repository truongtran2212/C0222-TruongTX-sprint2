package com.project.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;
import java.util.Objects;

@Entity
@Getter
@Setter
@RequiredArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private Date releaseTime;

    private Date manufactureTime;

    private String origin;

    private Double price;

    private String warrantyPeriod;

    private Integer quantity;

    @Column(columnDefinition = "double default 0")
    private Double discountPercent;

    @Column(columnDefinition = "longtext")
    private String specifications;

    @Column(columnDefinition = "longtext")
    private String description;

    @Column(columnDefinition = "text")
    private String image;

    @Column
    private Integer isDeleted = 0;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    private Category category;

    @OneToMany(mappedBy = "product")
    private List<ProductCoupon> productCouponList;

    @OneToMany(mappedBy = "product")
    @JsonIgnore
    private List<Promotion>  promotionList;

    @OneToMany(mappedBy = "product")
    @JsonIgnore
    private List<ProductOrder> productOrderList;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Product product = (Product) o;
        return id != null && Objects.equals(id, product.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
