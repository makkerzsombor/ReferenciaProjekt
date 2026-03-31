import Navbar from "../components/Navbar.tsx";
import {Card} from "../components/Card.tsx";
import javaicon from "../assets/java_logo.png"

export const  Technologies = () =>
{
    return(
        <>
            <Navbar/>
            <h1 className="m-2.5 ml-4 text-sky-700 text-2xl font-bold">Technológiák</h1>
            <Card title="Java" description="Java frontend és backend-et is használtam már!" imgUrl={javaicon} imgAlt="Java.icon"/>
        </>
    )
}