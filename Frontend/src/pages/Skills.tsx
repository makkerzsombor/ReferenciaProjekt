import Navbar from "../components/Navbar.tsx";
import {useEffect, useState} from "react";
import { type Skill, SkillCard } from "../components/SkillCard.tsx";

export const Skills = () =>
{
    const [skills, setSkills] = useState<Skill[]>([]); // Technologiákat tároló tömb

    // Betöltés
    const fetchSkills = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/skills');
            if (response.ok) {
                const data: Skill[] = await response.json();
                setSkills(data);
            } else {
                console.error("Nem elérhető a backend");
            }
        } catch (error) {
            console.error("Nem sikerült csatlakozni a backendhez:", error);
        }
    };

    useEffect(() => {
        fetchSkills();
    }, []);

    return(
        <>
            <Navbar/>
            <h1 className="text-gray-900 text-3xl font-bold">Készségek</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
                {skills.map((skill) => (
                    <SkillCard key={skill.id}  {...skill}/>
                ))}
            </div>
        </>
    )
}