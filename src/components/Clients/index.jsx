
import "./Clients.css"
import {Swiper,SwiperSlide} from 'swiper/react'
import { Pagination,Autoplay } from 'swiper/modules'
import "swiper/css"
import "swiper/css/pagination"
import { clients } from '../../data'

const Clients = () => {
  return (
    <section id='clients'>
      <div className="container">
        <h1 className="title">
          My <span className="text__gradient">Clients</span>
        </h1>
         <h3 className="sub__title">Testimonies</h3>

        <Swiper
         className='clients__container'
         spaceBetween={40}
         autoplay={{
          delay:4000,
          disableOnInteraction:false,
          pauseOnMouseEnter:true,
         }}
         loop={true}
         pagination={{clickable:true}}
         modules={[Pagination,Autoplay]}
         slidesPerView={1}
         breakpoints={{
          900:{
            slidesPerView:2,
          }
         }}
        >
             {
              clients.map(({image,name,review},index)=>(
                <SwiperSlide className='client__card' key={index}>
                  <div className="primary__effect picture">
                    <img src={image} alt={name} />
                  </div>
                  <div className="details">
                    <h3 className="color__primary">{name}</h3>
                    <p className="text__muted client__review">{review}</p>
                  </div>
                </SwiperSlide>
              ))
             }
        </Swiper>
      </div>
    </section>
  )
}

export default Clients
