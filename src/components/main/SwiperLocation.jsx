import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; //basic
import SwiperCore, { Navigation } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

const SwiperLodation = () => {
  const locationName = [
    "전체",
    "서울",
    "경기",
    "인천",
    "강원",
    "충북",
    "충남",
    "세종",
    "대전",
    "전북",
    "걍븍",
    "대구",
    "울산",
    "경남",
    "부산",
    "광주",
    "전남",
    "제주",
  ];

  const onClickLocationNameHandler = (locaionItem, index) => {
    console.log(locaionItem);
  };

  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={3}
      navigation={true}
      scrollbar={{ draggable: true }}
      breakpoints={{
        768: {
          slidesPerView: 7,
        },
      }}
    >
      <div>
        {locationName.map((itme, index) => (
          <SwiperSlide
            key={index}
            onClick={() => onClickLocationNameHandler(itme, index)}
          >
            {itme}
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default SwiperLodation;
