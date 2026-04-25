package com.example.demo.service;

import com.example.demo.dto.SkillDTO;
import com.example.demo.entity.Skill;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repository.SkillRepositoptory;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class SkillService {

    private final SkillRepositoptory repository;

    public SkillService(SkillRepositoptory repository) {this.repository = repository;}

    // READ
    public List<SkillDTO> GetAllSkills()
    {
        List<Skill> skills = repository.findAll();
        List<SkillDTO> dtos = new ArrayList<>();

        for (Skill skill : skills)
        {
            SkillDTO dto = MapToDTO(skill);
            dtos.add(dto);
        }
        return dtos;
    }

    // CREATE
    public SkillDTO CreateSkill(SkillDTO skillDTO) {
        Skill skill = new Skill();
        skill.setName(skillDTO.getName());
        skill.setExpertise(skillDTO.getExpertise());
        skill.setDescription(skillDTO.getDescription());

        return MapToDTO(skill);
    }

    // UPDATE
    public SkillDTO UpdateSkill(UUID id, SkillDTO skillDTO) {
        Optional<Skill> entity = repository.findById(skillDTO.getId());
        if (!repository.existsById(skillDTO.getId())) {
            throw new ResourceNotFoundException("Nem található készség módosítása nem lehetséges!");
        }
        Skill skillToUpdate = entity.get();

        skillToUpdate.setName(skillDTO.getName());
        skillToUpdate.setExpertise(skillDTO.getExpertise());
        skillToUpdate.setDescription(skillDTO.getDescription());
        return MapToDTO(skillToUpdate);
    }

    // Segéd fgv
    private SkillDTO MapToDTO(Skill entity) {
        return new SkillDTO(
                entity.getId(),
                entity.getName(),
                entity.getExpertise(),
                entity.getDescription()
        );
    }

}
