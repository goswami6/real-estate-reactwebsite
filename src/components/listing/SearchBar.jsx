import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  return (
    <div className="xl:w-[40%] w-full relative rounded-xl">
      <input
        type="text"
        placeholder="Enter title/city/country"
        className="w-full px-4 py-2 bg-gray-100 border border-gray-500 rounded-lg shadow-sm pl-12 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
      />
      <FontAwesomeIcon
        icon={faLocationPin}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
      />
      <FontAwesomeIcon
        icon={faSearch}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
      />
    </div>
  );
};

export default SearchBar;


