package com.project.service;

import com.project.dto.UserRoleDto;
import com.project.model.account.UserRole;

public interface IUserRoleService {
    void save(UserRole userRole);

    void createUserRole(String userName);
}
