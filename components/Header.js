import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'

const Header = () => (
  <header className="header">
    <div className="flex flex-col items-center ">
        <img src="/images/logo.jpg" alt="Logo Pizzaria" />
        <h4 className="text-xl font-bold mt-4">PIZZARIA</h4>
      </div>
      <div className='share-icon'>
        <FontAwesomeIcon icon={faShareAlt} />
      </div>
    <nav className="nav-links">
      <Link href="/">Início</Link>
      <Link href="/carrinho">Carrinho</Link>
    </nav>
  </header>
);

export default Header;
