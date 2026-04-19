package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Table(name="skill")
@Entity
@Getter
@Setter
public class Skill {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name="id", nullable = false)
    UUID id;

    @Column(name="name", nullable = false)
    String name;

    @Column(name="expertise", nullable = false)
    int expertise;

    @Column(name="description", nullable = false)
    String description;
}
