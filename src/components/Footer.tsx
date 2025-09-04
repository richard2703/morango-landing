import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-[#005120] p-4 mt-6">
      <div className="max-w-7xl mx-auto text-center">
        <p>© {new Date().getFullYear()} Morango. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;