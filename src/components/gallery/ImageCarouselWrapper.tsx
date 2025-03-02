import ImageCarousel from '@/components/gallery/ImageCarousel';
import carouselData from '@/data/CarouselData';

const ImageCarouselWrapper = () => {
  return (
    <div className="py-4">
      <ImageCarousel images={carouselData} />
    </div>
  );
}

export default ImageCarouselWrapper;