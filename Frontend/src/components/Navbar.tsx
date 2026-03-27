import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <Link to={"/Tanulmanyok"} className="text-white p-4">Tanulmányok</Link>
            <Link to={"/Tanulmanyok"} className="text-white p-4">Készségek</Link>
            <Link to={"/Tanulmanyok"} className="text-white p-4">Skills</Link>
            <Link to={"/Tanulmanyok"} className="text-white p-4">Korábbi munkahelyek</Link>
            <Link to={"/Tanulmanyok"} className="text-white p-4">Rólam</Link>
        </nav>
    );
};

export default Navbar;