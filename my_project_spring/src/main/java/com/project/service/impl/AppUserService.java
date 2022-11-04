package com.project.service.impl;

import com.project.dto.RegisterRequest;
import com.project.model.account.AppRole;
import com.project.model.account.UserRole;
import com.project.repository.CustomerRepository;
import com.project.repository.IAppUserRepository;
import com.project.model.account.AppUser;
import com.project.service.IAppUserService;
import com.project.service.IUserRoleService;
import com.project.util.EncrytedPasswordUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppUserService implements IAppUserService {

    @Autowired
    private IAppUserRepository appUserRepository;

    @Autowired
    private EncrytedPasswordUtils encrytedPasswordUtils;

    @Autowired
    private IUserRoleService userRoleService;

    @Override
    public AppUser findAppUserByUsername(String username) {
        return this.appUserRepository.getAppUserByUsername(username);
    }

    @Override
    public void save(AppUser appUser) {
        if (this.findAppUserByUsername(appUser.getUserName()) != null) {
            return;
        }
        appUser.setPassword(encrytedPasswordUtils.encrytePassword(appUser.getPassword()));
        this.appUserRepository.save(appUser);
        userRoleService.createUserRole(appUser.getUserName());
    }

    @Override
    public void registerUser(RegisterRequest registerRequest) {
        AppUser appUser = new AppUser();
        appUser.setUserName(registerRequest.getUsername());
        appUser.setPassword(this.encrytedPasswordUtils.encrytePassword(registerRequest.getPassword()));
        appUser.setIsDeleted(0);
        AppUser appUserDone = this.appUserRepository.save(appUser);
        AppRole appRole = new AppRole();
        appRole.setId(2);
        UserRole userRole = new UserRole();
        userRole.setAppRole(appRole);
        userRole.setAppUser(appUserDone);
        userRole.setIsDeleted(0);
        this.userRoleService.save(userRole);
    }

    @Override
    public List<AppUser> findAll() {
        return this.appUserRepository.findAll();
    }
}
