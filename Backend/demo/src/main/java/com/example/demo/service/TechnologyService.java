package com.example.demo.service;

import com.example.demo.dto.TechnologyDTO;
import com.example.demo.entity.Technology;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repository.TechnologyRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

// Üzleti logikáért felelős
@Service
public class TechnologyService {

    private final TechnologyRepository repository;

    // Ezen keresztül éri el a repo-t
    public TechnologyService(TechnologyRepository repository) {
        this.repository = repository;
    }

    // READ az összes technologiára
    public List<TechnologyDTO> getAllTechnologies()
    {
        // Nyers adat lista
        List<Technology> entitiesFromDatabase = repository.findAll();

        // Lista a dto-nak
        List<TechnologyDTO> dtoList = new ArrayList<>();

        // Lista feltöltés
        for (Technology entity : entitiesFromDatabase)
        {
            // Elemet DTO-ba rakjuk
            TechnologyDTO dto = mapToDTO(entity);
            // dto-t a dto listába
            dtoList.add(dto);
        }
        return dtoList;
    }

    // CREATE út technologia létrehozása
    public TechnologyDTO createTechnology(TechnologyDTO technologyDTO)
    {
        // Érték adás DTO-ból
        Technology entity = new Technology();
        entity.setName(technologyDTO.getName());
        entity.setKnowledge(technologyDTO.getKnowledge());

        // Mentés
        return mapToDTO(repository.save(entity));
    }

    // DELETE
    public void deleteTechnology(UUID id)
    {
        repository.deleteById(id);
    }

    // UPDATE
    public TechnologyDTO updateTechnology(UUID id, TechnologyDTO dto)
    {
        Optional<Technology> entity = repository.findById(id);
        if (!repository.existsById(id))
        {
            throw new ResourceNotFoundException("Nem található technológia törlése nem lehetséges");
        }
        Technology entityToUpdate = entity.get();

        // Entity módosítás
        entityToUpdate.setName(dto.getName());
        entityToUpdate.setKnowledge(dto.getKnowledge());

        // Belső entity megváltoztatás
        return mapToDTO(repository.save(entityToUpdate));
    }

    //  Segédfüggvény: Entity -> DTO átalakítás
    private TechnologyDTO mapToDTO(Technology entity) {
        return new TechnologyDTO(
                entity.getId(),
                entity.getName(),
                entity.getKnowledge()
        );
    }
}
