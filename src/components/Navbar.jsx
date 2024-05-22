import { FaGithubAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
        <div className="container mx-auto">
            <div className="flex-none px-2 mx-2">
                <FaGithubAlt className="inline pr-2 text-3xl" />
                <Link to="/" className="text-lg font-bold align-middle">
                {title}
                </Link>
            </div>
            <div className="flex-1 px-2 mx-2">
                <div className="flex justify-end">
                    <Link to="/" className="btn btn-sm">
                    Home
                    </Link>
                    <Link to="/about" className="btn btn-ghost btn-sm text-primary">
                    About
                    </Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

Navbar.defaultProps = {
    title: "Github Search"
}

Navbar.propTypes = {
    title: propTypes.string,
}

export default Navbar