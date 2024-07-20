package com.prompt.crudchat.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class Employee {
    @Id
    @GeneratedValue
    private Long id;

    private String firstName;

    private String lastName;



    // Getters and setters
}
