import "../assets/styles/Ofertas.css";
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Cardofert from "./Cardofert";

function Ofertas(){
  const dataOfferts = [
    {url: "https://http2.mlstatic.com/D_Q_NP_2X_941189-MLA52773387142_122022-AB.webp", titulo: "Lavadora Secadora Samsung Con Quickdrive, 12.5kl Color Plateado 120V", pre: "$3.609.900", act: "$2.369.900", disc: "34% OFF", cuotas: "12x $ 197.491"},
    {url: "https://http2.mlstatic.com/D_Q_NP_2X_883586-MCO70875931646_082023-AB.webp", titulo: "Lavadora Secadora Samsung Con Quickdrive, 12.5kl Color Plateado 120V", pre: "$3.609.900", act: "$2.369.900", disc: "34% OFF", cuotas: "12x $ 197.491"},
    {url: "https://http2.mlstatic.com/D_Q_NP_2X_941189-MLA52773387142_122022-AB.webp", titulo: "Lavadora Secadora Samsung Con Quickdrive, 12.5kl Color Plateado 120V", pre: "$3.609.900", act: "$2.369.900", disc: "34% OFF", cuotas: "12x $ 197.491"},
    {url: "https://http2.mlstatic.com/D_Q_NP_2X_883586-MCO70875931646_082023-AB.webp", titulo: "Lavadora Secadora Samsung Con Quickdrive, 12.5kl Color Plateado 120V", pre: "$3.609.900", act: "$2.369.900", disc: "34% OFF", cuotas: "12x $ 197.491"},
    {url: "https://http2.mlstatic.com/D_Q_NP_2X_941189-MLA52773387142_122022-AB.webp", titulo: "Lavadora Secadora Samsung Con Quickdrive, 12.5kl Color Plateado 120V", pre: "$3.609.900", act: "$2.369.900", disc: "34% OFF", cuotas: "12x $ 197.491"},
    {url: "https://http2.mlstatic.com/D_Q_NP_2X_883586-MCO70875931646_082023-AB.webp", titulo: "Lavadora Secadora Samsung Con Quickdrive, 12.5kl Color Plateado 120V", pre: "$3.609.900", act: "$2.369.900", disc: "34% OFF", cuotas: "12x $ 197.491"},
    {url: "https://http2.mlstatic.com/D_Q_NP_2X_941189-MLA52773387142_122022-AB.webp", titulo: "Lavadora Secadora Samsung Con Quickdrive, 12.5kl Color Plateado 120V", pre: "$3.609.900", act: "$2.369.900", disc: "34% OFF", cuotas: "12x $ 197.491"},
    {url: "https://http2.mlstatic.com/D_Q_NP_2X_883586-MCO70875931646_082023-AB.webp", titulo: "Lavadora Secadora Samsung Con Quickdrive, 12.5kl Color Plateado 120V", pre: "$3.609.900", act: "$2.369.900", disc: "34% OFF", cuotas: "12x $ 197.491"}
  ];
  return(
  <div className="contenedor-ofertas">
    <div className="contenedor-dailyofert">
      <h3 className="title-card">Oferta del día</h3>
      <div className="contenedor-oferta-img">
        <img src="https://http2.mlstatic.com/D_Q_NP_2X_825609-MLU76938627205_062024-V.webp" alt="imgofert"/>
      </div>
        <div className="contenedor-data-ofert">
        <div className="product-title">
          Hidrolavadora Electrica Femmto HLT203-1400-AC127V  1400w Alta presion 1600 Psi Negro y amarrillo  127V 1400 W
        </div>
        <div className="product-price">
          <p><span className="original-price">$399.900</span><br />
          <span className="discounted-price">$205.588</span>
          <span className="discount">48% OFF</span></p>
        </div>
        <div className="installments">
          en 36x $5.710
        </div>
        <div className="free-shipping">
          Envío gratis <span className="full">FULL</span>
        </div>
      </div>
    </div>
    <div className="contenedor-ofertasvarias">
      <h3 className="title-card">Ofertas</h3>
      <div className="contenedor-cards-data">
      <Swiper
        slidesPerView={4}
        spaceBetween={6}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 7,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 7,
            spaceBetween: 10,
          },
          '@1.00': {
            slidesPerView: 7,
            spaceBetween: 10,
          },
          '@1.50': {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper2"
      >
      {dataOfferts.map((card, index) => (
         <SwiperSlide key={index}>
          <Cardofert
          url={card.url}
          titulo={card.titulo}
          pre={card.pre}
          act={card.act}
          disc = {card.disc}
          cuotas = {card.cuotas}
        />
        </SwiperSlide>
      ))}
      </Swiper>
      </div>
    </div>
  </div>
  );
}

export default Ofertas;