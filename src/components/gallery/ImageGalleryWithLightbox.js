// components/ImageGalleryWithLightbox.js
import React from 'react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import LightGallery from 'lightgallery/react';

function ImageGalleryWithLightbox({ imageFiles }) {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    return (
        <div className="image-gallery">
            <LightGallery onInit={onInit} plugins={[lgThumbnail, lgZoom]}>
                {imageFiles.map((imageFile, index) => (
                    <a key={index} href={`/images/gallery/${imageFile}`}>
                        <img
                            src={`/images/gallery/${imageFile}`}
                            alt={`Image ${index}`}
                        />
                    </a>
                ))}
            </LightGallery>
        </div>
    );
}

export default ImageGalleryWithLightbox;
