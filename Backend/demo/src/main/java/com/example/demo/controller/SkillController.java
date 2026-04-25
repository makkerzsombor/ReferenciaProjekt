package com.example.demo.controller;

import com.example.demo.dto.SkillDTO;
import com.example.demo.service.SkillService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/skills") // URL
@CrossOrigin(origins = "http://localhost:5173") // Ezen a porton lehet elérni a vite-t
public class SkillController {

    private final SkillService service;

    public SkillController(SkillService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<SkillDTO>> getAllSkills() {
        List<SkillDTO> skills = service.GetAllSkills();
        return new ResponseEntity<>(skills, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<SkillDTO> CreateSkill(@RequestBody SkillDTO dto) {
        SkillDTO createdSkill = service.CreateSkill(dto);
        return new ResponseEntity<>(createdSkill, HttpStatus.CREATED);
    }

    @PutMapping("/id")
    public ResponseEntity<SkillDTO> UpdateSkill(@PathVariable UUID id, @RequestBody SkillDTO dto) {
        SkillDTO updatedSkill = service.UpdateSkill(id, dto);
        return new ResponseEntity<>(updatedSkill, HttpStatus.OK);
    }
}