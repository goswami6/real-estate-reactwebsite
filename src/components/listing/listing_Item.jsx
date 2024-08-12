import React, { useState, useEffect } from 'react';

const Item = ({ property }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [property.images.length]);

  return (
    <div className="relative group">
      {property.images && property.images.length > 0 ? (
        <div className="w-full h-56 md:h-64 overflow-hidden rounded-xl">
          <img
            src={property.images[currentImageIndex]}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
          />
        </div>
      ) : (
        <div className="w-full h-56 md:h-64 bg-gray-200 rounded-xl"></div>
      )}
      <h5 className="mt-2 text-black font-semibold text-sm md:text-base">
        {property.city}
      </h5>
      <h4 className="text-black font-bold text-lg md:text-xl">
        {property.title}
      </h4>
      <div className="flex gap-x-2 md:gap-x-4 py-2 text-black text-xs md:text-sm">
        <div className="flex items-center gap-x-1 md:gap-x-2 font-medium">
          {property.facilities.bedrooms} Beds
        </div>
        <div className="flex items-center gap-x-1 md:gap-x-2 font-medium">
          {property.facilities.bathrooms} Baths
        </div>
        <div className="flex items-center gap-x-1 md:gap-x-2 font-medium">
          {property.facilities.parking} Parking
        </div>
      </div>
      <div className="mt-3 text-black">{property.description}</div>
      <div className="flex justify-between items-center mt-4 text-black">
        <div className="font-bold text-sm md:text-lg">${property.price}</div>
        <button className=" rounded-xl bg-slate-500 px-3 md:px-5 py-1 md:py-2 text-white hover:bg-slate-600">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Item;
