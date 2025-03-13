import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50 py-6 flex flex-col items-center">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Welcome</h2>
      <div className="flex gap-6 px-4">
        {" "}
        {/* spacing between buttons */}
        <NavItem to="/" label="Home" />
        <NavItem to="/experience" label="Experience & Projects" />
        <NavItem to="/skills" label="Skills" />
        <NavItem to="/contact" label="Contact" />
      </div>
    </nav>
  );
};

export default Navbar;
