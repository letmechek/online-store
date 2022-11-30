import './MenuList.css';
import MenuListItem from '../MenuListItem/MenuListItem';

export default function MenuList({ productItems, handleAddToOrder }) {
  const products = productItems.map(product =>
    <MenuListItem
      key={product._id}
      productItem={product}
      handleAddToOrder={handleAddToOrder}    />
  );
  return (
    <main className="MenuList">
      {products}
    </main>
  );
}

