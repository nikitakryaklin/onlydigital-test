import styles from "./swiper.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { ReactNode, useRef, useState } from "react";
import { ArrowButton } from "../button/ArrowButton/ArrowButton";
import clsx from "clsx";

export function SwiperWrapper<T>({
  args,
  render,
}: {
  args: T[];
  render: (arg: T) => ReactNode;
}) {
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const [isActiveIndex, setIsActiveIndex] = useState(0);

  const swiperRef = useRef<SwiperCore | null>(null);

  const setCurrentIsStart = (isStart: boolean) => {
    setIsStart((prev) => (prev === isStart ? prev : isStart));
  };
  const setCurrentIsEnd = (isEnd: boolean) => {
    setIsEnd((prev) => (prev === isEnd ? prev : isEnd));
  };

  const nextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const prevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const onSlideChange = (swiper: SwiperCore) => {
    setCurrentIsStart(swiper.isBeginning);
    setCurrentIsEnd(swiper.isEnd);
    setIsActiveIndex(swiper.activeIndex);
  };

  return (
    <div className={styles.swiper}>
      <div className={styles.arrowButton}>
        {!isStart && (
          <ArrowButton variant="prev" onClick={prevSlide} isDisabled={false} />
        )}
      </div>

      {/*  */}
      <Swiper
        modules={[Pagination]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={2}
        spaceBetween={25}
        grabCursor={true}
        navigation={true}
        loop={false}
        pagination={{}}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 25,
            pagination: {
              enabled: true,
              clickable: true,
            },
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 45,
            pagination: false,
          },
        }}
        onSlideChange={(swiper) => onSlideChange(swiper)}
      >
        {args.map((arg, i) => (
          <SwiperSlide
            key={i}
            className={clsx(
              styles.swiperSlide,
              isActiveIndex === i && styles.swiperSlideIsActive
            )}
          >
            {render(arg)}
          </SwiperSlide>
        ))}
      </Swiper>

      {/*  */}
      <div className={styles.arrowButton}>
        {!isEnd && (
          <ArrowButton variant="next" onClick={nextSlide} isDisabled={false} />
        )}
      </div>
    </div>
  );
}
