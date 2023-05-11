import './CatalogueListItem.css';
import { Link } from 'react-router-dom';

export default function CatalogueListItem({ productItem, handleAddToOrder }) {
  return (
    <div className="container page-wrapper">
  <div className="page-inner">
    <div className="row">
      <div className="el-wrapper">
        <div className="box-up">
      <img className='img' src={productItem.image} alt={productItem.name} style={{height:'80%',width:'80%'}}/>
      <div className="img-info">
            <div className="info-inner">
            <Link to={productItem._id}><span className="p-name">{productItem.name}</span></Link>
              <span className="p-company">Sam's STREETWEAR</span>
            </div>
            <div className="a-size">Available sizes : <span class="size">S , M , L , XL</span></div>
          </div>
          </div>
          
          <div className="box-down">
          <div className="h-bg">
            <div className="h-bg-inner"></div>
          </div>
        <span className='cart'>
        <span className='price'>${productItem.price.toFixed(2)}</span>
        <span className="add-to-cart">
        <button className="txt" onClick={() => handleAddToOrder(productItem._id)}>
          ADD
        </button>
        </span>
        </span>
      </div>

    </div>
  </div>
  </div>
  </div>
  
  
  );
}