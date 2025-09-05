import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import banner1 from '../../img/banner.jpg';

const BannerCarousel = () => {
    const banners = [
        {
            id: 1,
            title: "Tu Banner",
            description: "Tu descripción",
            bgImg: banner1, // o URL completa
            textColor: "text-white",
            // overlay: "bg-black bg-opacity-50" // Ajusta la opacidad según necesites
        },
        {
            id: 2,
            title: "Banner 2",
            description: "Descripción del segundo banner",
            bgColor: "bg-gradient-to-r from-green-500 to-teal-600",
            textColor: "text-white"
        },
        {
            id: 3,
            title: "Banner 3",
            description: "Descripción del tercer banner",
            bgColor: "bg-gradient-to-r from-orange-500 to-red-600",
            textColor: "text-white"
        },
        {
            id: 4,
            title: "Banner 4",
            description: "Descripción del cuarto banner",
            bgColor: "bg-gradient-to-r from-pink-500 to-rose-600",
            textColor: "text-white"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-play opcional (descomenta si lo quieres)

      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => 
            prevIndex === banners.length - 1 ? 0 : prevIndex + 1
          );
        }, 5000); // Cambia cada 5 segundos

        return () => clearInterval(interval);
      }, [banners.length]);


    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? banners.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === banners.length - 1 ? 0 : currentIndex + 1);
    };
  
    const goToSlide = (newIndex: number) => {
        setCurrentIndex(newIndex);
    };

    return (
        <div className="relative w-full   overflow-hidden rounded-lg shadow-lg group">
            {/* Container de slides */}
            <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {banners.map((banner) => (
                    <div
                        key={banner.id}
                        className={`min-w-full relative flex items-center justify-center ${banner.textColor}`}
                        style={{
                            backgroundImage: `url(${banner.bgImg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            width: "100%",
                            height: "600px"
                        }}
                    >
                        {/* Overlay para mejor legibilidad del texto */}
                        {/* <div className={`absolute inset-0 ${banner.overlay}`}></div> */}

                        {/* Contenido del banner */}
                        <div className="relative z-10 text-center px-4">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
                                {banner.title}
                            </h2>
                            <p className="text-lg md:text-xl opacity-90 drop-shadow-md">
                                {banner.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Flechas discretas - solo visibles al hacer hover */}
            <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#005120] bg-opacity-20 hover:bg-opacity-40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                aria-label="Banner anterior"
            >
                <ChevronLeft size={24} />
            </button>

            <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#005120] bg-opacity-20 hover:bg-opacity-40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                aria-label="Banner siguiente"
            >
                <ChevronRight size={24} />
            </button>

            {/* Indicadores discretos */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {banners.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-[#005120]'
                                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                            }`}
                        aria-label={`Ir al banner ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default BannerCarousel;