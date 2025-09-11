import  { useState } from 'react';
import { Calendar, Phone, Mail, Send } from 'lucide-react';

const Eventos = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoEvento: '',
    fecha: '',
    invitados: '',
    presupuesto: '',
    ubicacion: '',
    mensaje: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');


  // const handleInputChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  const handleSubmit = async () => {
    // e.preventDefault();
    
    if (!formData.nombre || !formData.email || !formData.tipoEvento) {
      setError('Por favor completa los campos obligatorios');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Aquí iría tu llamada a la API para enviar la cotización
      // Simulación por ahora
      setTimeout(() => {
        setIsSubmitted(true);
        setIsLoading(false);
        // Resetear formulario
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          tipoEvento: '',
          fecha: '',
          invitados: '',
          presupuesto: '',
          ubicacion: '',
          mensaje: ''
        });
        setTimeout(() => setIsSubmitted(false), 5000);
      }, 1500);
    } catch (error) {
      setError('Error al enviar la cotización. Intenta de nuevo.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Icono principal animado */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-[#005120] rounded-full opacity-20 animate-pulse scale-150"></div>
              <div className="relative bg-[#005120] p-6 rounded-full">
                <Calendar className="h-16 w-16 text-white" />
              </div>
            </div>
          </div>

          {/* Título principal */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            <span className="bg-[#005120] bg-clip-text text-transparent">
              Organizamos
            </span>
            <br />
            <span className="text-3xl md:text-4xl text-gray-600 font-medium">
              Eventos Perfectos
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Convertimos tus ideas en experiencias memorables. Desde bodas íntimas hasta grandes eventos corporativos, nos encargamos de cada detalle.
          </p>

          {/* Stats de la empresa */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-pink-500 mb-2">500+</div>
              <div className="text-gray-600">Eventos realizados</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-purple-500 mb-2">10+</div>
              <div className="text-gray-600">Años de experiencia</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-500 mb-2">95%</div>
              <div className="text-gray-600">Clientes satisfechos</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-500 mb-2">24/7</div>
              <div className="text-gray-600">Soporte dedicado</div>
            </div>
          </div>
        </div>


        {/* Formulario de Cotización */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Solicita tu Cotización Gratuita</h2>
            <p className="text-gray-600">Cuéntanos sobre tu evento y te enviaremos una propuesta personalizada en menos de 24 horas</p>
          </div>

          {isSubmitted && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              ¡Gracias! Hemos recibido tu solicitud. Te contactaremos pronto con una propuesta personalizada.
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          <div onSubmit={handleSubmit} className="space-y-6">
            {/* Información Personal */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  // onChange={handleInputChange}
                              onChange={(e) => setFormData({...formData,[e.target.name]: e.target.value})}

                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                  placeholder="Tu nombre completo"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  // onChange={handleInputChange}
                  onChange={(e) => setFormData({...formData,[e.target.name]: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                  placeholder="tu@email.com"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  // onChange={handleInputChange}
                  onChange={(e) => setFormData({...formData,[e.target.name]: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                  placeholder="+52 33 1234 5678"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de evento *
                </label>
                <select
                  name="tipoEvento"
                  value={formData.tipoEvento}
                  // onChange={handleInputChange}
                  onChange={(e) => setFormData({...formData,[e.target.name]: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                  required
                >
                  <option value="">Selecciona un tipo</option>
                  <option value="boda">Boda</option>
                  <option value="corporativo">Evento Corporativo</option>
                  <option value="cumpleanos">Cumpleaños</option>
                  <option value="graduacion">Graduación</option>
                  <option value="inauguracion">Inauguración</option>
                  <option value="aniversario">Aniversario</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha del evento
                </label>
                <input
                  type="date"
                  name="fecha"
                  value={formData.fecha}
                  // onChange={handleInputChange}
                  onChange={(e) => setFormData({...formData,[e.target.name]: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Número de invitados
                </label>
                <select
                  name="invitados"
                  value={formData.invitados}
                  // onChange={handleInputChange}
                  onChange={(e) => setFormData({...formData,[e.target.name]: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                >
                  <option value="">Selecciona cantidad</option>
                  <option value="1-25">1 - 25 personas</option>
                  <option value="26-50">26 - 50 personas</option>
                  <option value="51-100">51 - 100 personas</option>
                  <option value="101-200">101 - 200 personas</option>
                  <option value="201-500">201 - 500 personas</option>
                  <option value="500+">Más de 500 personas</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Presupuesto aproximado
                </label>
                <select
                  name="presupuesto"
                  value={formData.presupuesto}
                  // onChange={handleInputChange}
                  onChange={(e) => setFormData({...formData,[e.target.name]: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                >
                  <option value="">Selecciona rango</option>
                  <option value="5000-15000">$5,000 - $15,000</option>
                  <option value="15000-30000">$15,000 - $30,000</option>
                  <option value="30000-50000">$30,000 - $50,000</option>
                  <option value="50000-100000">$50,000 - $100,000</option>
                  <option value="100000+">Más de $100,000</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ubicación preferida
              </label>
              <input
                type="text"
                name="ubicacion"
                value={formData.ubicacion}
                // onChange={handleInputChange}
                onChange={(e) => setFormData({...formData,[e.target.name]: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                placeholder="Ciudad o zona específica"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cuéntanos más sobre tu evento
              </label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                // onChange={handleInputChange}
                onChange={(e) => setFormData({...formData,[e.target.name]: e.target.value})}
                rows = {4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none resize-none"
                placeholder="Describe tu visión, temas específicos, requerimientos especiales, etc."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading}
                className="bg-[#005120] hover:from-pink-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2 mx-auto"
              >
                <Send className="h-5 w-5" />
                {isLoading ? 'Enviando...' : 'Solicitar Cotización Gratuita'}
              </button>
              <p className="text-sm text-gray-500 mt-2">
                * Campos obligatorios. Respuesta garantizada en menos de 24 horas.
              </p>
            </div>
          </div>
        </div>

        {/* Contacto directo */}
        <div className="mt-16 bg-gray-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">¿Prefieres hablar directamente?</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-center justify-center gap-4 p-6 bg-white rounded-lg shadow">
              <Phone className="h-8 w-8 text-pink-500" />
              <div>
                <p className="font-semibold text-gray-900">Llámanos</p>
                <p className="text-gray-600">+52 33 1234 5678</p>
                <p className="text-sm text-gray-500">Lun - Sab 9:00 AM - 8:00 PM</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 p-6 bg-white rounded-lg shadow">
              <Mail className="h-8 w-8 text-purple-500" />
              <div>
                <p className="font-semibold text-gray-900">Escríbenos</p>
                <p className="text-gray-600">eventos@tuempresa.com</p>
                <p className="text-sm text-gray-500">Respuesta en menos de 2 horas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventos;