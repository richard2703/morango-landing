import { MapPin, Star, Check } from 'lucide-react';
import d4mor from '../../img/decorativos/4MOR.png';
import d6mor from '../../img/decorativos/6MOR.png';
import d4blc from '../../img/decorativos/4BLC.png';
import d3blc from '../../img/decorativos/3BLC.png';
import smothies from '../../img/smoothies.jpg';

const Ubicacion = ({ }) => {
    return (
        <div className=" flex items-center justify-center min-h-screen">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-0  rounded-3xl overflow-hidden shadow-2xl">

                {/* Imagen del smoothie - Lado Izquierdo */}
                <div className="relative bg-gradient-to-br from-blue-50 to-teal-100 flex items-center justify-center">
                    {/* <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-blue-100"></div> */}
                    <img src={smothies} alt="" />
                </div>

                {/* Lado Derecho - Dos secciones apiladas */}
                <div className="grid grid-rows-2 gap-0 ">

                    {/* Sección Superior - "¿Dónde estamos?" */}
                    <div className=" p-8 flex flex-col justify-center text-white relative" style={{ backgroundColor: '#abc846' }}>
                        {/* Decoración floral */}
                        <div className="absolute top-4 right-6">
                            <div className="w-8 h-8 text-white ">
                                <img src={d4mor} alt="" />
                            </div>
                        </div>

                        <div className="absolute bottom-4 left-6">
                            <div className="w-10 h-10 text-white ">
                                <img src={d6mor} alt="" />
                            </div>
                        </div>

                        <h2 className="text-5xl font-bold mb-6">
                            ¿Dónde estamos?
                        </h2>

                        <div className="flex items-center space-x-4">
                            <div className="bg-white bg-opacity-25 rounded-full p-4 backdrop-blur-sm">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-green-600" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Valle Real</h3>
                                <p className="text-sm opacity-90">Visítanos en nuestra sucursal</p>
                            </div>
                        </div>
                    </div>

                    {/* Sección Inferior - "Pasa Por Tu Bowl" */}
                    <div className="p-8 flex flex-col justify-center text-white relative " style={{ backgroundColor: '#6e3766' }}>
                        {/* Decoración */}
                        <div className="absolute top-4 right-6">
                            <div className="w-10 h-10 text-white ">
                                <img src={d3blc} alt="" />
                            </div>
                            <div className="absolute top-55 right-45">
                                <div className="w-10 h-10 text-white ">
                                    <img src={d4blc} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-5xl font-bold leading-tight mb-2">
                                    Pasa Por<br />
                                    Tu Bowl
                                </h2>
                                {/* <p className="text-sm opacity-90 mb-4">Recoge tu pedido</p>
                                <div className="flex items-center space-x-2">
                                    <Check className="w-5 h-5" />
                                    <span className="text-sm">Listo para recoger</span>
                                </div> */}
                            </div>

                            <div className="ml-4">
                                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 " style={{ color: "#6e3766" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ubicacion;