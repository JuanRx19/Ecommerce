import "../assets/styles/Slidecards.css";
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Card from "./Card";

function Slidecards(){
  const cardsData = [
    { titulo: 'Ingresa a tu cuenta', descripcion: 'Disfruta de ofertas y compra sin límites', boton: 'Ingresar a tu cuenta', url: 'https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/registration-da.svg'},
    { titulo: 'Ingresa tu ubicación', descripcion: 'Consulta costos y tiempos de entrega', boton: 'Ingresar ubicación', url: 'https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/location.svg'},
    { titulo: 'Medios de pago', descripcion: 'Paga tus compras de forma rápida y segura', boton: 'Conocer medios de pago', url: 'https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/payment-methods.svg'},
    { titulo: 'Menos de $40.000', descripcion: 'Descubre productos con precios bajos', boton: 'Mostrar productos', url: 'https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/low-price-product.svg'},
    { titulo: 'Compra protegida', descripcion: 'Puedes devolver tu compra gratis', boton: 'Cómo funciona', url: 'https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/buy-protected.svg'},
    { titulo: 'Tiendas oficiales', descripcion: 'Encuentra tus marcas preferidas', boton: 'Mostrar tiendas', url: 'https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/store-official.svg'},
    { titulo: 'Nuestras categorías', descripcion: 'Encuentra celulares, ropa, inmuebles y más', boton: 'Ir a Categorías', url: 'https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/categories.svg'},
    { titulo: '¿Necesitas ayuda?', descripcion: 'Resuelve tus dudas sobre compras o ventas', boton: 'Ir a Ayuda', url: 'https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/help-da.svg'}
  ];

  return(
    <div className="contenedor-slidecards">
      <Swiper
        slidesPerView={5}
        spaceBetween={7}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
      {cardsData.map((card, index) => (
         <SwiperSlide key={index}>
          <Card
            
            titulo={card.titulo}
            descripcion={card.descripcion}
            boton={card.boton}
            url={card.url}
          />
        </SwiperSlide>
      ))}
      </Swiper>
      
    </div>
  );
}

export default Slidecards;