import { useState } from 'react';
import Icon from '@/components/ui/icon';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [
    'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/cd23b6bc-70b7-43dd-be21-ffaf7121e3d3.jpg',
    'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/98a6db31-509a-4da1-95fa-9be06d7edf60.jpg',
    'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/11e6265b-a03b-4f8c-9dea-9339e9de7300.jpg',
    'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/cd23b6bc-70b7-43dd-be21-ffaf7121e3d3.jpg',
    'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/98a6db31-509a-4da1-95fa-9be06d7edf60.jpg',
    'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/11e6265b-a03b-4f8c-9dea-9339e9de7300.jpg',
    'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/cd23b6bc-70b7-43dd-be21-ffaf7121e3d3.jpg',
    'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/98a6db31-509a-4da1-95fa-9be06d7edf60.jpg',
  ];

  const openLightbox = (image: string, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (selectedIndex + 1) % images.length;
    setSelectedIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (selectedIndex - 1 + images.length) % images.length;
    setSelectedIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <>
      <section id="gallery" className="py-12 md:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>Галерея</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {images.map((img, idx) => (
              <div 
                key={idx} 
                className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer"
                onClick={() => openLightbox(img, idx)}
              >
                <img 
                  src={img} 
                  alt={`Галерея ${idx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-[60] flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <Icon name="X" size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-3"
          >
            <Icon name="ChevronLeft" size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-3"
          >
            <Icon name="ChevronRight" size={32} />
          </button>

          <img 
            src={selectedImage} 
            alt="Полноэкранный просмотр"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-full">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;
