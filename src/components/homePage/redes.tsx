import logo from '../../img/isotipoLBree.png';
const SocialMediaSection = () => {
  const socialLinks = [
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@morangohealthy?_t=ZS-8z2YCw1nRQ7&_r=1',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      color: 'hover:bg-black',
      bgColor: 'bg-black'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/people/Morango/61565115062325/',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: 'hover:bg-blue-600',
      bgColor: 'bg-blue-600'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/morango.healthy/',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500',
      bgColor: 'bg-gradient-to-r from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="py-16 px-4 bg-[#005120] text-[#faf4f8]">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Síguenos en:
        </h2>

        {/* Mockup del teléfono con imagen */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            {/* Marco del teléfono */}
            <div className="bg-gray-100 rounded-3xl p-2 shadow-2xl max-w-xs mx-auto">
              {/* Barra superior del teléfono */}
              <div className="bg-white rounded-t-2xl px-4 py-2 flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="w-16 h-2 bg-gray-300 rounded"></div>
                </div>
                <div className="text-xs text-gray-500">•••</div>
              </div>
              
              {/* Contenido de la imagen */}
              <div className="bg-white px-4 pb-4">
                <div className="aspect-square bg-gradient-to-br from-orange-200 to-purple-200 rounded-2xl overflow-hidden relative">
                  {/* Simulación de la imagen del bowl */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-300 via-yellow-200 to-purple-300 opacity-80"></div>
                  <div className="absolute top-4 left-4 w-8 h-8 bg-red-400 rounded-full opacity-70"></div>
                  <div className="absolute top-6 right-6 w-6 h-6 bg-purple-600 rounded-full opacity-80"></div>
                  <div className="absolute bottom-6 left-6 w-10 h-4 bg-yellow-300 rounded-full opacity-60"></div>
                  <div className="absolute bottom-4 right-4 w-12 h-3 bg-orange-400 rounded-full opacity-70"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 bg-white rounded-full opacity-90 flex items-center justify-center">
                      {/* <div className="text-2xl">🥣</div> */}
                      <img src={logo} alt="" className="w-12 " />

                    </div>
                  </div>
                </div>
                
                {/* Indicadores inferiores */}
                <div className="flex justify-center mt-4 space-x-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enlaces de redes sociales */}
        <div className="flex justify-center items-center space-x-6 md:space-x-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              className="group relative"
              aria-label={`Síguenos en ${social.name}`}
            >
              {/* Ícono principal */}
              <div className={`w-14 h-14 md:w-16 md:h-16 ${social.bgColor} rounded-full flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}>
                {social.icon}
              </div>
              
              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="bg-black text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                  {social.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Texto adicional */}
        {/* <p className="mt-8 text-lg text-green-100">
          ¡Únete a nuestra comunidad y descubre recetas saludables todos los días!
        </p> */}
      </div>
    </section>
  );
};

export default SocialMediaSection;