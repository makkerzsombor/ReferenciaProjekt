import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import {Studies} from "./pages/Studies.tsx";
import {Skills} from "./pages/Skills.tsx";
import {Technologies} from "./pages/Technologies.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/Studies"} element={<Studies/>}/>
                <Route path={"/Skills"} element={<Skills/>}/>
                <Route path={"/Technologies"} element={<Technologies/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
