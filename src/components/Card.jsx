import "../assets/styles/Card.css";

function Card(props) {
  return (
    <div className="contenedor-card">
      <h4 className="title-card">{props.titulo}</h4>
      <div className="contenedor-mid">
        <img src={props.url} alt="img-cont" className="img-mid"/>
      </div>
      <h5 className="footer-card">{props.descripcion}</h5>
      <div className="contenedor-button">
        <button className="button-card">{props.boton}</button>
      </div>
    </div>
  );
}

export default Card;
