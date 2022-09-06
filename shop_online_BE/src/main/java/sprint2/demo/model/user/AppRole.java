package sprint2.demo.model.user;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "app_role")
public class AppRole {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, unique = true)
    private String roleName;

    @OneToMany(mappedBy = "appRole")
    private Set<UserRole> userRoles;

    @Column(columnDefinition = "bit(1) default 0")
    private Boolean isDeleted;
}
