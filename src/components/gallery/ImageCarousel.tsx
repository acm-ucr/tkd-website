"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image, { ImageProps } from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const defaultBlur = "/gallery/placeholder.webp";

export type ImageType = {
  src: string;
  alt?: string;
};

export type ImageCarouselProps = {
  images: ImageType[];
  itemsPerSlide?: number; // # images per set
  slideDuration?: number; // ms
};

const ImageCarousel = ({
  images,
  itemsPerSlide = 6,
  slideDuration = 5000,
}: ImageCarouselProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const preloadImages = images.map(
      (img) =>
        new Promise<void>((resolve) => {
          const image = new window.Image();
          image.src = img.src;
          image.onload = () => resolve();
          image.onerror = () => resolve();
        })
    );
    Promise.all(preloadImages).then(() => {
      setLoading(false);
    });
  }, [images]);

  return loading ? (
    <LoadingScreen />
  ) : (
    <ImageCarouselContent
      images={images}
      itemsPerSlide={itemsPerSlide}
      slideDuration={slideDuration}
    />
  );
};

const ImageCarouselContent = ({
  images,
  itemsPerSlide,
  slideDuration,
}: ImageCarouselContentProps) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // mobile responsive
  const effectiveItemsPerSlide = isMobile ? 4 : itemsPerSlide;
  const totalSlides = Math.ceil(images.length / effectiveItemsPerSlide);
  const [currentSlide, setCurrentSlide] = useState(0);

  // next set
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, slideDuration);
    return () => clearInterval(timer);
  }, [totalSlides, slideDuration]);

  // cache current
  const slideImages = useMemo(() => {
    const start = currentSlide * effectiveItemsPerSlide;
    return images.slice(start, start + effectiveItemsPerSlide);
  }, [images, currentSlide, effectiveItemsPerSlide]);

  // cache next
  const nextSlideIndex = (currentSlide + 1) % totalSlides;
  const nextSlideImages = useMemo(() => {
    const start = nextSlideIndex * effectiveItemsPerSlide;
    return images.slice(start, start + effectiveItemsPerSlide);
  }, [images, nextSlideIndex, effectiveItemsPerSlide]);

  return (
    <div className="relative overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto relative h-[25rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 gap-2"
          >
            {slideImages.map((img, index) => {
              const imageLoadingProps =
                currentSlide === 0
                  ? { priority: true }
                  : { loading: "lazy" as "lazy" | "eager" | undefined };

              return (
                <div
                  key={`${currentSlide}-${index}`}
                  className="relative w-full h-48 bg-gray-100"
                >
                  <FadeInImage
                    src={img.src}
                    alt={img.alt || `Image ${index}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (min-width: 768px) 33vw"
                    className="object-cover rounded-md"
                    placeholder="blur"
                    blurDataURL={defaultBlur}
                    {...imageLoadingProps}
                  />
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* next set */}
      <div
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
          opacity: 0,
        }}
      >
        {nextSlideImages.map((img, index) => (
          <div
            key={`next-${nextSlideIndex}-${index}`}
            className="relative w-full h-48 bg-gray-100"
          >
            <FadeInImage
              src={img.src}
              alt={img.alt || `Image ${index}`}
              fill
              sizes="(max-width: 768px) 100vw, (min-width: 768px) 33vw"
              className="object-cover rounded-md"
              placeholder="blur"
              blurDataURL={defaultBlur}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

type ImageCarouselContentProps = {
  images: ImageType[];
  itemsPerSlide: number;
  slideDuration: number;
};

const FadeInImage = ({
  ...props
}: FadeInImageProps) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: loaded ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-full"
    >
      <Image {...props} onLoadingComplete={() => setLoaded(true)} />
    </motion.div>
  );
};

type FadeInImageProps = ImageProps & {
  alt: string;
};

const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <svg
        className="animate-spin h-12 w-12 text-blue-500"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        />
      </svg>
      <div className="mt-4 text-gray-600">Loading images...</div>
    </div>
  );
};

export default ImageCarousel;
