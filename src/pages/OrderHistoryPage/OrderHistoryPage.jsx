import './OrderHistoryPage.css';
import Logo from '../../components/Logo/Logo';

export default function OrderHistoryPage({ user, setUser }) {
  return (
    <>
        {/* <UserLogOut user={user} setUser={setUser} /> */}
   
        {/* <Link to="/products/new" className="button btn-sm">NEW ORDER</Link> */}
        <h1>Payment Information</h1>
       <div className='payment'> <input id="column-left" type="text" name="first-name" placeholder="First Name"/>
          <input id="column-right" type="text" name="last-name" placeholder="Surname"/>
          <input id="input-field" type="text" name="number" placeholder="Card Number"/>
          <input id="column-left" type="text" name="expiry" placeholder="MM / YY"/>
          <input id="column-right" type="text" name="cvc" placeholder="CCV"/>
          <input id="input-button" type="submit" value="Submit"/>
          </div>
          <Logo /> 
        </>
  );
}