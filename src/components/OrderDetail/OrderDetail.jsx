




import './OrderDetail.css';
import LineItem from '../LineItem/LineItem';
import { useState } from 'react';
// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  
  if (!order) return null;

  const lineItems = order.lineItems.map(product =>
    <LineItem
      lineItem={product}
      isPaid={order.isPaid}
      key={product._id}
      handleChangeQty={handleChangeQty}
    />
  );
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (<>
    <nav className="navBar1" >
        <button className="sandwichbtn1" onClick={handleToggle}><i class="gg-shopping-bag"></i></button>
        <div className={`menuNav1 ${navbarOpen ? " showMenu1" : ""}`}> 
        <nav>
    <div className="OrderDetail">
      <div className="section-heading">
        {order.isPaid ?
          <span>ORDER <span className="smaller">{order.orderId}</span></span>
          :
          <span>NEW ORDER</span>
        }
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
        {lineItems.length ?
          <>
            {lineItems}
            <section className="total">
              {order.isPaid ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-checkout"
                  onClick={handleCheckout}
                  disabled={!lineItems.length}
                >CHECKOUT</button>
              }
              <span>{order.totalQty}</span>
              <span className="right">${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
          :
          <div className="hungry">cart is empty?</div>
        }
      </div>
    </div>
    </nav>
    </div>
      </nav>
      </>
  );
}