import  { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Datos de las categorías del menú (duplicamos y agregamos más)
const menuCategories = [
  {
    id: 1,
    name: 'smoothies',
    bgColor: '#6e3766',
    image: '/api/placeholder/200/200', // Reemplaza con smoothies
    decorations: [
      { type: 'image', src: '/api/placeholder/64/64', position: 'top-2 left-46', alt: 'd7aver' },
      { type: 'image', src: '/api/placeholder/72/72', position: 'bottom-4 left-4', alt: 'd6aver' }
    ]
  },
  {
    id: 2,
    name: 'jugos & bebidas',
    bgColor: '#c4e0f2',
    image: '/api/placeholder/200/200', // Reemplaza con detox
    decorations: [
      { type: 'svg', position: 'top-8 right-8', color: 'text-pink-500 opacity-60', size: 'w-8 h-8' },
      { type: 'svg', position: 'bottom-12 right-12', color: 'text-pink-500 opacity-40', size: 'w-6 h-6' },
      { type: 'svg', position: 'bottom-16 right-6', color: 'text-pink-500 opacity-70', size: 'w-4 h-4' }
    ]
  },
  {
    id: 3,
    name: 'acaí bowl',
    bgColor: '#da2f6e',
    image: '/api/placeholder/200/200', // Reemplaza con nutella
    decorations: [
      { type: 'image', src: '/api/placeholder/40/40', position: 'bottom-4 left-4', alt: 'd5bblue' }
    ]
  },
  {
    id: 4,
    name: 'protein bowls',
    bgColor: '#4a9b8e',
    image: '/api/placeholder/200/200',
    decorations: [
      { type: 'image', src: '/api/placeholder/50/50', position: 'top-4 right-4', alt: 'decoration' }
    ]
  },
  {
    id: 5,
    name: 'ensaladas',
    bgColor: '#7cb342',
    image: '/api/placeholder/200/200',
    decorations: [
      { type: 'svg', position: 'top-6 left-6', color: 'text-white opacity-50', size: 'w-6 h-6' }
    ]
  },
  {
    id: 6,
    name: 'snacks saludables',
    bgColor: '#ff8a65',
    image: '/api/placeholder/200/200',
    decorations: [
      { type: 'image', src: '/api/placeholder/45/45', position: 'bottom-6 right-6', alt: 'decoration' }
    ]
  }
];

const MenuCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  // Función para ir al siguiente slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(menuCategories.length / 3));
  };

  // Función para ir al slide anterior
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(menuCategories.length / 3)) % Math.ceil(menuCategories.length / 3));
  };

  // Función para ir a un slide específico
  const goToSlide = (newIndex: number) => {
    setCurrentIndex(newIndex);
  };

  // SVG Circle component para las decoraciones
  // const CircleSVG = () => (
  //   <svg viewBox="0 0 24 24" fill="currentColor">
  //     <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
  //   </svg>
  // );

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Carrusel Container */}
      <div className="relative overflow-hidden">
        <div 
          ref={carouselRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {/* Dividimos las categorías en grupos de 3 */}
          {Array.from({ length: Math.ceil(menuCategories.length / 3) }, (_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className="grid md:grid-cols-3 gap-0">
                {menuCategories
                  .slice(slideIndex * 3, slideIndex * 3 + 3)
                  .map((category) => (
                    <div 
                      key={category.id}
                      className="relative flex flex-col items-center justify-center p-8 group cursor-pointer overflow-hidden aspect-square"
                      style={{ backgroundColor: category.bgColor }}
                    >
                      {/* Decoraciones de fondo */}
                      {/* {category.decorations.map((decoration, index) => (
                        // <div 
                        //   key={index} 
                        //   className={`absolute ${decoration.position} ${decoration.type === 'svg' ? decoration.color + ' ' + decoration.size : 'text-lime-400'}`}
                        // >
                        //   {decoration.type === 'svg' ? (
                        //     <CircleSVG />
                        //   ) : (
                        //     <img src={decoration.src} alt={decoration.alt} className="w-full h-full object-contain" />
                        //   )}
                        // </div>
                      ))} */}

                      {/* Imagen principal */}
                      <div className="flex space-x-3 mb-6 z-10 pt-4">
                        <img 
                          src={category.image} 
                          alt={category.name}
                          className="w-full max-w-[200px] object-cover rounded-full" 
                        />
                      </div>

                      {/* Etiqueta */}
                      <div className="bg-white rounded-full px-8 py-3 z-10">
                        <span className="text-[#6e3766] font-bold text-xl whitespace-nowrap">
                          {category.name}
                        </span>
                      </div>

                      {/* Efecto hover */}
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controles de navegación */}
      <div className="flex items-center justify-center mt-6 space-x-4">
        {/* Botón anterior */}
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 text-[#6e3766]"
          disabled={currentIndex === 0}
        >
          <ChevronLeft size={24} />
        </button>

        {/* Indicadores de puntos */}
        <div className="flex space-x-2">
          {Array.from({ length: Math.ceil(menuCategories.length / 3) }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentIndex === index 
                  ? 'bg-[#6e3766]' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Botón siguiente */}
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 text-[#6e3766]"
          disabled={currentIndex === Math.ceil(menuCategories.length / 3) - 1}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Auto-play opcional - descomenta si quieres que sea automático */}
      {/*
      React.useEffect(() => {
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
      }, [currentIndex]);
      */}
    </div>
  );
};

export default MenuCarousel;