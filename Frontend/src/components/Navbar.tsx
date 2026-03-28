import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <Link to={"/Studies"} className="text-white p-4">Tanulmányok</Link>
            <Link to={"/Skills"} className="text-white p-4">Készségek</Link>
            <Link to={"/Technologies"} className="text-white p-4">Technológiák</Link>
            <Link to={"/Studies"} className="text-white p-4">Korábbi munkahelyek</Link>
            <Link to={"/Studies"} className="text-white p-4">Rólam</Link>
        </nav>
    );
};

export default Navbar;