package com.project.repository;

import com.project.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface OrderRepository extends JpaRepository<Order, Integer> {

    @Modifying
    @Query(value = "insert into order_mart(is_deleted, quantity, product_id, transaction_id) " +
            "values (0, :quantity, :idProduct, :idTransaction)", nativeQuery = true)
    void createOrder(@Param("quantity") Integer quantity,
                     @Param("idProduct") Integer idProduct,
                     @Param("idTransaction") Integer idTransaction);

    @Query(value = "select * from order_mart where transaction_id = :idTransaction", nativeQuery = true)
    List<Order> findOrderById(@Param("idTransaction") Integer idTransaction);
}