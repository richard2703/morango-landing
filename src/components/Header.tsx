import React, { useState } from "react";
import Logo from '../img/logoPblc.png'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-screen shadow-md relative "  >
      <div className="w-full px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="cursor-pointer">
          <img 
            src={Logo} 
            className="h-8 w-auto logo" 
            alt="Morango logo" onClick={() => (window.location.href = "/")}
          />
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-white font-medium text-lg">
            <li className="cursor-pointer hover:text-green-200 transition-colors duration-200 " >
              menú
            </li>
            <li className="cursor-pointer hover:text-green-200 transition-colors duration-200" onClick={() => window.open('https://maps.app.goo.gl/s9xJYemKGUmayEgUA', '_blank')}>
              ubicación
            </li>
            <li className="cursor-pointer hover:text-green-200 transition-colors duration-200" onClick={() => (window.location.href = "/franquicias")}>
              franquicias
            </li>
          </ul>
        </nav>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Abrir menú"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-green-700 md:hidden z-50">
            <nav className="px-4 py-4">
              <ul className="space-y-4">
                <li className="cursor-pointer hover:text-green-200 transition-colors duration-200 text-white font-medium text-lg">
                  menú
                </li>
                <li className="cursor-pointer hover:text-green-200 transition-colors duration-200 text-white font-medium text-lg" onClick={() => window.open('https://maps.app.goo.gl/s9xJYemKGUmayEgUA', '_blank')}>
                  ubicación
                </li>
                <li className="cursor-pointer hover:text-green-200 transition-colors duration-200 text-white font-medium text-lg">
                  franquicias
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;