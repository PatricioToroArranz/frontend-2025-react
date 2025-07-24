import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import entregaExpress from "../assets/images/entrega express.jpg";
import seguimientoTiempoReal from "../assets/images/seguimiento en tiempo real.jpg";
import solucionesEmpresariales from "../assets/images/soluciones empresariales.jpg";


const Home = () => {
  return (
    <>
      <main className="container mt-5 pt-5">
        <section id="home" className="section">
          <Carousel className="mb-5 rounded-lg overflow-hidden">
            <Carousel.Item>
              <img src={entregaExpress} className="d-block w-100" alt="Entrega Express" />
              <Carousel.Caption className="d-none d-md-block">
                <h5>Velocidad y Fiabilidad en Cada Entrega</h5>
                <p>Tus paquetes llegan a tiempo, siempre. Confía en FastGo para tus envíos más urgentes.</p>
                <Link to="/servicios" className="btn btn-primary mt-3">Nuestros Servicios</Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={seguimientoTiempoReal} className="d-block w-100" alt="Seguimiento en Tiempo Real" />
              <Carousel.Caption className="d-none d-md-block">
                <h5>Rastrea Tu Envío en Cada Paso</h5>
                <p>Con nuestra app, sabrás exactamente dónde está tu paquete, desde la recolección hasta la entrega.</p>
                <Link to="/servicios" className="btn btn-primary mt-3">Más Información</Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={solucionesEmpresariales} className="d-block w-100" alt="Soluciones Empresariales" />
              <Carousel.Caption className="d-none d-md-block">
                <h5>Soluciones Logísticas para Tu Negocio</h5>
                <p>Optimizamos tus entregas con planes personalizados para empresas de todos los tamaños.</p>
                <Link to="/contactenos" className="btn btn-primary mt-3">Contáctanos</Link>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          {/* Jumbotron de bienvenida */}
          <div className="jumbotron mt-5">
            <h1 className="display-4 text-primary">¡Bienvenido a FastGo!</h1>
            <p className="lead">Tu socio confiable para entregas rápidas y seguras en toda la ciudad. Con FastGo, tus envíos están en buenas manos.</p>
            <hr className="my-4" />
            <p>Ofrecemos un servicio de reparto eficiente, utilizando tecnología de punta para garantizar la puntualidad y el seguimiento en tiempo real de cada paquete. Desde documentos urgentes hasta paquetes de gran volumen, FastGo es la solución.</p>
            <Link className="btn btn-primary btn-lg" to="/sobre-nosotros" role="button">Conoce Más</Link>
          </div>

          {/* Tarjetas de características */}
          <div className="row text-center my-5">
            <div className="col-md-4 mb-4">
              <div className="card p-3">
                <h4 className="text-primary">Entrega Rápida</h4>
                <p>Llegamos a tu destino en tiempo récord.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card p-3">
                <h4 className="text-primary">Seguimiento en Vivo</h4>
                <p>Controla tu envío en cada etapa del camino.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card p-3">
                <h4 className="text-primary">Servicio Confiable</h4>
                <p>Profesionalismo y seguridad garantizada.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-3 mb-md-0">
              <p>&copy; 2025 FastGo. Todos los derechos reservados.</p>
            </div>
            <div className="col-md-6">
              <div className="social-icons">
                <a href="#" className="mr-3" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="mr-3" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" className="mr-3" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;