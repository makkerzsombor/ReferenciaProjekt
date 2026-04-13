package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Table(name="technology")
@Entity
@Setter
@Getter
public class Technology {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name="id", nullable = false)
    UUID id;

    @Column(name="name", nullable = false)
    String name;

    @Column(name="knowledge", nullable = false)
    int knowledge;
}
