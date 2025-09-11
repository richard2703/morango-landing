import d6aver from '../../img/decorativos/6AVER.png';
import d7aver from '../../img/decorativos/7AVER.png';
import d5bblue from '../../img/decorativos/5BBLUE.png';

import smoothies from '../../img/smothie3.jpg';
import detox from '../../img/detox.jpg';
import nutella from '../../img/nutella.jpg';

const MenuAgrupado = () => {
    return (
        <div className="grid md:grid-cols-3 ">
            {/* Smoothies Section */}
            <div className="relative  flex flex-col items-center justify-center p-8 group cursor-pointer overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-2 left-46 w-16 text-lime-400 ">
                    <img src={d7aver} alt="" />
                </div>
                <div className="absolute bottom-4 left-4 w-18 text-lime-400 ">
                    <img src={d6aver} alt="" />
                </div>

                {/* Smoothie glasses illustration */}
                <div className="flex space-x-3 mb-6 z-10 pt-4">
                    <img src={smoothies} alt="" className="w-full  object-cover rounded-full" />
                </div>

                {/* Label */}
                <div className="bg-white rounded-full px-8 py-3 z-10">
                    <span className="text-[#6e3766] font-bold text-xl">Smoothies</span>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>

            {/* Jugos & Bebidas Section */}
            <div className="relative  flex flex-col items-center justify-center p-8 group cursor-pointer overflow-hidden">
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
                    <img src={detox} alt="" className="w-full h-full object-cover rounded-full" />
                </div>

                {/* Label */}
                <div className="bg-white rounded-full px-6 py-3 z-10">
                    <span className="text-[#6e3766] font-bold text-xl">Jugos & Bebidas</span>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>

            {/* Acai Bowl Section */}
            <div className="relative  flex flex-col items-center justify-center p-8 group cursor-pointer overflow-hidden">
                <div className="absolute bottom-4 left-4 w-10 text-lime-400 ">
                    <img src={d5bblue} alt="" />
                </div>
                {/* Acai bowl illustration */}
                <div className="mb-8 z-10">
                    <img src={nutella} alt="" className="w-full h-full object-cover rounded-full" />
                </div>

                {/* Label */}
                <div className="bg-white rounded-full px-8 py-3 z-10">
                    <span className="text-[#6e3766] font-bold text-xl">Açaí bowl</span>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
                        {/* Smoothies Section */}
            <div className="relative flex flex-col items-center justify-center p-8 group cursor-pointer overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-2 left-46 w-16 text-lime-400 ">
                    <img src={d7aver} alt="" />
                </div>
                <div className="absolute bottom-4 left-4 w-18 text-lime-400 ">
                    <img src={d6aver} alt="" />
                </div>

                {/* Smoothie glasses illustration */}
                <div className="flex space-x-3 mb-6 z-10 pt-4">
                    <img src={smoothies} alt="" className="w-full  object-cover rounded-full" />
                </div>

                {/* Label */}
                <div className="bg-white rounded-full px-8 py-3 z-10">
                    <span className="text-[#6e3766] font-bold text-xl">Protein bowls</span>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>

            {/* Jugos & Bebidas Section */}
            <div className="relative flex flex-col items-center justify-center p-8 group cursor-pointer overflow-hidden">
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
                    <img src={detox} alt="" className="w-full h-full object-cover rounded-full" />
                </div>

                {/* Label */}
                <div className="bg-white rounded-full px-6 py-3 z-10">
                    <span className="text-[#6e3766] font-bold text-xl">Ensaladas</span>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>

            {/* Acai Bowl Section */}
            <div className="relative flex flex-col items-center justify-center p-8 group cursor-pointer overflow-hidden">
                <div className="absolute bottom-4 left-4 w-10 text-lime-400 ">
                    <img src={d5bblue} alt="" />
                </div>
                {/* Acai bowl illustration */}
                <div className="mb-8 z-10">
                    <img src={nutella} alt="" className="w-full h-full object-cover rounded-full" />
                </div>

                {/* Label */}
                <div className="bg-white rounded-full px-8 py-3 z-10">
                    <span className="text-[#6e3766] font-bold text-xl">Snacks saludables</span>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
        </div>
    );
}

export default MenuAgrupado;