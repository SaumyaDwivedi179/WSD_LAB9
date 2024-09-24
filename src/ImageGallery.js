// src/ImageGallery.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ImageGallery.css'; // Import CSS file for styling

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random/100');
        setImages(response.data.message);
      } catch (error) {
        console.error('Error fetching images', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="gallery">
      {images.length > 0 ? (
        images.map((image, index) => (
          <img key={index} src={image} alt={`Random Dog ${index + 1}`} className="gallery-image" />
        ))
      ) : (
        <p>No images available</p>
      )}
    </div>
  );
};

export default ImageGallery;
