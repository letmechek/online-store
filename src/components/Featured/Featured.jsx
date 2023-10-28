import React, { useEffect, useState } from 'react'
import CatalogueList from '../CatalogueList/CatalogueList';
import * as productsAPI from "../../utilities/products-api";
import * as ordersAPI from "../../utilities/orders-api";

export default function Featured() {
    const [productItems, setProductItems] = useState([]);
    const [cart, setCart] = useState(null);
  useEffect(function () {
    (async function () {
      const products = await productsAPI.getAll();
      
      setProductItems(products);
    })();
    (async function () {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    })();
  }, []);
  async function handleAddToOrder(productId) {
    const updatedCart = await ordersAPI.addItemToCart(productId);
    setCart(updatedCart);
  }
  const threeProducts = productItems.slice(9, 13);
  return (
    <>
    <div className='bg-custom-tan'>

          <h1 className="text-center text-white text-3xl font-bold font-serif-display pt-4">Feautured Products</h1>

    <div className=' flex flex-wrap justify-center gap-4'>

    <CatalogueList productItems={threeProducts} handleAddToOrder={handleAddToOrder}/>
    </div>
    </div>
    </>
  )
}
