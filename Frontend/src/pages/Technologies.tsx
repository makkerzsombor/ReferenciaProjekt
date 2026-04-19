import Navbar from "../components/Navbar.tsx";
import { type Technology, TechnologyCard } from "../components/TechnologyCard.tsx";
import { TechnologyAddAndModify } from "../components/TechnologyAddAndModify.tsx"; // Itt a javított import!
import { useEffect, useState } from "react";

export const Technologies = () => {

    const [technologies, setTechnologies] = useState<Technology[]>([]); // Technologiákat tároló tömb
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingTech, setEditingTech] = useState<Technology | null>(null);

    // Betöltés
    const fetchTechnologies = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/technologies');
            if (response.ok) {
                const data: Technology[] = await response.json();
                setTechnologies(data);
            } else {
                console.error("Nem elérhető a backend");
            }
        } catch (error) {
            console.error("Nem sikerült csatlakozni a backendhez:", error);
        }
    };

    useEffect(() => {
        fetchTechnologies();
    }, []);

    // Törlés
    const handleDelete = async (id: string) => {
        if (!window.confirm("Biztosan törölni szeretnéd ezt a technológiát?")) {
            return;
        }

        try {
            const response = await fetch(`http://localhost:8080/api/technologies/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // Csak azt rakja bele a tömbbe, amelyik nem lett éppen törölve
                setTechnologies((prevTechs) => prevTechs.filter(tech => tech.id !== id));
            } else {
                alert("Hiba történt a törlés során!");
            }
        } catch (error) {
            console.error("Hiba a hálózatban:", error);
        }
    };

    // Szerkesztés
    const handleEdit = (tech: Technology) => {
        setEditingTech(tech);
        setIsModalOpen(true);
    };

    // Mentés
    const handleSave = async (techData: Partial<Technology>) => {
        const method = editingTech ? 'PUT' : 'POST';

        const url = editingTech ? `http://localhost:8080/api/technologies/${editingTech.id}`: 'http://localhost:8080/api/technologies';
        try {
            const response = await fetch(url, {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(techData)
            });

            if (response.ok) {
                fetchTechnologies(); // Frissítés
                setIsModalOpen(false); // Módosítás ablak eltüntetése
            } else {
                alert("Hiba történt a mentés során!");
            }
        } catch (error) {
            console.error("Hiba a hálózatban:", error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex justify-between items-center m-2.5 ml-4 mr-4 mt-6">
                <h1 className="text-gray-900 text-3xl font-bold">Technológiák</h1>
                <button
                    onClick={() => { setEditingTech(null); setIsModalOpen(true); }}
                    className="bg-sky-500 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded-md shadow-md transition-colors">+ Új hozzáadása</button>
            </div>
            {/* Technológiák tároló */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
                {technologies.map((tech) => (
                    <TechnologyCard key={tech.id} tech={tech} onDelete={handleDelete} onEdit={handleEdit}/>
                ))}
            </div>
            <TechnologyAddAndModify isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleSave} editingTech={editingTech}/>
        </>
    );
}