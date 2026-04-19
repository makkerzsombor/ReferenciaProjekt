package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class SkillDTO {
    UUID id;
    String name;
    int expertise;
    String description;

    public SkillDTO() {
    }

    public SkillDTO(UUID id, String name, int expertise, String description) {
        this.id = id;
        this.name = name;
        this.expertise = expertise;
        this.description = description;
    }
}
