import React from 'react';
import Searchbar from '../listing/SearchBar';
import Item from '../listing/listing_Item';  // Ensure the file name matches the import statement
import { PROPERTIES } from '../../constant/listing_data';

const Listing = () => {
  return (
    <main className="p-10 container mt-[6.5rem]">
      <Searchbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-4">
        {PROPERTIES.map((property) => (
          <div
            key={property.id}  // Make sure 'id' exists in your property data
            className="w-full h-full rounded-xl relative bg-white shadow-md p-4">
            <Item property={property} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Listing;
