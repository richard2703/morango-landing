import React, { useState } from 'react';
import { Store, Clock, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Franquicias = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const FORMSPREE_URL = 'https://formspree.io/f/mrbalvgz';

   const handleSubscribe = async () => {
    if (!email) {
      setError('Por favor ingresa tu email');
      return;
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor ingresa un email válido');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          subject: 'Nueva suscripción - Franquicias',
          message: `Nueva suscripción de: ${email}`,
          _replyto: email,
          _subject: 'Nueva suscripción para franquicias',
        }),
      });

      if (response.ok) {
        setIsSubscribed(true);
        setEmail('');
        setTimeout(() => setIsSubscribed(false), 5000);
      } else {
        setError('Hubo un error al suscribirse. Intenta de nuevo.');
      }
    } catch (error) {
      setError('Error de conexión. Intenta de nuevo.');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen  bg-[#faf4f8]">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Icono principal animado */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-[#005120] rounded-full opacity-20 animate-pulse scale-150"></div>
              <div className="relative bg-[#005120] p-6 rounded-full">
                <Store className="h-16 w-16 text-white" />
              </div>
            </div>
          </div>

          {/* Título principal */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            <span className="bg-[#005120] bg-clip-text text-transparent">
              Franquicias
            </span>
            <br />
            <span className="text-3xl md:text-4xl text-[#005120] font-medium">
              Próximamente
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-[#005120] mb-12 max-w-3xl mx-auto leading-relaxed">
            Estamos preparando algo increíble para ti. Pronto podrás ser parte de nuestra red de franquicias y hacer crecer tu negocio con nosotros.
          </p>

          {/* Características principales */}
          {/* <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Store className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Modelo Probado</h3>
              <p className="text-gray-600">Sistema de franquicia exitoso con años de experiencia en el mercado</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Soporte Total</h3>
              <p className="text-gray-600">Acompañamiento completo desde el inicio hasta el éxito de tu negocio</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Crecimiento Rápido</h3>
              <p className="text-gray-600">Oportunidad de expansión acelerada con nuestro modelo de negocio</p>
            </div>
          </div> */}

          {/* Timeline/Roadmap */}
          {/* <div className="bg-white p-8 rounded-2xl shadow-xl mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">¿Qué estamos preparando?</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Manual de Operaciones</h4>
                    <p className="text-gray-600">Guías completas para el éxito de tu franquicia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Programa de Capacitación</h4>
                    <p className="text-gray-600">Formación integral para franquiciados</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Sistema Tecnológico</h4>
                    <p className="text-gray-600">Plataforma digital para gestión eficiente</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Marketing y Publicidad</h4>
                    <p className="text-gray-600">Estrategias comprobadas de promoción</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Call to Action */}
<div className="bg-[#6e3766] p-8 rounded-2xl shadow-xl max-w-2xl mx-auto text-white mb-12">
        <h2 className="text-2xl font-bold mb-4">
          ¡Sé el primero en conocer cuando lancemos!
        </h2>
        <p className="mb-6 opacity-90">
          Regístrate y recibe información exclusiva sobre nuestras oportunidades de franquicia
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu correo electrónico"
            className="flex-1 px-4 py-3 border border-white/20 bg-white/10 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-white focus:border-transparent outline-none text-white placeholder-white/70"
            disabled={isLoading}
            onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
          />
          <button
            type="button"
            onClick={handleSubscribe}
            disabled={isLoading}
            className="bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
          >
            <Mail className="h-5 w-5" />
            {isLoading ? 'Enviando...' : 'Notificarme'}
          </button>
        </div>

        {/* Mensajes de estado */}
        {isSubscribed && (
          <div className="mt-4 p-3 bg-green-500/20 backdrop-blur-sm text-green-100 rounded-lg border border-green-400/30">
            ¡Gracias! Te hemos agregado a nuestra lista.
          </div>
        )}

        {error && (
          <div className="mt-4 p-3 bg-red-500/20 backdrop-blur-sm text-red-100 rounded-lg border border-red-400/30">
            {error}
          </div>
        )}

        {/* <p className="text-xs opacity-75 mt-4 text-center">
          Al suscribirte, aceptas recibir emails sobre nuestras franquicias. 
          Puedes darte de baja en cualquier momento.
        </p> */}
      </div>

          {/* Beneficios adicionales */}
          {/* <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">¿Por qué elegir nuestra franquicia?</h3>
              <ul className="space-y-3 text-left text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Inversión inicial competitiva
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  ROI demostrable y atractivo
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Territorio exclusivo protegido
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Soporte continuo especializado
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lo que incluye el paquete</h3>
              <ul className="space-y-3 text-left text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  Licencia de marca registrada
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  Kit completo de apertura
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  Capacitación presencial
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  Asistencia en ubicación
                </li>
              </ul>
            </div>
          </div> */}

          {/* Información de contacto */}
          {/* <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">¿Tienes preguntas?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center gap-3 p-4 bg-white rounded-lg">
                <Phone className="h-8 w-8 text-blue-600" />
                <div className="text-center">
                  <p className="font-semibold text-gray-900">Teléfono</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 bg-white rounded-lg">
                <Mail className="h-8 w-8 text-blue-600" />
                <div className="text-center">
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">franquicias@tuempresa.com</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 bg-white rounded-lg">
                <MapPin className="h-8 w-8 text-blue-600" />
                <div className="text-center">
                  <p className="font-semibold text-gray-900">Oficina</p>
                  <p className="text-gray-600">Zapopan, Jalisco, México</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Franquicias;