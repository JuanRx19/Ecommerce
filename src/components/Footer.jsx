import "../assets/styles/Footer.css"

function Footer(){
  return(
    <div className="contenedor-footer">
      <div className="footer-web">
        <div className="card1">
          <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/payment.svg" alt="card1" />
          <h2>Paga con tarjeta o en efectivo</h2>
          <span>Con Mercado Pago, paga en cuotas y aprovecha la comodidad de financiación que te da tu banco, o hazlo con efectivo en puntos de pago. ¡Y siempre es seguro!</span>
          <br /><br /><a href="">Cómo pagar con Mercado Pago</a>
        </div>
        <div className="linea">
          
        </div>
        <div className="card2">
          <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/shipping.svg" alt="card2" />
          <h2>Envío gratis desde $ 60.000</h2>
          <span>Con solo estar registrado en Mercado Libre, tienes envíos gratis en miles de productos seleccionados.</span>
        </div>
        <div className="linea">

        </div>
        <div className="card3">
          <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/protected.svg" alt="card3" />
          <h2>Seguridad, de principio a fin</h2>
          <span>¿No te gusta? ¡Devuélvelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegido.</span>
          <br /><br /><a href="">Cómo te protegemos</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;