package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class TechnologyDTO {

    UUID id;
    String name;
    int knowledge;

    // Üres konstruktor
    public TechnologyDTO() {}

    public TechnologyDTO(UUID id, String name, int knowledge) {
        this.id = id;
        this.name = name;
        this.knowledge = knowledge;
    }
}
