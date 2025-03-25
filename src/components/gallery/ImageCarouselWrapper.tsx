import ImageCarousel from "@/components/gallery/ImageCarousel";
import carouselData from "@/data/CarouselData";

const ImageCarouselWrapper = () => {
  return (
    <div className="bg-white py-[5%]">
      <ImageCarousel images={carouselData} />
    </div>
  );
};

export default ImageCarouselWrapper;
