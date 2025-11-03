'use client';

import Image from 'next/image';

import {
  ForwardRefRenderFunction,
  PropsWithChildren,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { useInView } from 'react-intersection-observer';

import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';



import { cn } from '@/lib/utils';

// Example of ffmpeg optimization parameters:
// mp4: -c:v libx265 -crf 20 -vf scale=3840:-2 -preset veryslow -tag:v hvc1 -movflags faststart -an
// webm: -c:v libvpx-vp9 -crf 20 -vf scale=3840:-2 -deadline best

type PauseableVideoProps = {
  className?: string;
  videoClassName?: string;
  customInView?: boolean;
  width: number;
  height: number;
  withReset?: boolean;
  withLoop?: boolean;
  poster?: string;
};

/* eslint-disable react/function-component-definition */
const PauseableVideo: ForwardRefRenderFunction<
  HTMLVideoElement | null,
  PropsWithChildren<PauseableVideoProps>
> = (
  {
    children,
    className,
    videoClassName,
    width,
    height,
    customInView,
    withReset = false,
    withLoop = true,
    poster,
  },
  ref,
) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    const [videoVisibilityRef, isInView] = useInView({
      triggerOnce: true,
      rootMargin: '100px 0px',
    });
    const { inView, ref: setVideoRef } = useInView({ threshold: 0.1 });

    useEffect(() => {
      setVideoRef(videoRef.current);
    }, [setVideoRef]);

    const playVideo = useCallback(
      (videoElement: HTMLVideoElement) => {
        if (withReset) {
          videoElement.currentTime = 0;
        }
        const playPromise = videoElement.play();

        if (playPromise !== undefined) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          playPromise.catch((error: any) => {
            // eslint-disable-next-line no-console
            console.error('Error attempting to play video:', error);
          });
        }
      },
      [withReset],
    );

    useEffect(() => {
      if (!videoRef.current) {
        return;
      }

      const videoElement = videoRef.current;

      if (customInView !== undefined) {
        if (customInView) {
          playVideo(videoElement);
        } else {
          videoElement.pause();
        }
      } else {
        if (inView) {
          playVideo(videoElement);
        } else {
          videoElement.pause();
        }
      }
    }, [inView, customInView, playVideo]);

    // Combine the external ref with the internal videoRef
    useImperativeHandle<HTMLVideoElement | null, HTMLVideoElement | null>(
      ref,
      () => videoRef.current,
    );

    return (
      <>
        {poster && !isVideoLoaded && (
          <div className={cn(className, videoClassName, 'absolute')}>
            <Image
              src={poster}
              alt="Video poster"
              width={width}
              height={height}
              className={cn('h-full w-full object-cover', videoClassName)}
              quality={90}
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        )}

        <LazyMotion features={domAnimation}>
          <div className={className} ref={videoVisibilityRef}>
            <AnimatePresence>
              {isInView && (
                <m.video
                  className={cn('absolute inset-0', videoClassName)}
                  ref={videoRef}
                  controls={false}
                  width={width}
                  height={height}
                  {...(!poster && {
                    initial: {
                      opacity: 0,
                    },
                    animate: { opacity: isVideoLoaded ? 1 : 0 },
                    transition: { duration: 0.5 },
                  })}
                  loop={withLoop}
                  style={{ display: isVideoLoaded ? 'block' : 'none' }}
                  muted
                  autoPlay
                  playsInline
                  onLoadedData={() => setIsVideoLoaded(true)}
                >
                  {children}
                </m.video>
              )}
            </AnimatePresence>
          </div>
        </LazyMotion>
      </>
    );
  };

export default forwardRef(PauseableVideo);
