import React, { useState } from 'react';

const RoomsGallery = ({ images, title }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="w-full border mt-4 border-gray-200 p-4 shadow-md">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="main-image mb-4">
        <img src={selectedImage} alt="Selected" className="w-full  aspect-[2/1] object-cover" />
      </div>
      <div className="thumbnail-row flex space-x-2 overflow-auto py-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className={`thumbnail cursor-pointer border-2 p-1 ${
              image === selectedImage ? 'border-blue-500' : 'border-transparent'
            } hover:border-blue-300 w-20 h-12 object-cover`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default RoomsGallery;
