import logo from './img/WORTEV LOGO.svg';
import team from './img/team.png';
import './App.css';

function App() {
  return (
    <div>
      <div class="container-fluid">
        <div class="row seccion_1">
          <div class="col-lg-6">

            <div class="col-fluis logo">
              <img src={logo} alt="logo-wortev"/>
            </div>

            <div class="colfluid copys-container">
              <p class="texto-inicio">Hola emprendedor</p>
              <h1>Lirem ipsum sit amet</h1>
              <h2>Lorem ipsum dolor sit amet, <br/> consected adipsiong ed</h2>
            </div>
          </div>

          <div class="col-md-6 seccion-form">
            
            <center>
              <section class="seccion form">
                <div class="container contenedor">
                  <div class="">
                    <div class="card-wrapper">
                      
                      <div class="menu">
                        <ul>
                          <u></u>
                        </ul>
                      </div>

                      <div class="card fat">
                        <div class="card-body">
                          <h4 class="card-title">Lorem ipsum sit amet</h4>
                          <form method="POST" class="my-login-validation" novalidate="">
                            <div class="form-grup">
                              <label class="labelf" for="email">Correo:</label>
                              <input id="email" type="email" class="form-control" name="email" value="" required autofocos/>
                              <div class="invalid-feedback">
                                Tu correo es invalido
                              </div>
                            </div>

                            <div class="form-group">
                              <label class="labelf" for="password">Contraseña:
                                <a href="forgot.html" class="float-right link">
                                  Contraseña olvidada?
                                </a>
                              </label>
                              <input id="password" type="password" class="form-control" name="password" required data-eye/>
                              <div class="invalid-feedback">
                                Tu contraseña debe ser minimo de 8 caracteres
                              </div>
                            </div>

                            <div class="mt-4 text-center">
                              <i class="fab fa-facebook-square social-icon fb"></i>
                              <i class="fab fa-twitter social-icon tw"></i>
                              <i class="fab fa-google social-icon gm"></i>
                              <div>
                                <a href="register.html">Crear nuevo</a>
                              </div>
                            </div>

                            <div class="form-group m-0">
                              <button type="submit btn-login" class="btn btn-primary btn-block btn1">
                                Iniciar
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </center>
          </div>
        </div>
      </div>
      <div class="container-fluid">
      </div>
      <div class="row">
        <div class="col-6 col1">
        </div>
        <div class="col-6 col2 fix_padding">
          <div class=" d1">
            <h3>Hola emprendedor</h3>
          </div>
          <div class="d2">
            <p>Una plataforma para emprendedores impulsada por expertos</p>
            <a href="#" class="btn1">Iniciar</a>
          </div>
        </div>
      </div>
      <div>
        <h3>
        </h3>
      </div>
      <section class="info-section bg-light text-muted py-5 " id="info-section ">
        <div class="container ">
          <div class="row ">
            <div class="col-md-6 ">
              <h3 class="h3s3">con los beneficios de una aceleradora</h3>
                <p class="ps3">
                  Escala tu negocio con una visión más clara de la mano de expertos, de forma gratuita.
                </p>
            </div>
            <div class="col-md-6">
              <img src={team} alt=" " class="img-fluid align-self-center rouded-circle"/>
            </div>
          </div>
        </div>
      </section>
      <iframe width="100%" height="610px" src="https://www.youtube.com/embed/RvRhUHTV_8k">
      </iframe>
    </div>
  );
}

export default App;
