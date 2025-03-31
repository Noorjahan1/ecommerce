'use client';
import React, { useRef, useState, useEffect } from 'react';

function ImageZoom({thumbnail}) {
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  const [transformOrigin, setTransformOrigin] = useState('center');
  const [transform, setTransform] = useState('scale(1)');

  const handleMouseMove = (e) => {
    if (imageContainerRef.current && imageRef.current) {
      const rect = imageContainerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setTransformOrigin(`${x}px ${y}px`);
      setTransform('scale(3)');
    }
  };

  const handleMouseLeave = () => {
    setTransformOrigin('center');
    setTransform('scale(1)');
  };

  return (
    <div
      ref={imageContainerRef}
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={imageRef}
        src={thumbnail}
        alt="Zoomable Image"
        style={{
          width: '100%',
          height: '100%',
          transition: 'transform 0.3s ease',
          transformOrigin: transformOrigin,
          transform: transform,
          objectFit: 'cover',
        }}
      />
    </div>
  );
}

export default ImageZoom;