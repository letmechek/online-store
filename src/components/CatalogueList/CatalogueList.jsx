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
    <main className="CatalogueList">
      {products}
    </main>
  );
}

