import { MapPin } from 'lucide-react';
import d4mor from '../../img/decorativos/4MOR.png';
import d6mor from '../../img/decorativos/6MOR.png';
// import d4blc from '../../img/decorativos/4BLC.png';
// import d3blc from '../../img/decorativos/3BLC.png';
import smothies from '../../img/smoothies.jpg';
import valleReal from '../../img/fachadas/valleReal.png';

const Ubicacion = ({ }) => {
    return (
        <div className=" flex items-center justify-center ">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-0  rounded-3xl overflow-hidden shadow-2xl">

                {/* Imagen del smoothie - Lado Izquierdo */}
                <div className="relative bg-gradient-to-br from-blue-50 to-teal-100 flex items-center justify-center">
                    {/* <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-blue-100"></div> */}
                    <img src={smothies} alt="" />
                </div>

                {/* Lado Derecho - Dos secciones apiladas */}
                <div className="grid grid-cols-1 gap-0 ">

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

                        <div className="flex items-center space-x-4 cursor-pointer p-4"
                            onClick={() => window.open('https://maps.app.goo.gl/s9xJYemKGUmayEgUA', '_blank')}>
                            <div className="bg-white bg-opacity-25 rounded-full p-4 backdrop-blur-sm">
                                <div className="w-18 h-18 bg-white rounded-full flex items-center justify-center">
                                    {/* <MapPin className="w-6 h-6 text-green-600" /> */}
                                    <img src={valleReal} alt="" className='absolute h-22 w-22 bg-white/20 rounded-full' />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold">Valle Real</h3>
                                <p className="text-xl opacity-90">Visítanos en nuestra sucursal • Clic para abrir Maps</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 cursor-pointer p-4"
                            onClick={() => window.open('https://maps.app.goo.gl/s9xJYemKGUmayEgUA', '_blank')}>
                            <div className="bg-white bg-opacity-25 rounded-full p-4 backdrop-blur-sm">
                                <div className="w-18 h-18 bg-white rounded-full flex items-center justify-center">
                                    {/* <MapPin className="w-6 h-6 text-green-600" /> */}
                                                                        <img src={valleReal} alt="" className='absolute h-22 w-22 bg-white/20 rounded-full' />

                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold">Valle Real</h3>
                                <p className="text-xl opacity-90">Visítanos en nuestra sucursal • Clic para abrir Maps</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Ubicacion;