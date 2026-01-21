import React, { useState } from 'react';
import { GalleryItem } from '../types';
import { X, ZoomIn } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const images: GalleryItem[] = [
    { id: 1, src: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800&auto=format&fit=crop', category: 'Events', caption: 'Annual Day Celebration at SCGMA' },
    { id: 2, src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop', category: 'Campus', caption: 'State-of-the-art Library Facilities' },
    { id: 3, src: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=800&auto=format&fit=crop', category: 'Sports', caption: 'Outdoor Sports and Fitness Activities' },
    { id: 4, src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop', category: 'Academic', caption: 'Science and Technology Exhibition' },
    { id: 5, src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop', category: 'Classroom', caption: 'Smart Classroom Interaction' },
    { id: 6, src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop', category: 'Events', caption: 'Cultural Graduation Day' },
  ];

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="gallery-title" className="text-4xl font-extrabold text-gray-900 mb-4">Glimpses of SCGMA</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Explore our vibrant campus life, academic milestones, and extra-curricular achievements.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img) => (
            <figure 
              key={img.id} 
              className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer h-72 border border-white"
              onClick={() => setSelectedImage(img)}
              aria-label={`View ${img.caption}`}
            >
              <img 
                src={img.src} 
                alt={img.caption} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/60 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500" size={36} />
              </div>
              <figcaption className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white font-bold text-lg mb-1">{img.caption}</p>
                <p className="text-blue-200 text-sm font-medium tracking-widest uppercase">{img.category}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox Modal with Accessibility */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm" 
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <button 
            className="absolute top-8 right-8 text-white hover:text-yellow-400 transition-colors z-[70]"
            onClick={() => setSelectedImage(null)}
            aria-label="Close Gallery Modal"
          >
            <X size={48} />
          </button>
          <div className="max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-3xl bg-white shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.caption} 
              className="w-full h-auto max-h-[75vh] object-contain bg-gray-100"
            />
            <div className="p-8 bg-white">
              <span className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-2 block">{selectedImage.category}</span>
              <h3 className="text-2xl font-bold text-gray-900">{selectedImage.caption}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;