'use client';

import {
  Carousel,
  CarouselContent,
  CarouselHeader,
  CarouselItem,
} from '@/components/shared/ui/carousel';
import { REVIEWS, Review } from './constants';
import Image from 'next/image';
import mockCardImage from './images/background-card.jpg';
import Tag from '@/components/shared/ui/tag';
import { useCarousel } from '@/components/shared/ui/carousel/carousel';
import { cn } from '@/lib/utils';

import InteractiveVideo from '@/components/shared/interactive-video';
import { useRef, useEffect, useState } from 'react';
import { InteractiveVideoHandle } from '@/components/shared/interactive-video/interactive-video';
import { ArrowRight } from 'lucide-react';

const Reviews = () => {
  return (
    <section
      className="reviews -mt-7 select-none pt-20"
      id="reviews"
    >
      <div className="container">
        <Carousel
          className="w-full"
          opts={{
            align: 'center',
            duration: 50
          }}
        >
          <CarouselHeader />
          <CarouselContent className="overflow-visible">
            {REVIEWS.map((review, index) => (
              <CarouselItem
                key={review.id}
                className="basis-[95%] sm:basis-[55%] lg:basis-[35%]"
              >
                <ReviewCard review={review} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

const ReviewCard = ({ review, index }: { review: Review; index: number }) => {
  const { selectedIndex, scrollTo } = useCarousel();
  const videoRef = useRef<InteractiveVideoHandle>(null);
  const isActive = selectedIndex === index;
  const shouldAnimate = index > 0;
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  // Когда карточка становится неактивной - останавливаем видео и сбрасываем флаг окончания
  useEffect(() => {
    if (!isActive) {
      if (videoRef.current?.isPlaying) {
        videoRef.current.pause();
      }
      setIsVideoEnded(false); // Сбросить флаг при смене карточки
    }
  }, [isActive]);

  const handleVideoPlay = () => {
    // Когда начинается воспроизведение - скроллим карусель к этому видео
    if (!isActive) {
      scrollTo(index);
    }
    setIsVideoEnded(false); // Сбросить флаг при повторном воспроизведении
  };

  const handleVideoEnded = () => {
    setIsVideoEnded(true); // Устанавливаем флаг что видео закончилось
  };

  const handleContinue = () => {
    // Переключаемся на следующий слайд
    scrollTo(index + 1);
  };

  const renderCardContent = () => {
    switch (review.type) {
      case 'text':
        return (
          <div className="flex flex-col relative h-full min-h-[489px] overflow-hidden rounded-4xl p-5 pb-8 lg:p-8">
            <div className="flex flex-col justify-end items-start h-full mt-auto">
              <Tag>Отзывы</Tag>
              <h3 className="mt-7 text-2xl lg:text-4xl leading-none tracking-tighter text-pretty">
                Они уже нашли свою линию тела
              </h3>
              <p className="mt-6 text-pretty leading-none tracking-tighter text-[#7C7C7C]">
                Мы можем долго рассказывать про атмосферу, но лучше один раз услышать от тех, кто это уже почувствовал.
              </p>
            </div>
            <Image src={mockCardImage} className="-z-10" alt="" fill sizes="840px" />
          </div>
        );

      case 'video':
        return (
          <div className="relative h-full min-h-[489px] rounded-4xl bg-input">
            <InteractiveVideo
              ref={videoRef}
              className={cn("absolute inset-0 rounded-[inherit]")}
              videoClassName={cn("object-cover h-full rounded-[inherit]", isActive && 'bg-black/40')}
              width={840}
              height={489}
              poster={review.image}
              isActive={isActive}
              onPlay={handleVideoPlay}
              onEnded={handleVideoEnded}
            >
              <source src={review.videoUrl} type="video/mp4" />
            </InteractiveVideo>

            {isVideoEnded && (
              <div className="absolute inset-0 flex items-center justify-center rounded-[inherit]">
                <button
                  onClick={handleContinue}
                  className="pointer-events-auto flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-medium text-black shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl cursor-pointer"
                  aria-label="Продолжить к следующему отзыву"
                >
                  <span>Далее</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            )}

            <div
              className={cn(
                'absolute bottom-8 left-5 md:left-8 text-white will-change-transform pointer-events-none',
                'transition-all duration-500 ease-in-out',
                shouldAnimate && isActive && 'md:translate-y-28 md:text-black md:left-2 md:scale-[90%]',
                shouldAnimate && !isActive && 'md:translate-y-0'
              )}
            >
              <h3 className="mb-2 text-3xl font-normal leading-none tracking-tighter">
                {review.name}
              </h3>
              <p className="leading-none tracking-tighter opacity-80">
                {review.description}
              </p>
            </div>
          </div>
        );

      case 'image':
      default:
        return (
          <div className="relative h-full min-h-[489px] rounded-4xl bg-input">
            {review.image && (
              <Image
                src={review.image}
                alt={review.name || 'Review image'}
                fill
                className="object-cover rounded-[inherit]"
                sizes="(max-width: 768px) 90vw, 840px"
              />
            )}
            <div className="absolute inset-0 bg-black/30 rounded-[inherit]" />
            <div
              className={cn(
                'absolute bottom-8 left-8 text-white',
                'transition-all duration-500 ease-in-out',
                shouldAnimate && isActive && 'md:translate-y-28 md:text-black',
                shouldAnimate && !isActive && 'md:translate-y-0'
              )}
            >
              <h3 className="mb-2 text-3xl font-normal leading-none tracking-tighter">
                {review.name}
              </h3>
              <p className="leading-none tracking-tighter opacity-80">
                {review.description}
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div
      className={cn(
        'transition-transform duration-500 ease-in-out will-change-transform',
        shouldAnimate && isActive && 'md:-translate-y-28',
        shouldAnimate && !isActive && 'md:translate-y-0'
      )}
    >
      {renderCardContent()}
    </div>
  );
};

export default Reviews;