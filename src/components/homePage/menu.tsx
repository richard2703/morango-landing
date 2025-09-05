import MenuCarousel from '../individuales/menuCarousel';
import MenuAgrupado from '../individuales/menuAgrupado';

import d2rose from '../../img/decorativos/2ROS.png';
import d7rose from '../../img/decorativos/7ROS.png';
const MenuSection = () => {
  return (
    <div className=" ">
      {/* Header with curved text and logos */}
      <div className="relative  pt-8 pb-4 overflow-hidden min-h-24">
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-start">
            {/* Left logo/icon */}
            <img src={d2rose} alt="" className="w-12 h-12" />
            {/* Center curved text */}
            <div className="flex-1 text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#abc846]">
                Conéctate con lo esencial, disfruta lo natural
              </p>
            </div>

            {/* Right logo */}
            <img src={d7rose} alt="" className="w-18 " />
          </div>
        </div>
      </div>

      {/* Menu Title Section */}
      <div className=" py-16">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h1 className="text-6xl md:text-7xl font-bold text-[#005120] ">
            Menú
          </h1>
        </div>
      </div>

      <MenuCarousel />
      <MenuAgrupado />


    </div>
  );
};

export default MenuSection;