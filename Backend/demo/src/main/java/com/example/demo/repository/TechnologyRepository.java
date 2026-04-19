package com.example.demo.repository;


import com.example.demo.entity.Technology;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

// Ez fogja a kapcsolatot tartani az adatb és a backend között (Repo).
@Repository
public interface TechnologyRepository extends JpaRepository<Technology, UUID> { // <Tábla, kulcs>

}
