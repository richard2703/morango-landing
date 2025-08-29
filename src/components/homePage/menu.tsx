import d2rose from '../../img/decorativos/2ROS.png';
import d7rose from '../../img/decorativos/7ROS.png';
import d6aver from '../../img/decorativos/6AVER.png';
import d7aver from '../../img/decorativos/7AVER.png';
import d5bblue from '../../img/decorativos/5BBLUE.png';

import smoothies from '../../img/smothie3.jpg';
import detox from '../../img/detox.jpg';
import nutella from '../../img/nutella.jpg';
const MenuSection = () => {
  return (
    <div className="min-h-screen ">
      {/* Header with curved text and logos */}
      <div className="relative bg-white pt-8 pb-4 overflow-hidden min-h-24">
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-start">
            {/* Left logo/icon */}
            <img src={d2rose} alt="" className="w-12 h-12" />
            {/* <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center transform -rotate-12">
              <div className="w-8 h-8 bg-white rounded-lg"></div>
            </div> */}

            {/* Center curved text */}
            <div className="flex-1 text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#abc846]">
                conéctate con lo esencial,disfruta lo natural
              </p>
              {/* <svg viewBox="0 0 400 200" className="w-full max-w-md mx-auto">
                <defs>
                  <path id="curve" d="M 50,40 Q 200,10 350,40" />
                </defs>
                <text className="fill-lime-500 text-lg font-medium">
                  <textPath href="#curve" startOffset="50%" textAnchor="middle">
                    conéctate con lo esencial, disfruta lo natural
                  </textPath>
                </text>
              </svg> */}
            </div>

            {/* Right logo */}
            <img src={d7rose} alt="" className="w-18 " />

            {/* <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center">
              <div className="text-white font-bold text-xl">m</div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Menu Title Section */}
      <div className="bg-[#abc846] py-16">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h1 className="text-6xl md:text-7xl font-bold text-[#005120] ">
            Menú
          </h1>
        </div>
      </div>

      {/* Menu Grid Section */}
      <div className="grid md:grid-cols-3 ">
        {/* Smoothies Section */}
        <div className="relative bg-[#6e3766] flex flex-col items-center justify-center p-8 group cursor-pointer overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-2 left-46 w-16 text-lime-400 ">
            <img src={d7aver} alt="" />
            {/* <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
            </svg> */}
          </div>
          <div className="absolute bottom-4 left-4 w-18 text-lime-400 ">
                        <img src={d6aver} alt="" />

            {/* <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
            </svg> */}
          </div>

          {/* Logo */}
          <div className="mb-6">
            {/* <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
              <div className="text-white font-bold text-xl">m</div>
            </div> */}
          </div>

          {/* Smoothie glasses illustration */}
          <div className="flex space-x-3 mb-6 z-10">
            <img src={smoothies} alt="" className="w-full  object-cover rounded-full"/>
            {/* <div className="w-12 h-16 bg-gradient-to-t from-orange-300 to-orange-200 rounded-lg opacity-90"></div>
            <div className="w-12 h-16 bg-gradient-to-t from-yellow-300 to-yellow-200 rounded-lg opacity-90"></div>
            <div className="w-12 h-16 bg-gradient-to-t from-green-300 to-green-200 rounded-lg opacity-90"></div>
            <div className="w-12 h-16 bg-gradient-to-t from-pink-300 to-pink-200 rounded-lg opacity-90"></div> */}
          </div>

          {/* Label */}
          <div className="bg-white rounded-full px-8 py-3 z-10">
            <span className="text-[#6e3766] font-bold text-xl">smoothies</span>
          </div>

          {/* Hover effect */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </div>

        {/* Jugos & Bebidas Section */}
        <div className="relative bg-[#c4e0f2] flex flex-col items-center justify-center p-8 group cursor-pointer overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-8 right-8 w-8 h-8 text-pink-500 opacity-60">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
            </svg>
          </div>
          <div className="absolute bottom-12 right-12 w-6 h-6 text-pink-500 opacity-40">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
            </svg>
          </div>
          <div className="absolute bottom-16 right-6 w-4 h-4 text-pink-500 opacity-70">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
            </svg>
          </div>

          {/* Green drink illustration */}
          <div className="mb-8 z-10">
            <img src={detox} alt="" className="w-full h-full object-cover rounded-full"/>
            {/* <div className="w-20 h-24 bg-gradient-to-t from-green-500 to-green-300 rounded-lg relative">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-t from-green-400 to-green-200 rounded-lg"></div>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-green-600 rounded-t-lg"></div>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 translate-x-2 w-1 h-8 bg-yellow-400 rounded-full"></div>
            </div> */}
          </div>

          {/* Label */}
          <div className="bg-white rounded-full px-6 py-3 z-10">
            <span className="text-[#6e3766] font-bold text-xl">jugos & bebidas</span>
          </div>

          {/* Hover effect */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </div>

        {/* Acai Bowl Section */}
        <div className="relative bg-[#da2f6e] flex flex-col items-center justify-center p-8 group cursor-pointer overflow-hidden">
          <div className="absolute bottom-4 left-4 w-10 text-lime-400 ">
                        <img src={d5bblue} alt="" />
          </div>
          {/* Acai bowl illustration */}
          <div className="mb-8 z-10">
            <img src={nutella} alt="" className="w-full h-full object-cover rounded-full" />

            {/* <div className="w-24 h-24 bg-white rounded-full p-2"> */}

            {/* <div className="w-full h-full bg-gradient-to-br from-purple-600 to-purple-800 rounded-full relative overflow-hidden"> */}
            {/* Toppings */}
            {/* <div className="absolute top-2 left-3 w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="absolute top-3 right-4 w-2 h-2 bg-yellow-300 rounded-full"></div>
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-yellow-200 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-green-300 rounded-full"></div>
                <div className="absolute bottom-3 right-3 w-3 h-3 bg-red-300 rounded-full"></div> */}
            {/* Spiral pattern */}
            {/* <div className="absolute inset-2 border-2 border-yellow-200 rounded-full opacity-60"></div> */}
            {/* </div> */}
            {/* </div> */}
          </div>

          {/* Label */}
          <div className="bg-white rounded-full px-8 py-3 z-10">
            <span className="text-[#6e3766] font-bold text-xl">acaí bowl</span>
          </div>

          {/* Hover effect */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;