import { Link } from 'react-router-dom';
import './OrderHistoryPage.css';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function OrderHistoryPage({ user, setUser }) {
  return (
    <main className="OrderHistoryPage">
      <aside>
        <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      {/* Render an OrderList component (needs to be coded) */}

      {/* Render the existing OrderDetail component */}

    </main>
  );
}