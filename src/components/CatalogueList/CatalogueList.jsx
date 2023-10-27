import './CatalogueList.css';
import CatalogueListItem from '../CatalogueListItem/CatalogueListItem';

export default function CatalogueList({ productItems, handleAddToOrder }) {
  const products = productItems.map(product =>
    <CatalogueListItem
      key={product._id}
      productItem={product}
      handleAddToOrder={handleAddToOrder}    />
  );
  return (
   <main className='p-2 mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8' >
      {products}
    </main>
  );
}

