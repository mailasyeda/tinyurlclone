import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
 <nav className="flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold tracking-wider">TINYURL</h1>
        <div className="hidden md:flex space-x-6 text-m font-medium text-white">
          <a href="#" className="hover:underline">Plans</a>
          <a href="#" className="hover:underline">Features</a>
          <a href="#" className="hover:underline">Domains</a>
          <a href="#" className="hover:underline">sources</a>
        </div>
        <div className="space-x-4">
          <button className="text-sm hover:bg-white font-semibold">Log In</button>
          <button className="bg-teal-500 px-4 py-2 rounded-md text-sm hover:bg-white font-semibold">
            Sign Up
          </button>
        </div>
      </nav>
  );
}

export default Header;

