import Navbar from "../components/Navbar.tsx";
import {StudyCard} from "../components/StudyCard.tsx";

export const Studies = () => {
    return (
        <>
            <Navbar/>
            <h1>Tanulmányaim</h1>
            <div>
                <StudyCard schoolName="BMSZC Petrik Lajos Két Tanítási Nyelvű Technikum" startDate="2017" endDate="2023"
                           description="Szak közép iskolában végeztem, ahol nyelvi előkészítő nulladik éven vettem részt. Továbbá a technikusi plusz
                           1 évet is tettem le"
                           achievements={["Érettségi", "Angol nyelvvizsga", "Irodai informatikus bizonyítvány",
                               "Szoftverfejlesztő és -tesztelő informatikus oklevél", ]}/>
            </div>
        </>

    )
}