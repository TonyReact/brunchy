import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import Data from "../../../data.json";
import Item from "./item";

export default function Carousel({handleClick}) {

  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {Data && Data.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Item item={item} handleClick={handleClick} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}