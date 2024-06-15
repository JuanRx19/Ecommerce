import "../assets/styles/Navbar.css";
import logo from "../assets/img/logo.png";
import promo from "../assets/img/promo.png";
import cart from "../assets/img/shopping-cart.svg";
function Navbar() {
  return (
    <div className="contenedor-principal">
      <div className="contenedor-data">
        <img src={logo} alt="logo" className="logo" />
        <div className="contenedor-navegacion">
          <div className="contenedor-search">
            <input
              type="text"
              placeholder="Buscar productos, marcas y más..."
              className="search"
            />
          </div>
            <ul className="lista-ul">
              <li className="lista-li">
                <a href="#categorias" className="opcion">
                  Categorías
                </a>
              </li>
              <li className="lista-li">
                <a href="#ofertas" className="opcion">
                  Ofertas
                </a>
              </li>
              <li className="lista-li">
                <a href="#historial" className="opcion">
                  Historial
                </a>
              </li>
              <li className="lista-li">
                <a href="#supermercado" className="opcion">
                  Supermercado
                </a>
              </li>
              <li className="lista-li">
                <a href="#moda" className="opcion">
                  Moda
                </a>
              </li>
              <li className="lista-li">
                <a href="#vender" className="opcion">
                  Vender
                </a>
              </li>
              <li className="lista-li">
                <a href="#ayuda" className="opcion">
                  Ayuda/PQR
                </a>
              </li>
            </ul>
        </div>
        <div className="contenedor-account">
          <img src={promo} alt="promo" className="promo" />
          <ul className="lista-ul-account">
                <li className="lista-li-account">
                  <a href="#categorias" className="opcion">
                    Crea tu cuenta
                  </a>
                </li>
                <li className="lista-li-account">
                  <a href="#ofertas" className="opcion">
                    Ingresa
                  </a>
                </li>
                <li className="lista-li-account">
                  <a href="#historial" className="opcion">
                    Mis compras
                  </a>
                </li>
                <li className="lista-li-account">
                  <a href="#supermercado" className="opcion">
                  <img src={cart} alt="cart" className="cart" />
                  </a>
                </li>
              </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
