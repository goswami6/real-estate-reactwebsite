import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faCar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Item = ({ property }) => {
  return (
    <div className='p-[10rem] mb-5'>
      <div className="absolute top-0 left-0 xl:w-full h-[60%] md:h-[50%] xl:h-[70%] pd-2 w-[85%]">
        <img
          src={property.image}
          alt=""
          className="rounded-xl w-full h-full object-cover"
        />
      </div>
      <h5 className="absolute left-2 top-2 text-black font-semibold text-sm md:text-base">
        {property.city}
      </h5>
      <h4 className="absolute left-2 top-[73%] text-black font-bold text-lg md:text-xl">
        {property.title}
      </h4>

      <div className="absolute left-2 top-[78%] flex gap-x-2 md:gap-x-4 py-2 text-black text-xs md:text-sm mt-3">
        <div className="flex items-center gap-x-1 md:gap-x-2 border-r border-black/50 pr-2 md:pr-4 font-medium">
          <FontAwesomeIcon icon={faBed} className="mr-1 md:mr-2" />
          {property.facilities.bedrooms}
        </div>
        <div className="flex items-center gap-x-1 md:gap-x-2 border-r border-black/50 pr-2 md:pr-4 font-medium">
          <FontAwesomeIcon icon={faBath} className="mr-1 md:mr-2" />
          {property.facilities.bathrooms}
        </div>
        <div className="flex items-center gap-x-1 md:gap-x-2 font-medium">
          <FontAwesomeIcon icon={faCar} className="mr-1 md:mr-2" />
          {property.facilities.parking}
        </div>
      </div>
      
      <div className="flex justify-between items-center absolute left-2 top-[90%] md:top-[87%] xl:right-2 right-8 text-black mt-4">
        <div className="font-bold text-sm md:text-lg">${property.price}</div>
        <Link to="/">
          <button className="btn rounded-xl bg-slate-500 px-3 md:px-5  py-1 md:py-2 text-white hover:bg-slate-600">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
