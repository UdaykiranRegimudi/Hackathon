import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-black text-white p-4 flex justify-between">
    <h1 className="font-bold text-xl">Hackathon</h1>
    <div className="space-x-4">
      <Link to="/" className="hover:text-gray-400">Home</Link>
      <Link to="/about" className="hover:text-gray-400">About</Link>
      <Link to="/dashboard" className="hover:text-gray-400">Dashboard</Link>
    </div>
  </nav>
);

export default Navbar;
