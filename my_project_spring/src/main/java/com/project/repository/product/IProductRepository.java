package com.project.repository.product;

import com.project.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface IProductRepository extends JpaRepository<Product, Integer> {

    @Query(value = "select * from product where is_deleted = 0 and name like %:name% and category_id like %:idCategory% order by id desc", nativeQuery = true)
    List<Product> findAll(@Param("name") String name, @Param("idCategory") String idCategory);

    @Query(value = "select * from product where is_deleted = 0 and name like %:name% and category_id = 1", nativeQuery = true)
    List<Product> findAllSmartPhone(@Param("name") String name);

    @Query(value = "select * from product where is_deleted = 0 and name like %:name% and category_id = 2", nativeQuery = true)
    List<Product> findAllSmartWatch(@Param("name") String name);

    @Modifying
    @Query(value = "update product set is_deleted = 1 where id = :id", nativeQuery = true)
    void deleteProduct(@Param("id") Integer id);

    @Modifying
    @Query(value = "insert into product (description, image, `name`, origin, price, quantity, category_id, is_deleted) " +
            "values (:description, :image, :name,:origin, :price, :quantity, :categoryId, 0)", nativeQuery = true)
    void createProduct(@Param("description") String description,
                       @Param("image") String image,
                       @Param("name") String name,
                       @Param("origin") String origin,
                       @Param("price") Double price,
                       @Param("quantity") Integer quantity,
                       @Param("categoryId") Integer categoryId);

    @Modifying
    @Query(value = "update product set description = :description, image = :image , `name` = :name, origin = :origin,price = :price, quantity = :quantity, category_id = :idCategory, is_deleted = 0 where id = :id", nativeQuery = true)
    void updateProduct(@Param("description") String description,
                @Param("image") String image,
                @Param("name") String name,
                @Param("origin") String origin,
                @Param("price") Double price,
                @Param("quantity") Integer quantity,
                @Param("idCategory") Integer idCategory,
                @Param("id") int id);
}
