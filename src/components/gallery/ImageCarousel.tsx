"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image, { ImageProps } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ImageType } from "@/types/image_type";

const defaultBlur = "/gallery/placeholder.webp";

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
  return (
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
      <div className="relative mx-auto h-[25rem] max-w-screen-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 grid grid-cols-2 gap-2 md:grid-cols-3"
          >
            {slideImages.map((img, index) => {
              const imageLoadingProps =
                currentSlide === 0
                  ? { priority: true }
                  : { loading: "lazy" as "lazy" | "eager" | undefined };

              return (
                <div
                  key={`${currentSlide}-${index}`}
                  className="relative h-48 w-full bg-gray-100"
                >
                  <FadeInImage
                    src={img.src}
                    alt={img.alt || `Image ${index}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (min-width: 768px) 33vw"
                    className="rounded-md object-cover"
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
            className="relative h-48 w-full bg-gray-100"
          >
            <FadeInImage
              src={img.src}
              alt={img.alt || `Image ${index}`}
              fill
              sizes="(max-width: 768px) 100vw, (min-width: 768px) 33vw"
              className="rounded-md object-cover"
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

const FadeInImage = ({ ...props }: FadeInImageProps) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: loaded ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-full w-full"
    >
      <Image {...props} onLoadingComplete={() => setLoaded(true)} />
    </motion.div>
  );
};

type FadeInImageProps = ImageProps & {
  alt: string;
};

export default ImageCarousel;
