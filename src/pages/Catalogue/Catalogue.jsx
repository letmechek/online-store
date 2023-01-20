import './Catalogue.css'
import {  useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import * as productsAPI from '../../utilities/products-api'
import * as ordersAPI from '../../utilities/orders-api'
import CatalogueList from '../../components/CatalogueList/CatalogueList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Catalogue() {
 const [ productItems, setProductItems ] = useState([])
 const [ activeCat, setActiveCat ] = useState('')
 const [ cart, setCart ] = useState(null)
 const categoriesRef = useRef([])
 const navigate = useNavigate()

 useEffect(function() {
     (async function() {
         const products = await productsAPI.getAll()
         categoriesRef.current = [...new Set(products.map(product => product.category.name))]
         setProductItems(products)
         setActiveCat(categoriesRef.current[0])
     })();
     (async function() {
         const cart = await ordersAPI.getCart()
         setCart(cart)
     })();
 }, [])
 async function handleAddToOrder(productId) {
  const updatedCart = await ordersAPI.addItemToCart(productId)
  setCart(updatedCart)
}

async function handleChangeQty(productId, newQty) {
  const updatedCart = await ordersAPI.setItemQtyInCart(productId, newQty)
  setCart(updatedCart)
}

async function handleCheckout() {
  await ordersAPI.checkout()
  navigate('/orders')
}

  
    return (
      <>
            <OrderDetail order={cart} handleChangeQty={handleChangeQty} handleCheckout={handleCheckout}/>
        <CategoryList
                    categories={categoriesRef.current}
                    activeCat={activeCat}
                    setActiveCat={setActiveCat}
                />
       <Stack spacing={2}>
      <Pagination count={productItems.length} color="primary" />
    </Stack>
                <CatalogueList
                productItems={productItems.filter(product => product.category.name === activeCat)}
                handleAddToOrder={handleAddToOrder}
            />
      </>
    )
}
      
        
      