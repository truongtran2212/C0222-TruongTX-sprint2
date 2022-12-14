package com.project.repository;

import com.project.model.Transaction;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface TransactionRepository extends JpaRepository<Transaction, Integer> {
    @Modifying
    @Query(value = "insert into `transaction` (payment, payment_method, start_date, customer_id) " +
            "values (:payment, :paymentMethod, :startDate, :idCustomer)", nativeQuery = true)
    void createTransaction(@Param("payment") Integer payment,
                           @Param("paymentMethod") String paymentMethod,
                           @Param("startDate") String startDate,
                           @Param("idCustomer") Integer idCustomer);

    @Query(value = "select * from `transaction` where customer_id = :customerId", nativeQuery = true)
    Page<Transaction> findAllByCustomerName(Pageable pageable, @Param("customerId") Integer customerId);

    @Query(value = "select * from `transaction`", nativeQuery = true)
    List<Transaction> findAllAllTransaction();
}
