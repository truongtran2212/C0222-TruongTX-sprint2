package com.project.repository.cart;

import com.project.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface CartRepository extends JpaRepository<Cart, Integer> {
    @Modifying
    @Query(value = "insert into cart (quantity, user_id) values (:quantity, :userId)", nativeQuery =true)
    void createCart(@Param("quantity") Integer quantity, @Param("userId") Integer userId);

    @Query(value = "select * from cart", nativeQuery = true)
    List<Cart> findAll();
}
