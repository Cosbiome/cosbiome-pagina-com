import React from "react"
import Link from "next/link"
import ButtonsSocial from "../ButtonsSocial"

const NavigationBar = (): JSX.Element => {
  return (
    <nav
      style={{ background: "white" }}
      className="navbar navbar-light navbar-expand-md sticky-top"
    >
      <div className="container">
        <Link href="/">
          <img
            style={{ cursor: "pointer" }}
            className="navigationbar--img"
            src="https://firebasestorage.googleapis.com/v0/b/cosbiome-bcdf4.appspot.com/o/COSBIOME-PNG_altaresoluci%C3%B3n.png?alt=media&token=65b36fec-4a23-4162-b01a-2bb7e64f20f3"
          />
        </Link>

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
                <Link href="/equipos">
                  <a className="dropdown-item">General</a>
                </Link>
                <Link href="/equipos/facial">
                  <a className="dropdown-item" href="#">
                    Facial
                  </a>
                </Link>
                <Link href="/equipos/corporal">
                  <a className="dropdown-item" href="#">
                    Corporal
                  </a>
                </Link>
                <Link href="/equipos/laser">
                  <a className="dropdown-item" href="#">
                    Laser
                  </a>
                </Link>
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
            <li className="nav-item">
              <ButtonsSocial
                className="navigationbar--social--buttons"
                displayButton="inline-block"
              />
            </li>
          </ul>
        </div>
        <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1">
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  )
}

export default NavigationBar
