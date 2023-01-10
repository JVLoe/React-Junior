import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <h1>Menu</h1>
            <Link className="home" to="/">Home</Link>
            <Link className="basket" to="/basket">Basket</Link>
        </nav>
    )
}

export default Navbar