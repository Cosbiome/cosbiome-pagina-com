import React from "react";

const NavigationBar = (): JSX.Element => {
  return (
    <nav
      style={{ background: "white" }}
      className="navbar navbar-light navbar-expand-md sticky-top"
    >
      <div className="container">
        <img src="https://firebasestorage.googleapis.com/v0/b/cosbiome-bcdf4.appspot.com/o/COSBIOME-PNG_altaresoluci%C3%B3n.png?alt=media&token=65b36fec-4a23-4162-b01a-2bb7e64f20f3" />
        <button
          data-toggle="collapse"
          className="navbar-toggler"
          data-target="#navcol-1"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="nav navbar-nav float-left ml-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Cursos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Productos
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="dropdown-toggle nav-link"
                data-toggle="dropdown"
                aria-expanded="false"
                href="#"
              >
                Equipos
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  First Item
                </a>
                <a className="dropdown-item" href="#">
                  Second Item
                </a>
                <a className="dropdown-item" href="#">
                  Third Item
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Escuela
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Contacto
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Aviso de Privacidad
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
