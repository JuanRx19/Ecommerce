import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../assets/styles/Slide.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Slide() {
  return (
    <div className='contenedor-slide'>
      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://http2.mlstatic.com/D_NQ_883927-MLA76882755745_062024-OO.webp" alt="img2" className='slide-img'/></SwiperSlide>
        <SwiperSlide><img src="https://http2.mlstatic.com/D_NQ_603230-MLA74675320600_022024-OO.webp" alt="img2" className='slide-img'/></SwiperSlide>
        <SwiperSlide><img src="https://http2.mlstatic.com/D_NQ_818691-MLA76739165708_062024-OO.webp" alt="img2" className='slide-img'/></SwiperSlide>
        <SwiperSlide><img src="https://http2.mlstatic.com/D_NQ_857712-MLA76883455989_062024-OO.webp" alt="img2" className='slide-img'/></SwiperSlide>
        <SwiperSlide><img src="https://http2.mlstatic.com/D_NQ_960788-MLA76575370773_052024-OO.webp" alt="img2" className='slide-img'/></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slide;