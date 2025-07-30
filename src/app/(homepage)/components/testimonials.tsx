"use client";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import { CircleCheck, MoveLeft, MoveRight, Star } from "lucide-react";

const OPTIONS: EmblaOptionsType = { loop: true, slidesToScroll: 3 };
const TWEEN_FACTOR_BASE = 0.84;
const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);
const testimonials = [
  {
    id: 1,
    user: "Brooklyn Simmons",
    testimonial:
      "As a student, staying motivated was tough. The app’s daily insights and reflection tools kept me focused and on track. I even developed habits that boosted my grades and my confidence!",
  },
  {
    id: 2,
    user: "Cameron Williamson",
    testimonial:
      "Balancing work and family felt impossible until I started using the platform. The AI-driven coaching helped me prioritize my goals and take small, impactful steps. Now, I’m not just keeping up—I’m thriving!",
  },
  {
    id: 3,
    user: "Brooklyn Simmons",
    testimonial:
      "As a student, staying motivated was tough. The app’s daily insights and reflection tools kept me focused and on track. I even developed habits that boosted my grades and my confidence!",
  },
  {
    id: 4,
    user: "Brooklyn Simmons",
    testimonial:
      "As a student, staying motivated was tough. The app’s daily insights and reflection tools kept me focused and on track. I even developed habits that boosted my grades and my confidence!",
  },
  {
    id: 5,
    user: "Cameron Williamson",
    testimonial:
      "Balancing work and family felt impossible until I started using the platform. The AI-driven coaching helped me prioritize my goals and take small, impactful steps. Now, I’m not just keeping up—I’m thriving!",
  },
  {
    id: 6,
    user: "Brooklyn Simmons",
    testimonial:
      "As a student, staying motivated was tough. The app’s daily insights and reflection tools kept me focused and on track. I even developed habits that boosted my grades and my confidence!",
  },
];

function Testimonials() {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const tweenFactor = useRef(0);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenOpacity = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const opacity = numberWithinRange(tweenValue, 0, 1).toString();
          emblaApi.slideNodes()[slideIndex].style.opacity =
            parseFloat(opacity) > 0.5
              ? opacity
              : (parseFloat(opacity) + 0.3).toString();
        });
      });
    },
    []
  );

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenFactor(emblaApi);
    tweenOpacity(emblaApi);
    emblaApi
      .on("reInit", setTweenFactor)
      .on("reInit", tweenOpacity)
      .on("scroll", tweenOpacity)
      .on("slideFocus", tweenOpacity);
  }, [emblaApi, tweenOpacity]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);
  return (
    <div className="flex justify-center px-4">
      <div className="max-w-[1240px] w-[1240px] py-8 flex flex-col gap-5">
        <div className="flex gap-2 items-center justify-between">
          <h2 className="text-black text-3xl font-bold">OUR HAPPY CUSTOMERS</h2>
          <div className="flex gap-4">
            <button
              className="bg-transparent rounded-full border-none disabled:opacity-50 cursor-pointer focus:outline-none"
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            >
              <MoveLeft size={20} strokeWidth={3} />
            </button>
            <button
              className="bg-transparent rounded-full border-none disabled:opacity-50 cursor-pointer focus:outline-none"
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            >
              <MoveRight size={20} strokeWidth={3} />
            </button>
          </div>
        </div>
        <div className="block w-[100%]">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {testimonials.map((testimonial, index) => (
                <div
                  className={`translate-x-0 translate-y-0 flex-grow-0 flex-shrink-0 basis-[100%] sm:basis-[320px] ${
                    index === 0 && "pl-0 sm:pl-3"
                  }`}
                  key={testimonial.id}
                >
                  <div className="border border-black/10 rounded-[20px] py-4 px-6 flex flex-col gap-3 h-[240px]">
                    <div className="flex items-center gap-1">
                      {new Array(5).fill(null).map((_, starIndex) => (
                        <Star key={starIndex} fill="#FFC633" strokeWidth={0} />
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-black text-[20px] font-semibold">
                        {testimonial.user}
                      </h3>
                      <CircleCheck fill="#01AB31" className="text-white" />
                    </div>
                    <p className="text-black/50 text-sm font-light">
                      {`"${testimonial.testimonial}"`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
