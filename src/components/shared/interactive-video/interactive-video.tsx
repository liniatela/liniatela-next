'use client';

import Image from 'next/image';
import {
  ForwardRefRenderFunction,
  PropsWithChildren,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
} from 'react';
import { useInView } from 'react-intersection-observer';
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Play, Pause, PlayCircleIcon, PauseCircleIcon } from 'lucide-react';

type InteractiveVideoProps = {
  className?: string;
  videoClassName?: string;
  width: number;
  height: number;
  withLoop?: boolean;
  poster?: string;
  playButtonClassName?: string;
  pauseButtonClassName?: string;
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
  autoPlayWhenActive?: boolean;
  isActive?: boolean;
};

export type InteractiveVideoHandle = {
  play: () => void;
  pause: () => void;
  isPlaying: boolean;
};

const InteractiveVideo: ForwardRefRenderFunction<
  InteractiveVideoHandle,
  PropsWithChildren<InteractiveVideoProps>
> = (
  {
    children,
    className,
    videoClassName,
    width,
    height,
    withLoop = false,
    poster,
    playButtonClassName,
    pauseButtonClassName,
    onPlay,
    onPause,
    onEnded,
    autoPlayWhenActive = false,
    isActive = false,
  },
  ref,
) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showControls, setShowControls] = useState(false);

    const [videoVisibilityRef, isInView] = useInView({
      triggerOnce: true,
      rootMargin: '100px 0px',
    });

    const handlePlay = () => {
      if (!videoRef.current) return;

      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            onPlay?.();
          })
          .catch((error) => {
            console.error('Error attempting to play video:', error);
          });
      }
    };

    const handlePause = () => {
      if (!videoRef.current) return;
      videoRef.current.pause();
      setIsPlaying(false);
      onPause?.();
    };

    const handleVideoEnded = () => {
      setIsPlaying(false);
      onPause?.();
      onEnded?.();
    };

    const handleMouseEnter = () => {
      if (isPlaying) {
        setShowControls(true);
      }
    };

    const handleMouseLeave = () => {
      setShowControls(false);
    };

    // Expose methods to parent via ref
    useImperativeHandle(ref, () => ({
      play: handlePlay,
      pause: handlePause,
      isPlaying,
    }));

    // Auto pause when not active
    useEffect(() => {
      if (!isActive && isPlaying) {
        handlePause();
      }
    }, [isActive, isPlaying]);

    return (
      <>
        {poster && !isVideoLoaded && (
          <div className={cn(className, 'absolute rounded-[inherit]')}>
            <Image
              src={poster}
              alt="Video poster"
              width={width}
              height={height}
              className={cn('h-full w-full object-cover', videoClassName)}
              quality={90}
              priority
            />
          </div>
        )}

        <LazyMotion features={domAnimation}>
          <div
            className={cn('relative', className)}
            ref={videoVisibilityRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <AnimatePresence>
              {isInView && (
                <m.video
                  className={cn('absolute  inset-0 rounded-[inherit] !pointer-events-none select-none', videoClassName)}
                  ref={videoRef}
                  controls={false}
                  width={width}
                  height={height}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isVideoLoaded ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  loop={withLoop}
                  style={{ display: isVideoLoaded ? 'block' : 'none' }}
                  muted={false}
                  playsInline
                  onLoadedData={() => setIsVideoLoaded(true)}
                  onEnded={handleVideoEnded}
                  tabIndex={-1}
                >
                  {children}
                </m.video>
              )}
            </AnimatePresence>
            <div className=' cursor-pointer absolute w-full h-full rounded-[inherit] bg-gradient-to-t from-black/50 to-transparent' onClick={isPlaying ? handlePause : handlePlay}></div>

            {/* Кнопка Play - показывается когда видео не играет */}
            <AnimatePresence>
              {!isPlaying && isVideoLoaded && (
                <m.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  onClick={handlePlay}
                  className={cn(
                    'absolute right-6 top-6 z-10 flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm text-white transition-colors hover:bg-primary/90 cursor-pointer pointer-events-auto',
                    playButtonClassName
                  )}
                  aria-label="Воспроизвести видео"
                >
                  <PlayCircleIcon className="h-5 w-5 " />
                  Смотреть
                </m.button>
              )}
            </AnimatePresence>

            {/* Кнопка Pause - показывается при наведении на играющее видео */}
            <AnimatePresence>
              {isPlaying && showControls && (
                <m.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={handlePause}
                  className={cn(
                    'max-lg:hidden absolute inset-0 z-10 flex items-center justify-center bg-black/30 backdrop-blur-sm rounded-[inherit] cursor-pointer',
                    pauseButtonClassName
                  )}
                  aria-label="Остановить видео"
                >
                  <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2.5 text-base text-black transition-colors hover:bg-white">
                    <PauseCircleIcon className="h-5 w-5" />
                    <span>Пауза</span>
                  </div>
                </m.button>
              )}
            </AnimatePresence>
          </div>
        </LazyMotion>
      </>
    );
  };

export default forwardRef(InteractiveVideo);