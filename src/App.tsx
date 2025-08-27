import MainLayout from "./layouts/MainLayout";
import './App.css';
import Cart from './components/individuales/card';

import banner from './img/banner.jpg';
import isologo from './img/isotipoBlc.png';


function App() {
  return (
    <html>
      <head>
        <title>Morango</title>
      </head>
      <body className="bg-gray-100 text-gray-900">
        <MainLayout>
          {/* Banner Section */}
          <section >
            <div style={sectionStyle} className="content-center" >
              <img src={isologo} alt="Banner" style={isologoStyle} />
            </div>
          </section>

          {/* // Cards Section */}
          <section className="py-12">
            <Cart />
          </section>

          {/* seccion de ubicacione */}

          {/* seccion de opiniones */}

          {/* seccion de eslogan */}

          {/* seccion de menu */}

          {/* seccion de redes */}

        </MainLayout>
      </body>
    </html>

  );
}

var sectionStyle = {
  width: "100%",
  height: "600px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundImage: `url(${banner})`

};

var isologoStyle = {
  width: "200px",
  height: "auto",
  margin: "0 auto",
  display: "block",
  paddingTop: "50px",
  paddingBottom: "50px"
};

export default App;