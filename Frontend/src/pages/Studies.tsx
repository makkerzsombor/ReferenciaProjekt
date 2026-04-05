import Navbar from "../components/Navbar.tsx";
import {StudyCard} from "../components/StudyCard.tsx";

export const Studies = () => {
    return (
        <div>
            <Navbar />

            <div className="mt-12 mx-4 sm:mx-10 md:mx-20 lg:mx-24 rounded-xl">
                <div className="flex items-center gap-4 mb-16 ml-3">
                    <div className="h-12 w-2 bg-sky-500 rounded-xl"></div>
                    <h1 className="text-5xl font-bold text-slate-900 tracking-tight">
                        Tanulmányaim
                    </h1>
                </div>

                <div className="ml-4">
                    <StudyCard
                        schoolName="BMSZC Petrik Lajos Két Tanítási Nyelvű Technikum"
                        startDate="2017"
                        endDate="2023"
                        description="Szakközép iskolában végeztem, ahol nyelvi előkészítő nulladik éven vettem részt. Továbbá a technikusi plusz 1 évet is itt tettem le."
                        achievements={[
                            "Érettségi",
                            "Angol nyelvvizsga",
                            "Irodai informatikus bizonyítvány",
                            "Szoftverfejlesztő és -tesztelő informatikus oklevél"
                        ]}
                    />
                    <StudyCard
                        schoolName="Óbudai Egyetem - Neumann János Informatika kar"
                        startDate="2023"
                        endDate=""
                        description="Jelenleg 5. félévemet végzem az egyetemen. Tanár segédként is ügyködtem 1 félév erejéig."
                        achievements={[
                            "C# használata fullstack technológiáknál",
                            "Tanár segédkezés"
                        ]}
                    />
                </div>
            </div>
        </div>
    );

}