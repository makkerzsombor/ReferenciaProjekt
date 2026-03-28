import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import {Studies} from "./pages/Studies.tsx";
import {Skills} from "./pages/Skills.tsx";
import {Technologies} from "./pages/Technologies.tsx";
import {AboutMe} from "./pages/AboutMe.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/Studies"} element={<Studies/>}/>
                <Route path={"/Skills"} element={<Skills/>}/>
                <Route path={"/Technologies"} element={<Technologies/>}/>
                <Route path={"/AboutMe"} element={<AboutMe/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
