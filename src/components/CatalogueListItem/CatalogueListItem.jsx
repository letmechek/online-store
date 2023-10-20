import './CatalogueListItem.css';
import { Link } from 'react-router-dom';


export default function CatalogueListItem({ productItem, handleAddToOrder }) {
  return (
<div class="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
  <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
    <img
      src={productItem.image}
      class="object-cover w-full h-full"
    />
  </div>
  <div class="p-6">
    <div class="flex items-center justify-between mb-2">
      <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
       {productItem.name}
      </p>
      <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        $95.00
      </p>
    </div>
  </div>
  <div class="p-6 pt-0">
    <button
      class="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      onClick={() => handleAddToOrder(productItem._id)}
    >
      Add to Cart
    </button>
  </div>
</div>
  );
}


        