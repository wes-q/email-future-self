import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    function toggleDarkMode() {
        document.documentElement.classList.toggle("dark");
    }

    return (
        <div className="flex items-center justify-between bg-primary h-16 px-6">
            <Link className="flex items-center" to="/">
                <span className="text-secondary">Logo Here</span>
            </Link>

            <div className="flex gap-4">
                <button className="text-white bg-primary border border-white rounded-md px-3 py-2 font-bold hover:ring-2 hover:ring-secondary">Sign In</button>
                <button className="text-primary bg-white rounded-md px-3 py-2 font-bold hover:ring-2 hover:ring-secondary">Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;
