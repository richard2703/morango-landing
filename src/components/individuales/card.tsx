import bowl from '../../img/bowl1.jpg';
import combo from '../../img/combo2.jpg';
import smoothie from '../../img/smoothie2.jpg';

const LifestyleCard = ({
  title = "Home & Lifestyle",
  // category = "Categoría",
  description = "",
  imageUrl = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  bgColor = "#1c5c99",
  txColor = "text-[#005120]",
  brColor = "#005120",
  // tags = [],
  onClick = () => { }
}) => {
  return (
    <div className="min-w-[320px] rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-sm mx-auto">
      {/* Imagen principal */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        {/* Overlay gradient sutil */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
      </div>

      {/* Contenido inferior */}
      {/* <div className="p-6 bg-[{bgColor}]" > */}
      <div className="p-6" style={{ backgroundColor: bgColor }}>

        <div className="flex items-center justify-between">
          {/* Título y categoría */}
          <div className="flex-1">
            <h3 className={`${txColor} text-xl font-bold mb-1`}>{title}</h3>
            {/* <p className={`${txColor} text-sm`}>{category}</p> */}
          </div>

          {/* Botón de acción */}
          {/* <button
            onClick={onClick}
            className="bg-teal-100 hover:bg-teal-700 text-teal-700 p-3 rounded-full transition-colors duration-200 flex items-center justify-center group">

            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 group-hover:translate-x-0.5 transition-transform duration-200"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button> */}
          <button
            onClick={onClick}
            className={`${txColor} flex items-center justify-center group`}
            style={{ borderWidth: '2px', borderStyle: 'solid', padding: '8px 12px', borderRadius: '9999px', borderColor: brColor, backgroundColor: bgColor }}>

            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 group-hover:translate-x-0.5 transition-transform duration-200"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Descripción opcional */}
        {description && (
          <p className={`${txColor} text-sm mt-3`}>{description}</p>
        )}

        {/* Etiquetas/tags opcionales */}
        {/* {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )} */}
      </div>
    </div>
  );
};

// Ejemplo de uso del componente
const Card = () => {
  const uber = () => {
    window.open('https://www.ubereats.com/mx/store/morango-zona-real/3gZwdjZBUOqHTqprUyZLqg?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMk1pcmF2YWxsZSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMkNoSUpRLV93UllheUtJUVI2NWZES2xTOXBVayUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJnb29nbGVfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0EyMC42MTcxOTM1JTJDJTIybG9uZ2l0dWRlJTIyJTNBLTEwMy4zNTE1MDkxJTdE&ps=1', '_blank')
  };
    const rappi = () => {
    window.open('https://www.rappi.com.mx/restaurantes/delivery/596201-morango-gdl?utm_source=app&utm_medium=deeplink&utm_campaign=share', '_blank')
  };
    const didi = () => {
    window.open('https://maps.app.goo.gl/s9xJYemKGUmayEgUA', '_blank')
  };

  return (
    <div className="  p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Ejemplo 1 - Home & Lifestyle */}
        <LifestyleCard
          title="Fashion & Accessories"
          // category="Decoración"
          // description="Encuentra los mejores productos para tu hogar"
          imageUrl={bowl}
          // tags={['Hogar', 'Estilo']}
          bgColor="#6e3766"
          txColor="text-[#faf4f8]"
          brColor="#faf4f8"
          onClick={uber}
        />

        {/* Ejemplo 2 - Food & Drinks */}
        <LifestyleCard
          title="Home & Lifestyle"
          // category="Gastronomía"
          // description="Descubre nuevos sabores y experiencias culinarias"
          imageUrl={combo}
          // tags={['Comida', 'Bebidas']}
          bgColor="#c4e0f2"
          txColor="text-[#005120]"
          brColor="#005120"
          onClick={rappi}
        />

        {/* Ejemplo 3 - Health & Wellness */}
        <LifestyleCard
          title="Food & Drinks"
          // category="Bienestar"
          // description="Cuida tu salud y bienestar con nuestros servicios"
          imageUrl={smoothie}
          // tags={['Salud', 'Bienestar']}
          bgColor="#da2f6e"
          txColor="text-[#faf4f8]"
          brColor="#faf4f8"
          onClick={didi}
        />
      </div>
    </div>
  );
};

export default Card;