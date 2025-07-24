import React from 'react';
import equipoTrabajo from '../assets/images/equipo trabajo.jpg';
import directorGeneral from '../assets/images/director general.jpg';
import directorOperaciones from '../assets/images/director operaciones.jpg';
import directorTecnologia from '../assets/images/director tegnologia.jpg';


const SobreNosotros = () => (
  <>
    <main className="container mt-5 pt-5">
      <section id="about" className="section">
        <h2 className="text-center text-primary mb-5">Sobre FastGo</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <img src={equipoTrabajo} alt="Equipo FastGo" className="img-fluid rounded-lg shadow-sm" />
          </div>
          <div className="col-md-6 mb-4">
            <h3>Nuestra Historia</h3>
            <p>Fundada en 2020, FastGo nació de la necesidad de optimizar las entregas urbanas en un mundo cada vez más acelerado. Iniciamos con un pequeño equipo de repartidores y una visión clara: revolucionar la logística. Desde entonces, hemos crecido exponencialmente, expandiendo nuestra flota y adoptando tecnologías innovadoras para ofrecer un servicio inigualable.</p>
            <p>Nos enorgullece ser un pilar fundamental para empresas y particulares que buscan eficiencia y rapidez en sus envíos. Creemos en la importancia de cada entrega y en la conexión que generamos entre personas y negocios.</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4 mb-4">
            <h4 className="text-primary">Misión</h4>
            <p>Ser la empresa líder en soluciones de entrega express urbana, brindando un servicio ágil, seguro y confiable que supere las expectativas de nuestros clientes, apoyándonos en la innovación tecnológica y un equipo comprometido.</p>
          </div>
          <div className="col-md-4 mb-4">
            <h4 className="text-primary">Visión</h4>
            <p>Transformar la logística, estableciendo nuevos estándares de eficiencia y sostenibilidad, y expandiendo nuestra presencia para conectar cada rincón de la ciudad, facilitando el comercio y la vida diaria de nuestros usuarios.</p>
          </div>
          <div className="col-md-4 mb-4">
            <h4 className="text-primary">Valores</h4>
            <ul>
              <li><strong>Rapidez:</strong> Nos comprometemos a entregar en el menor tiempo posible.</li>
              <li><strong>Fiabilidad:</strong> Garantizamos la seguridad y la integridad de cada envío.</li>
              <li><strong>Innovación:</strong> Adoptamos nuevas tecnologías para mejorar continuamente.</li>
              <li><strong>Servicio al Cliente:</strong> Ponemos al cliente en el centro de todas nuestras operaciones.</li>
              <li><strong>Sostenibilidad:</strong> Buscamos prácticas que minimicen nuestro impacto ambiental.</li>
            </ul>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 text-center">
            <h4 className="text-primary mb-4">Nuestro Equipo</h4>
            <div className="row justify-content-center">
              <div className="col-md-3 col-sm-6 mb-4">
                <div className="card p-3">
                  <img src={directorGeneral} className="rounded-circle mx-auto d-block mb-3" alt="DG" />
                  <h5>Patricio Toro</h5>
                  <p className="text-muted">Director General</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-4">
                <div className="card p-3">
                  <img src={directorOperaciones} className="rounded-circle mx-auto d-block mb-3" alt="DO" />
                  <h5>Matías Mora</h5>
                  <p className="text-muted">Director de Operaciones</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-4">
                <div className="card p-3">
                  <img src={directorTecnologia} className="rounded-circle mx-auto d-block mb-3" alt="DT" />
                  <h5>Giovanni Di Rosa</h5>
                  <p className="text-muted">Director de Tecnología</p>
                </div>
              </div>
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

export default SobreNosotros;
