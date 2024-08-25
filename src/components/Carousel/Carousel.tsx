"use client";
import React, { useCallback, useEffect, useState } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { NextButton, PrevButton, usePrevNextButtons } from './Arrows/ArrowButtons';
import Image, { StaticImageData } from 'next/image';
import { useTheme } from "@/context/themeContext";
import "./styles.css";

type PropType = {
  slides: { src: StaticImageData; title: string }[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = ({ slides, options }) => {
  const { theme } = useTheme();
  const buttonClass = theme === 'light' ? 'navButtonLight' : 'navButtonDark';
  
  const autoScrollOptions = {
    delay: 2000,
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
      <div className="viewport" ref={emblaRef}>
        <div className="child_container">
        {slides.map((slide, index) => (
            <div className="slide" key={index}>
              <div className="imageWrapper" title={slide.title}>
                <Image
                  src={slide.src}
                  alt={`Technology ${slide.title}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="controls">
        <div className='buttons'>
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
        </div>
        <button className={buttonClass} onClick={toggleAutoplay} type="button">
          {isPlaying ? 'Stop' : 'Start'}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
