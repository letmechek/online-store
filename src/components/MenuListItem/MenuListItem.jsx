import './MenuListItem.css';

export default function MenuListItem({ productItem, handleAddToOrder }) {
  return (
    <div class="container page-wrapper">
  <div class="page-inner">
    <div class="row">
      <div class="el-wrapper">
        <div class="box-up">
      <img className='img' src={productItem.image} alt={productItem.name}/>
      <div class="img-info">
            <div class="info-inner">
            <span class="p-name">{productItem.name}</span>
              <span class="p-company">Sam's Sports</span>
            </div>
            <div class="a-size">Available sizes : <span class="size">S , M , L , XL</span></div>
          </div>
          </div>
          
          <div class="box-down">
          <div class="h-bg">
            <div class="h-bg-inner"></div>
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