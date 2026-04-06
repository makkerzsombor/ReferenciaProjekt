import {Link} from "react-router-dom";
import homeIcon from '../assets/home.png';


const Navbar = () => {
    return (
        <nav className="bg-gray-800 flex flex-col md:flex-row">
            <Link to={"/"} className="text-white px-4 py-4 hover:bg-gray-700" >
                <img src={homeIcon} alt="homeicon" className="max-h-6"/>
            </Link>
            <Link to={"/Studies"} className="text-white px-4 py-4 hover:bg-gray-700">Tanulmányok</Link>
            <Link to={"/Skills"} className="text-white px-4 py-4 hover:bg-gray-700">Készségek</Link>
            <Link to={"/Technologies"} className="text-white px-4 py-4 hover:bg-gray-700">Technológiák</Link>
            <Link to={"/WorkExperience"} className="text-white px-4 py-4 hover:bg-gray-700">Korábbi munkahelyek</Link>
            <Link to={"/AboutMe"} className="text-white px-4 py-4 hover:bg-gray-700">Rólam</Link>
        </nav>
    );
};

export default Navbar;