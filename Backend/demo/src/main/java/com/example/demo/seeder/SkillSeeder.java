package com.example.demo.seeder;

import com.example.demo.entity.Skill;
import com.example.demo.entity.Technology;
import com.example.demo.repository.SkillRepositoptory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class SkillSeeder implements CommandLineRunner {

    private final SkillRepositoptory repository;

    public SkillSeeder(SkillRepositoptory repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) throws Exception
    {
        if (repository.count() == 0) {

            Skill skill1 = new Skill();
            skill1.setName("Monotonítás tűrés");
            skill1.setExpertise(7);
            skill1.setDescription("A monotonítás számomra nem jelent komolyabb problémát.");

            Skill skill2 = new Skill();
            skill2.setName("Csapatmunka");
            skill2.setExpertise(8);
            skill2.setDescription("Szeretek csapatban dolgozni. Mindig igyekszek másokhoz alkalmazkodni");

            Skill skill3 = new Skill();
            skill3.setName("Probléma megoldás");
            skill3.setExpertise(8);
            skill3.setDescription("Szeretek prolémákat megoldani és elgondolkodni, hogy milyen egyéb módokon tehetem ezt meg.");

            Skill skill4 = new Skill();
            skill4.setName("Segítőkészség");
            skill4.setExpertise(9);
            skill4.setDescription("Mindig probálok mindenkinek minden kérdésére a legjobb tudásom szerint válaszolni, " +
                    "akkor is ha valaminek egy kicsit jobban is utána kell, hogy járjak");

            repository.saveAll(List.of(skill1, skill2, skill3, skill4));

            System.out.println("Sikeresen skill Seedelés!");

        } else {
            System.out.println("Az adatbázis már tartalmaz skill adatokat, seedelés kihagyva.");
        }
    }
}
