const LifestyleCard = ({ 
  title = "Home & Lifestyle",
  category = "Categoría",
  description = "",
  imageUrl = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  tags = [],
  onClick = () => {}
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-sm mx-auto">
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
      <div className="p-6">
        <div className="flex items-center justify-between">
          {/* Título y categoría */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
            <p className="text-gray-600 text-sm">{category}</p>
          </div>
          
          {/* Botón de acción */}
          <button 
            onClick={onClick}
            className="bg-teal-100 hover:bg-teal-200 text-teal-700 p-3 rounded-full transition-colors duration-200 flex items-center justify-center group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" 
                 className="h-5 w-5 group-hover:translate-x-0.5 transition-transform duration-200" 
                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
        
        {/* Descripción opcional */}
        {description && (
          <p className="text-gray-600 text-sm mt-3">{description}</p>
        )}
        
        {/* Etiquetas/tags opcionales */}
        {tags && tags.length > 0 && (
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
        )}
      </div>
    </div>
  );
};

// Ejemplo de uso del componente
const Cart = () => {
  const handleCardClick = () => {
    console.log('Card clicked!');
    // Aquí puedes agregar tu lógica de navegación
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Ejemplo 1 - Home & Lifestyle */}
        <LifestyleCard 
          title="Home & Lifestyle"
          category="Decoración"
          description="Encuentra los mejores productos para tu hogar"
          tags={['Hogar', 'Estilo']}
          onClick={handleCardClick}
        />
        
        {/* Ejemplo 2 - Food & Drinks */}
        <LifestyleCard 
          title="Food & Drinks"
          category="Gastronomía"
          description="Descubre nuevos sabores y experiencias culinarias"
          imageUrl="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
          tags={['Comida', 'Bebidas']}
          onClick={handleCardClick}
        />
        
        {/* Ejemplo 3 - Health & Wellness */}
        <LifestyleCard 
          title="Health & Wellness"
          category="Bienestar"
          description="Cuida tu salud y bienestar con nuestros servicios"
          imageUrl="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
          tags={['Salud', 'Bienestar']}
          onClick={handleCardClick}
        />
      </div>
    </div>
  );
};

export default Cart;