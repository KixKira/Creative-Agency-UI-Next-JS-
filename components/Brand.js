import React from "react";
import { Title } from "./common/Title";
import { brand } from "@/assets/data/dummydata";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Brand = () => {
  return (
    <section className="brand">
      <div className="container">
        <div className="heading-title">
          <Title title="JU WE TRUST: Marcas que han trabajado con nosotros" />
        </div>
        <div className="brand-content py">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              480: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 60,
              },
            }}
            className="brand-slider"
          >
            {brand.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="images">
                  <img
                    src={item.cover}
                    alt={`Brand ${item.id}`}
                    width="100"
                    height="100"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                      maxWidth: "150px",
                      margin: "0 auto",
                      display: "block",
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Brand;
