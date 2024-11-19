import React from 'react';
import { FaTasks } from 'react-icons/fa'; // Importing a tasks icon from react-icons

const Header = () => {
  return (
    <header className="bg-gradient-to-br from-[#164e63] via-[#082f49] to-gray-600 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Title */}
        <h1 className="text-xl font-bold sm:text-2xl md:text-3xl text-gray-100">Todo App</h1>

        {/* Icon */}
        <FaTasks className="text-2xl sm:text-3xl md:text-4xl text-gray-100 hover:text-violet-700 transition duration-300" />
      </div>
    </header>
  );
};

export default Header;
