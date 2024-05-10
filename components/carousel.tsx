"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Image from "next/image";

export default function Carousel() {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      slidesPerView={"auto"}
      centeredSlides
      className="h-fit w-[300px]"
    >
      {Array.from("abcdefafecf").map((_, index) => (
        <SwiperSlide key={index} className="rounded-md">
          <div className="h-full bg-yellow-500 flex justify-center items-center">
            <Image src={"/dog.jpg"} alt="dog" width={300} height={300} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
