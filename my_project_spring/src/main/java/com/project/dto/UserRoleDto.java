package com.project.dto;

public class UserRoleDto {
    private int id;
    private int isDeleted = 0;
    private int idRole;
    private String userName;

    public UserRoleDto() {
    }

    public UserRoleDto(int id, int isDeleted, int idRole, String userName) {
        this.id = id;
        this.isDeleted = isDeleted;
        this.idRole = idRole;
        this.userName = userName;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getIsDeleted() {
        return isDeleted;
    }

    public void setIsDeleted(int isDeleted) {
        this.isDeleted = isDeleted;
    }

    public int getIdRole() {
        return idRole;
    }

    public void setIdRole(int idRole) {
        this.idRole = idRole;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
