import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

interface NavItemProps {
  to: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `inline-flex px-6 py-3 rounded-lg shadow-md transition-all font-semibold ${
          isActive
            ? "bg-red-500 text-white"
            : "bg-white text-gray-900 border border-gray-300 hover:bg-red-500 hover:text-white"
        }`
      }
    >
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        {label}
      </motion.button>
    </NavLink>
  );
};

export default NavItem;
