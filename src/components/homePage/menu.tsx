

const MenuSection = () => {
  return (
    <div className="min-h-screen ">
      {/* Header with curved text and logos */}
      <div className="relative bg-white pt-8 pb-4 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-start">
            {/* Left logo/icon */}
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center transform -rotate-12">
              <div className="w-8 h-8 bg-white rounded-lg"></div>
            </div>
            
            {/* Center curved text */}
            <div className="flex-1 text-center">
              <svg viewBox="0 0 400 60" className="w-full max-w-md mx-auto">
                <defs>
                  <path id="curve" d="M 50,40 Q 200,10 350,40" />
                </defs>
                <text className="fill-lime-500 text-lg font-medium">
                  <textPath href="#curve" startOffset="50%" textAnchor="middle">
                    conéctate con lo esencial, disfruta lo natural
                  </textPath>
                </text>
              </svg>
            </div>
            
            {/* Right logo */}
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center">
              {/* <div className="text-white font-bold text-xl">m</div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Menu Title Section */}
      <div className="bg-gradient-to-r from-lime-400 via-lime-500 to-yellow-400 py-16">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h1 className="text-6xl md:text-7xl font-bold text-green-800">
            Menú
          </h1>
        </div>
      </div>

      {/* Menu Grid Section */}
      <div className="grid md:grid-cols-3 h-96 md:h-80">
        {/* Smoothies Section */}
        <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 flex flex-col items-center justify-center p-8 group cursor-pointer overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-4 left-4 w-8 h-8 text-lime-400 opacity-70">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
            </svg>
          </div>
          <div className="absolute bottom-4 left-4 w-6 h-6 text-lime-400 opacity-50">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
            </svg>
          </div>

          {/* Logo */}
          <div className="mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
              <div className="text-white font-bold text-xl">m</div>
            </div>
          </div>

          {/* Smoothie glasses illustration */}
          <div className="flex space-x-3 mb-6 z-10">
            <div className="w-12 h-16 bg-gradient-to-t from-orange-300 to-orange-200 rounded-lg opacity-90"></div>
            <div className="w-12 h-16 bg-gradient-to-t from-yellow-300 to-yellow-200 rounded-lg opacity-90"></div>
            <div className="w-12 h-16 bg-gradient-to-t from-green-300 to-green-200 rounded-lg opacity-90"></div>
            <div className="w-12 h-16 bg-gradient-to-t from-pink-300 to-pink-200 rounded-lg opacity-90"></div>
          </div>

          {/* Label */}
          <div className="bg-white rounded-full px-8 py-3 z-10">
            <span className="text-gray-800 font-semibold text-lg">smoothies</span>
          </div>

          {/* Hover effect */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </div>

        {/* Jugos & Bebidas Section */}
        <div className="relative bg-gradient-to-br from-blue-300 via-blue-400 to-cyan-400 flex flex-col items-center justify-center p-8 group cursor-pointer overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-8 right-8 w-8 h-8 text-pink-500 opacity-60">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
            </svg>
          </div>
          <div className="absolute bottom-12 right-12 w-6 h-6 text-pink-500 opacity-40">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
            </svg>
          </div>
          <div className="absolute bottom-16 right-6 w-4 h-4 text-pink-500 opacity-70">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
            </svg>
          </div>

          {/* Green drink illustration */}
          <div className="mb-8 z-10">
            <div className="w-20 h-24 bg-gradient-to-t from-green-500 to-green-300 rounded-lg relative">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-t from-green-400 to-green-200 rounded-lg"></div>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-green-600 rounded-t-lg"></div>
              {/* Straw */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 translate-x-2 w-1 h-8 bg-yellow-400 rounded-full"></div>
            </div>
          </div>

          {/* Label */}
          <div className="bg-white rounded-full px-6 py-3 z-10">
            <span className="text-gray-800 font-semibold text-lg">jugos & bebidas</span>
          </div>

          {/* Hover effect */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </div>

        {/* Acai Bowl Section */}
        <div className="relative bg-gradient-to-br from-pink-500 via-pink-600 to-red-500 flex flex-col items-center justify-center p-8 group cursor-pointer overflow-hidden">
          {/* Acai bowl illustration */}
          <div className="mb-8 z-10">
            <div className="w-24 h-24 bg-white rounded-full p-2">
              <div className="w-full h-full bg-gradient-to-br from-purple-600 to-purple-800 rounded-full relative overflow-hidden">
                {/* Toppings */}
                <div className="absolute top-2 left-3 w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="absolute top-3 right-4 w-2 h-2 bg-yellow-300 rounded-full"></div>
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-yellow-200 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-green-300 rounded-full"></div>
                <div className="absolute bottom-3 right-3 w-3 h-3 bg-red-300 rounded-full"></div>
                {/* Spiral pattern */}
                <div className="absolute inset-2 border-2 border-yellow-200 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>

          {/* Label */}
          <div className="bg-white rounded-full px-8 py-3 z-10">
            <span className="text-gray-800 font-semibold text-lg">acaí bowl</span>
          </div>

          {/* Hover effect */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;