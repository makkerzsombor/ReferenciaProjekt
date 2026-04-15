package com.example.demo.seeder;

import com.example.demo.entity.Technology;
import com.example.demo.repository.TechnologyRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component // ez kötelező a futtatáshoz
public class TechnologySeeder implements CommandLineRunner {

    private final TechnologyRepository repository;

    public TechnologySeeder(TechnologyRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) throws Exception
    {
        if (repository.count() == 0) {

            Technology tech1 = new Technology();
            tech1.setName("C#");
            tech1.setKnowledge(9);

            Technology tech2 = new Technology();
            tech2.setName("Java");
            tech2.setKnowledge(8);

            Technology tech3 = new Technology();
            tech3.setName("SQL");
            tech3.setKnowledge(7);

            Technology tech4 = new Technology();
            tech4.setName("Python");
            tech4.setKnowledge(5);

            repository.saveAll(List.of(tech1, tech2, tech3, tech4));

            System.out.println("Sikeresen technológia Seedelés!");

        } else {
            System.out.println("Az adatbázis már tartalmaz adatokat, seedelés kihagyva.");
        }
    }
}
