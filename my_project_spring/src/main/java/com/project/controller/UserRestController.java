package com.project.controller;
import com.project.model.account.AppUser;
import com.project.repository.IAppUserRepository;
import com.project.service.IAppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class UserRestController {

    @Autowired
    private IAppUserRepository appUserRepository;

    @Autowired
    private IAppUserService appUserService;

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/users")
    public ResponseEntity<List<AppUser>> getAllUser() {
        List<AppUser> appUsers = this.appUserRepository.findAll();
        return new ResponseEntity<>(appUsers, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> addNewUser(@RequestBody AppUser appUser) throws Exception {
        appUserService.save(appUser);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
