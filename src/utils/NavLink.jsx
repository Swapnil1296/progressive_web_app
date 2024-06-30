import { Link } from "react-router-dom";

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-white bg-gray-500 hover:bg-white hover:text-black rounded-full px-6 py-2 text-sm font-medium transition duration-250"
  >
    {children}
  </Link>
);

// Usage
<ul className="flex justify-between w-full h-full p-4 text-center ">
  <NavLink to="/">Home</NavLink>
  <NavLink to="/product-list">Products</NavLink>
  <NavLink to="/cart">My Cart</NavLink>
  <NavLink to="/wishlist">Wishlist</NavLink>
  <li className="text-white bg-gray-500 hover:bg-white hover:text-black rounded-full px-6 py-2 text-sm font-medium transition duration-250">
    About us
  </li>
</ul>;
