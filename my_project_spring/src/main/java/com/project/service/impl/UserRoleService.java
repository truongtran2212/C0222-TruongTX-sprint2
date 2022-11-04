package com.project.service.impl;

import com.project.dto.UserRoleDto;
import com.project.model.account.UserRole;
import com.project.repository.IUserRoleRepository;
import com.project.service.IUserRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserRoleService implements IUserRoleService {

    @Autowired
    private IUserRoleRepository userRoleRepository;

    @Override
    public void save(UserRole userRole) {
        this.userRoleRepository.save(userRole);
    }

    @Override
    public void createUserRole(String userName) {
        userRoleRepository.createUserRole(userName);
    }


}
