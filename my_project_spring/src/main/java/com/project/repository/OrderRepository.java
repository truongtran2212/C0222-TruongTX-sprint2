package com.project.repository;

import com.project.dto.StatisticDto;
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

    @Query(value = " select sum(os.quantity) as quantity, p.name as name, t.start_date as creationDate from order_mart os " +
            " left join `transaction` t on t.id = os.transaction_id " +
            " left join product p on p.id = os.product_id " +
            " left join customer c on c.id = t.customer_id " +
            " group by os.product_id " +
            " having t.start_date >= current_date - interval 7 day and t.start_date < current_date - interval 1 day " +
            " order by sum(quantity) desc" +
            " limit 10 ", nativeQuery = true)
    List<StatisticDto> findAllStatisticsWeek();

    @Query(value = " select sum(os.quantity) as quantity, p.name as name, t.start_date as creationDate from order_mart os " +
            " left join `transaction` t on t.id = os.transaction_id " +
            " left join product p on p.id = os.product_id " +
            " left join customer c on c.id = t.customer_id " +
            " group by os.product_id " +
            " having t.start_date >= current_date - interval 30 day and t.start_date < current_date - interval 1 day " +
            " order by sum(quantity) desc" +
            " limit 10 ", nativeQuery = true)
    List<StatisticDto> findAllStatisticsMonth();

    @Query(value = " select sum(os.quantity) as quantity, p.name as name, t.start_date as creationDate from order_mart os " +
            " left join `transaction` t on t.id = os.transaction_id " +
            " left join product p on p.id = os.product_id " +
            " left join customer c on c.id = t.customer_id " +
            " group by os.product_id " +
            " having t.start_date >= current_date - interval 365 day and t.start_date < current_date - interval 1 day " +
            " order by sum(quantity) desc" +
            " limit 10 ", nativeQuery = true)
    List<StatisticDto> findAllStatisticsYear();


//    @Query(value = " select sum(os.quantity) as quantity, c.name as name, c.birthday as birthday , c.phone as phone, c.email as email from order_service os " +
//            " left join bill b on b.id = os.bill_id " +
//            " left join product p on p.id = os.product_id " +
//            " left join customer c on c.id = os.customer_id " +
//            " group by os.customer_id  " +
//            " order by sum(quantity) desc " +
//            " limit 10 ", nativeQuery = true)
//    List<StatisticsCustomerDTO> findAllStatisticsCustomer();
}