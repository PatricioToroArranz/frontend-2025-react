import React from 'react';
import entregaUrgente from '../assets/images/entrega urgente.jpg';
import entregaProgramada from '../assets/images/entrega programada.jpg';
import rastreoTiempoReal from '../assets/images/rastreo tiempo real.jpg';
import servicioCorporativo from '../assets/images/servicio corporativo.jpg';
import logisticaInversa from '../assets/images/logistica inversa.jpg';
import embalajeSeguro from '../assets/images/embalaje seguro.jpg';


const Servicios = () => (
  <>
    <main className="container mt-5 pt-5">
      <section id="services" className="section">
        <h2 className="text-center text-primary mb-5">Nuestros Servicios</h2>
        <div className="row">
          {/* Servicio 1 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img src={entregaUrgente} className="card-img-top" alt="Entrega Urgente" />
              <div className="card-body">
                <h4 className="card-title text-primary">Entrega Urgente</h4>
                <p className="card-text">Ideal para documentos y paquetes que necesitan llegar en cuestión de horas. Priorizamos tu envío para una máxima rapidez.</p>
                <h5 className="text-success">$15.000 CLP</h5>
                <p className="text-muted"><small>Condiciones: Dentro de 3 horas en radio urbano.</small></p>
              </div>
            </div>
          </div>
          {/* Servicio 2 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img src={entregaProgramada} className="card-img-top" alt="Entrega Programada" />
              <div className="card-body">
                <h4 className="card-title text-primary">Entrega Programada</h4>
                <p className="card-text">Define la fecha y hora exacta de entrega. Perfecto para logística de eventos o coordinaciones especiales.</p>
                <h5 className="text-success">$10.000 CLP</h5>
                <p className="text-muted"><small>Condiciones: Flexibilidad horaria de 2 horas.</small></p>
              </div>
            </div>
          </div>
          {/* Servicio 3 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img src={rastreoTiempoReal} className="card-img-top" alt="Rastreo en Tiempo Real" />
              <div className="card-body">
                <h4 className="card-title text-primary">Rastreo en Tiempo Real</h4>
                <p className="card-text">Acceso constante al estado y ubicación de tu envío a través de nuestra plataforma web y móvil.</p>
                <h5 className="text-success">Gratis con cualquier servicio</h5>
                <p className="text-muted"><small>Condiciones: Requiere registro en la plataforma.</small></p>
              </div>
            </div>
          </div>
          {/* Servicio 4 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img src={servicioCorporativo} className="card-img-top" alt="Servicio Corporativo" />
              <div className="card-body">
                <h4 className="card-title text-primary">Servicio Corporativo</h4>
                <p className="card-text">Planes personalizados para empresas con alto volumen de envíos, incluyendo tarifas preferenciales y soporte dedicado.</p>
                <h5 className="text-success">Consultar tarifas</h5>
                <p className="text-muted"><small>Condiciones: Contrato mínimo de 6 meses.</small></p>
              </div>
            </div>
          </div>
          {/* Servicio 5 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img src={logisticaInversa} className="card-img-top" alt="Logística Inversa" />
              <div className="card-body">
                <h4 className="card-title text-primary">Logística Inversa</h4>
                <p className="card-text">Gestión eficiente de devoluciones y recolecciones, facilitando el proceso para tus clientes y tu negocio.</p>
                <h5 className="text-success">$12.000 CLP</h5>
                <p className="text-muted"><small>Condiciones: Sujeto a disponibilidad de zona.</small></p>
              </div>
            </div>
          </div>
          {/* Servicio 6 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img src={embalajeSeguro} className="card-img-top" alt="Embalaje Seguro" />
              <div className="card-body">
                <h4 className="card-title text-primary">Embalaje Seguro</h4>
                <p className="card-text">Ofrecemos opciones de embalaje profesional para asegurar que tus productos lleguen intactos a su destino.</p>
                <h5 className="text-success">$5.000 - $20.000 CLP</h5>
                <p className="text-muted"><small>Condiciones: Varía según el tamaño y tipo de embalaje.</small></p>
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

export default Servicios;
