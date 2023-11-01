import React, { useState } from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function ProductSort({ onSortChange }) {
  const [showOptions, setShowOptions] = useState(false);

  const handleSortChange = (order) => {
    onSortChange(order);
    setShowOptions(false);
  };

  return (
    <div className="flex justify-end items-center p-2 relative">
      <TuneIcon
        className="cursor-pointer text-gray-500 hover:text-gray-900" 
        onClick={() => setShowOptions(!showOptions)}
      />
      {showOptions && (
         <div className="absolute flex flex-col space-y-1 bg-white p-2 border rounded-lg top-10 right-0 z-10">
         <div
           className="cursor-pointer p-1 flex items-center"
           onClick={() => handleSortChange('highToLow')}
         >
           <ArrowDownwardIcon />
           <span>Price: High to Low</span>
         </div>
         <div
           className="cursor-pointer flex items-center"
           onClick={() => handleSortChange('lowToHigh')}
         >
           <ArrowUpwardIcon />
           <span>Price: Low to High</span>
         </div>
       </div>
     )}
    </div>
  );
}
