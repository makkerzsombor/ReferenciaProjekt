import Navbar from "../components/Navbar.tsx";
import {Card} from "../components/Card.tsx";
import javaicon from "../assets/java_logo.png"
import cIcon from "../assets/c-logo-icon-18.png"
import cPP from "../assets/C++-Logo.wine.png"

export const Technologies = () => {
    return (
        <>
            <Navbar/>
            <h1 className="m-2.5 ml-4 text-sky-700 text-2xl font-bold">Technológiák</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card title="Java" description="Java-val 2022-ben ismerkedtem, meg amikor is java programokat írtunk technikusi évben.
            Továbbá JavaFX felülelet hoztam létre és JavaSpring backend-el is foglalkoztam az akkori projektmunka keretein belül!"
                      imgUrl={javaicon} imgAlt="Java.icon"/>
                <Card title="C#" description="C#-al 2017-ben szakközép iskolában találkoztam először. Ebben a nyelvben írtam érettségit. Továbbá az egyetemen is a
            preferált programozási nyelv. C#-ban programoztam konzol applikációkat, WPF-et, Backendet és Mauival pedig Android alkalmazást."
                      imgUrl={cIcon} imgAlt="C#.icon"/>
                <Card title="C++" description="C++-al 2026-ban találkoztam kötelezően választható kurzus keretein belül. Egyenlőre még nem használtam sokat, de az
                alapok itt is nagyjából ugyanazok, mint a többi nyelvben."
                      imgUrl={cPP} imgAlt="C++.icon"/>
            </div>
        </>
    )
}