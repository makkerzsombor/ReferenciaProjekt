import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import {Tanulmanyok} from "./pages/Tanulmanyok.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/Tanulmanyok"} element={<Tanulmanyok/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
