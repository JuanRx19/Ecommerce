import "../assets/styles/Slidecards.css";
import Card from "./Card";
function Slidecards(){
  const cardsData = [
    { titulo: 'Ingresa a tu cuenta', descripcion: 'Disfruta de ofertas y compra sin límites', boton: 'Ingresar a tu cuenta', url: 'https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/registration-da.svg'},
    { titulo: 'Ingresa tu ubicación', descripcion: 'Consulta costos y tiempos de entrega', boton: 'Ingresar ubicación', url: 'https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/location.svg'},
    { titulo: 'Medios de pago', descripcion: 'Paga tus compras de forma rápida y segura', boton: 'Conocer medios de pago', url: 'https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/payment-methods.svg'},
    { titulo: 'Menos de $40.000', descripcion: 'Descubre productos con precios bajos', boton: 'Mostrar productos', url: 'https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/low-price-product.svg'}
  ];

  return(
    <div className="contenedor-slidecards">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          titulo={card.titulo}
          descripcion={card.descripcion}
          boton={card.boton}
          url={card.url}
        />
      ))}
    </div>
  );
}

export default Slidecards;