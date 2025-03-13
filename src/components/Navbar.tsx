import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="p-4 shadow-md bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/experience" className="hover:text-blue-500">
              Experience
            </Link>
          </li>
          <li>
            <Link to="/skills" className="hover:text-blue-500">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
