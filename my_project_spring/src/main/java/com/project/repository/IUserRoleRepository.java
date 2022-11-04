package com.project.repository;

import com.project.model.account.AppUser;
import com.project.model.account.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface IUserRoleRepository extends JpaRepository<UserRole, Integer> {
    List<UserRole> findAllByAppUser(AppUser appUser);

    @Modifying
    @Query(value = "insert into user_role (is_deleted,role_id, user_id) values (0,2, :userId)", nativeQuery = true)
    void createUserRole (@Param("userId") String userId);
}
