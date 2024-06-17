import "../assets/styles/Cardofert.css";

function Cardofert(props) {
  return (
    <div className="contenedor-card-ofert">
      <div className="contenedor-mid-ofert">
        <img src={props.url} alt="img-cont" className="img-mid-ofert"/>
      </div>
      <div className="contenedor-data-ofert">
        <div className="product-title">
          {props.titulo}
        </div>
        <div className="product-price">
          <p><span className="original-price">{props.pre}</span><br />
          <span className="discounted-price">{props.act}</span>
          <span className="discount">{props.disc}</span></p>
        </div>
        <div className="installments">
          en {props.cuotas}
        </div>
        <div className="free-shipping">
          Envío gratis <span className="full">FULL</span>
        </div>
      </div>
    </div>
  );
}

export default Cardofert;
