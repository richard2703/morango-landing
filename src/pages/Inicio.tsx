import '../App.css';
import BannerCarousel from '../components/homePage/banner';
import Cart from '../components/individuales/card';
import Ubicacion from "../components/homePage/ubicacion";
import ClientsSection from "../components/homePage/comentarios";
import MenuSection from "../components/homePage/menu";
import SocialMediaSection from "../components/homePage/redes";

// import banner from '../img/banner.jpg';
// import isologo from '../img/isotipoBlc.png';

const Inicio = () => {
  return (

//  <MainLayout>
<>
      {/* Banner Section */}
      <section>
        {/* <div style={sectionStyle} className="content-center">
          <img src={isologo} alt="Banner" style={isologoStyle} />
        </div> */}
        <BannerCarousel />
      </section>

      {/* Cards Section */}
      <section style={cardsStyle}>
        <Cart />
      </section>

      {/* Ubicación */}
      <section>
        <Ubicacion />
      </section>

      {/* Opiniones */}
      <section>
        <ClientsSection />
      </section>

      {/* Eslogan y menú */}
      <section>
        <MenuSection />
      </section>

      {/* Redes */}
      <section>
        <SocialMediaSection />
      </section>
      </>
  );
};
// var sectionStyle = {
//   width: "100%",
//   height: "600px",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   backgroundImage: `url(${banner})`

// };

// var isologoStyle = {
//   width: "200px",
//   height: "auto",
//   margin: "0 auto",
//   display: "block",
//   paddingTop: "50px",
//   paddingBottom: "50px"
// };

var cardsStyle = {
  backgroundColor: "#faf4f8",
  paddingTop: "50px",
  paddingBottom: "50px"
   };


export default Inicio;