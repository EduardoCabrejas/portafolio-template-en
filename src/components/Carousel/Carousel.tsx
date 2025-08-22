"use client";
import React, { useCallback, useEffect, useState, FC } from 'react';
import Image from 'next/image';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { NextButton, PrevButton, usePrevNextButtons } from './Arrows/ArrowButtons';
import { useTheme } from "@/context/themeContext";
import { Slide } from "./utils/utils";
import "./styles.css";

type CarouselProps = {
  slides: Slide[];
  options?: EmblaOptionsType;
};

const Carousel: FC<CarouselProps> = ({ slides, options }) => {
  const { theme } = useTheme();
  const buttonClass = theme === 'light' ? 'navButtonLight' : 'navButtonDark';
    
  const autoScrollOptions = {
    delay: 3000,
    playOnInit: true,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll(autoScrollOptions),
  ]);
  const [isPlaying, setIsPlaying] = useState(false);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoScroll = emblaApi?.plugins()?.autoScroll;
      if (!autoScroll) return;

      const resetOrStop =
        autoScroll.options.stopOnInteraction === false
          ? autoScroll.reset
          : autoScroll.stop;

      resetOrStop();
      callback();
    },
    [emblaApi]
  );

  const toggleAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    const playOrStop = autoScroll.isPlaying()
      ? autoScroll.stop
      : autoScroll.play;
    playOrStop();
  }, [emblaApi]);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    setIsPlaying(autoScroll.isPlaying());
    emblaApi
      .on('autoScroll:play', () => setIsPlaying(true))
      .on('autoScroll:stop', () => setIsPlaying(false))
      .on('reInit', () => setIsPlaying(autoScroll.isPlaying()));
  }, [emblaApi]);

  return (
    <div className="container">
      <div className="overflow-hidden rounded-xl h-[6rem] bg-[color:var(--viewBg)] md:h-[16rem]" ref={emblaRef}>
        <div className="flex mt-4 md:mt-8 ml-4" style={{ touchAction: "pan-y pinch-zoom" }}>
        {slides.map((slide, index) => (
            <div className="bg-[color:var(--slideBg)] rounded-[2rem] m-6 ml-0 mr-6 p-2 flex justify-center" style={{ transform: "translate3d(0, 0, 0)" }} key={index}>
              <div className="relative group w-[2rem] h-[2rem] md:w-[6rem] md:h-[6rem]">
                <Image src={slide.src} alt={`Tech ${slide.title}`} />
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 md:mb-8
                bg-black text-white text-sm text-center px-2 py-1 w-max min-w-[6rem] rounded opacity-0
                group-hover:opacity-100 group-hover:translate-y-[-4px]
                transition-all duration-300 pointer-events-none z-10">
                  {slide.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row justify-center gap-4 mt-2 md:mt-8">
          <PrevButton
            className={buttonClass}
            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            className={buttonClass}
            onClick={() => onButtonAutoplayClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        <button className={buttonClass} onClick={toggleAutoplay} type="button">
          {isPlaying ? 'Stop' : 'Start'}
        </button>
      </div>
    </div>
  );
};

export default Carousel;