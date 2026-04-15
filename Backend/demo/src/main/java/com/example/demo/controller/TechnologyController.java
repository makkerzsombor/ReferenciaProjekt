package com.example.demo.controller;

import com.example.demo.dto.TechnologyDTO;
import com.example.demo.service.TechnologyService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/technologies") // URL
@CrossOrigin(origins = "http://localhost:5173") // Ezen a porton lehet elérni a vite-t
public class TechnologyController {

    private final TechnologyService service;

    // Service eléréséhez kell
    public TechnologyController(TechnologyService service) {
        this.service = service;
    }

    // GET
    @GetMapping
    public ResponseEntity<List<TechnologyDTO>> getAllTechnologies()
    {
        List<TechnologyDTO> technologies = service.getAllTechnologies(); // Saját serviceben megírt GET
        return ResponseEntity.ok(technologies); // 200 "OK"
    }

    // POST
    @PostMapping
    public ResponseEntity<TechnologyDTO> createTechnology(@RequestBody TechnologyDTO dto)
    {
        TechnologyDTO savedTechnology = service.createTechnology(dto); // Saját serviceben megírt POST
        return new ResponseEntity<>(savedTechnology, HttpStatus.CREATED); // 201 "CREATED"
    }

    // PUT
    @PutMapping("/{id}")
    public ResponseEntity<TechnologyDTO> updateTechnology(@PathVariable UUID id, @RequestBody TechnologyDTO dto)
    {
        TechnologyDTO updatedTechnology = service.updateTechnology(id, dto); //Saját serviceben megírt update
        return ResponseEntity.ok(updatedTechnology); // 200 "OK"
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTechnology(@PathVariable UUID id)
    {
        service.deleteTechnology(id);
        return ResponseEntity.noContent().build(); // Üres Response
    }
}
