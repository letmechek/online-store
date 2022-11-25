import { Link } from 'react-router-dom';
import './Catalogue.css'
import data from '../../data'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Catalogue() {
 const[products, setProducts] = useState([])
 useEffect(() =>{
  const fetchData = async () => {
    const result = await axios.get('/api/products')
    setProducts(result.data)
  }
  fetchData()
 }, []);


  
    return (
      <>
       
        <h1>Catalogue</h1>
        <div className="product">
          {data.products.map((product) => (
            <div className="product" key={product.pid}>
             <Link to={`/products/${product.pid}`}>
              <img src={product.image} alt={product.name} />
              </Link>
              <div className="product-info">
                <Link to={`/products/${product.pid}`}>
                <p>{product.name}</p>
                </Link>
                <p>{product.price}</p>
                <button>add to cart</button>
              </div>
              </div>
          ))}
        </div>
       
       
      </>
    )
}