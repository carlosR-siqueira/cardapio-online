import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHomeAlt } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => (
  
  <div className="navbar">
    
    <header className="header-desktop">

      <nav className="nav-links ">
        <Link  href="/"><FontAwesomeIcon icon={faHomeAlt} /><br></br>
          Início
        </Link>
        <Link href="/carrinho"><FontAwesomeIcon icon={faShoppingCart} /><br></br>
          Carrinho
        </Link>
      </nav>
    </header>
  </div>
);

export default Navbar;
