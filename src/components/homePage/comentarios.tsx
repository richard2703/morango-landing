import coment1 from "../../img/comentarios/coment1.png";
import coment2 from "../../img/comentarios/coment2.png";
import coment3 from "../../img/comentarios/coment3.png";


const ClientsSection = () => {
  const clients = [
    {
      id: 1,
      title: "la macorita",
      description: "Açaí delicioso!  Tienen una opción que ya tiene la proteína en la mezcla, postre sano!!!.",
      image: (coment1),
      bgColor: "bg-[#da2f6e]",
      textBg: "bg-orange-300",
      imagePosition: "top"
    },
    {
      id: 2,
      title: "Ines ", 
      description: "Los smoothies y açaí bowls más deliciosos que he probado!!!🤩🤩 El lugar está increíble y el personal muy atento y amable. Lo recomiendo 100%!!! Tienen muchas opciones saludables y tooodo está súper rico🍓🫐🍌 Perfecto para ir con amigos o familia.",
      image: (coment2),
      bgColor: "bg-[#abc846]",
      textBg: "bg-lime-400",
      imagePosition: "right"
    },
    {
      id: 3,
      title: "Montserrat",
      description: "Amo cada detalle de esta marca, los smoothies están increíbles, el lugar, la atención 🫶 Mi favorito… Peanut Power",
      image: (coment3),
      bgColor: "bg-[#abc846]",
      textBg: "bg-lime-400",
      imagePosition: "left"
    }
  ];

  return (
    <section className="py-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Cliente 1 - Sección completa */}
          <div className={`${clients[0].bgColor} rounded-3xl p-8 relative overflow-hidden min-h-[500px] transform hover:scale-105 transition-transform duration-300`}>
            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-6">
                <img 
                  src={clients[0].image} 
                  alt="Cliente 1"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className={`${clients[0].textBg} rounded-2xl p-6 mt-auto`}>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {clients[0].title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {clients[0].description}
                </p>
              </div>
            </div>
            {/* Elementos decorativos */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full"></div>
            <div className="absolute bottom-20 left-4 w-16 h-16 bg-white/20 rounded-full"></div>
          </div>

          {/* Cliente 2 y 3 - Columna derecha */}
          <div className="space-y-8">
            {clients.slice(1).map((client) => (
              <div 
                key={client.id}
                className={`${client.bgColor} rounded-3xl p-6 relative overflow-hidden min-h-[240px] transform hover:scale-105 transition-transform duration-300`}
              >
                <div className="flex items-center gap-6 h-full">
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {client.title}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {client.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <img 
                      src={client.image} 
                      alt={client.title}
                      className="w-32 h-32 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </div>
                {/* Elementos decorativos */}
                <div className="absolute top-3 right-3 w-12 h-12 bg-white/20 rounded-full"></div>
                <div className="absolute bottom-3 left-3 w-8 h-8 bg-white/20 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Versión móvil alternativa */}
        {/* <div className="lg:hidden space-y-6">
          {clients.map((client) => (
            <div 
              key={client.id}
              className={`${client.bgColor} rounded-3xl p-6 relative overflow-hidden transform hover:scale-105 transition-transform duration-300`}
            >
              <div className="mb-4">
                <img 
                  src={client.image} 
                  alt={client.title}
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className={`${client.textBg} rounded-xl p-4`}>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {client.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {client.description}
                </p>
              </div>
              Elementos decorativos
              <div className="absolute top-3 right-3 w-12 h-12 bg-white/20 rounded-full"></div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default ClientsSection;