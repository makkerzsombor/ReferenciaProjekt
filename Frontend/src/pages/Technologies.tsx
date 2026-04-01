import Navbar from "../components/Navbar.tsx";
import {Card} from "../components/Card.tsx";
import javaicon from "../assets/java_logo.png"

export const  Technologies = () =>
{
    return(
        <>
            <Navbar/>
            <h1 className="m-2.5 ml-4 text-sky-700 text-2xl font-bold">Technológiák</h1>
            <Card title="Java" description="Java-val 2022-ben ismerkedtem, meg amikor is java programokat írtunk technikusi évben.
            Továbbá JavaFX felülelet hoztam létre és JavaSpring backend-el is foglalkoztam az akkori projektmunka keretein belül!"
                  imgUrl={javaicon} imgAlt="Java.icon"/>
        </>
    )
}