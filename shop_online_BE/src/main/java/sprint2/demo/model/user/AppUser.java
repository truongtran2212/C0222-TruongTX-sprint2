package sprint2.demo.model.user;


import com.fasterxml.jackson.annotation.JsonIgnore;
import sprint2.demo.model.customer.Customer;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "app_user")
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "creation_date")
    private String creationDate;

    @Column(name = "is_deleted")
    private int isDelete;

    @Column(name = "password")
    private String password;

    @Column(name = "user_name")
    private String userName;

    @JsonIgnore
    @OneToMany(mappedBy = "appUser")
    private Set<UserRole> userRoles;

    @OneToOne(mappedBy = "appUser")
    private Customer customer;


}
