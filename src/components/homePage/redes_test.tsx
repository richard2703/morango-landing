// import React from 'react';

const SocialMediaComponent = () => {
  // Datos de ejemplo para los últimos posts
  const lastPosts = {
    tiktok: {
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=300&fit=crop&crop=center",
      title: "Tendencias de baile 2024",
      views: "2.1M"
    },
    facebook: {
      thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=300&fit=crop&crop=center",
      title: "Conectando comunidades",
      likes: "8.5K"
    },
    instagram: {
      thumbnail: "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=300&h=300&fit=crop&crop=center",
      title: "Momentos perfectos",
      likes: "12.3K"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 to-green-700 p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
        <div className="flex items-center justify-between gap-8">
          
          {/* Lado Izquierdo: Título y Redes Sociales */}
          <div className="flex-1 space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-6">Síguenos en:</h1>
              
              {/* Teléfono con app */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-32 h-56 bg-white rounded-3xl p-4 shadow-xl">
                    <div className="flex justify-center mb-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-400 via-pink-400 to-purple-400 rounded-2xl p-4 mb-3">
                      <div className="text-2xl font-bold text-green-800 text-center">ñn</div>
                    </div>
                    <div className="flex justify-center space-x-1">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Íconos de Redes Sociales */}
            <div className="flex justify-center space-x-6">
              <a href="#" className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-xl hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="font-bold italic">f</span>
              </a>
              <a href="#" className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="font-bold">f</span>
              </a>
              <a href="#" className="w-16 h-16 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white text-xl hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="font-bold">□</span>
              </a>
            </div>
          </div>
          
          {/* Lado Derecho: Últimos Posts */}
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-bold text-white text-center mb-6">Últimos Posts</h2>
            
            {/* TikTok Post */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/30 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <img 
                  src={lastPosts.tiktok.thumbnail} 
                  alt="TikTok post" 
                  className="w-16 h-16 rounded-xl object-cover shadow-md"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-6 h-6 bg-black rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold italic">f</span>
                    </div>
                    <span className="text-white/80 text-sm">TikTok</span>
                  </div>
                  <p className="text-white font-medium">{lastPosts.tiktok.title}</p>
                  <p className="text-white/70 text-sm">{lastPosts.tiktok.views} views</p>
                </div>
              </div>
            </div>
            
            {/* Facebook Post */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/30 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <img 
                  src={lastPosts.facebook.thumbnail} 
                  alt="Facebook post" 
                  className="w-16 h-16 rounded-xl object-cover shadow-md"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">f</span>
                    </div>
                    <span className="text-white/80 text-sm">Facebook</span>
                  </div>
                  <p className="text-white font-medium">{lastPosts.facebook.title}</p>
                  <p className="text-white/70 text-sm">{lastPosts.facebook.likes} likes</p>
                </div>
              </div>
            </div>
            
            {/* Instagram Post */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/30 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <img 
                  src={lastPosts.instagram.thumbnail} 
                  alt="Instagram post" 
                  className="w-16 h-16 rounded-xl object-cover shadow-md"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">□</span>
                    </div>
                    <span className="text-white/80 text-sm">Instagram</span>
                  </div>
                  <p className="text-white font-medium">{lastPosts.instagram.title}</p>
                  <p className="text-white/70 text-sm">{lastPosts.instagram.likes} likes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaComponent;