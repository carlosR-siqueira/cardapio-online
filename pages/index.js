import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Infos from '../components/Infos';
import Navbar from '../components/Navbar';
import ProductGrid from '../components/ProductGrid';
import Link from 'next/link';


const Home = () => (
  <div className='body'>
    <div className="container">
      <Sidebar />
      <div className="content">
        <div className='navbar-container'>
          <Navbar />
        </div>
        <Header />
        <div className='top-info-container'>
          <Infos />
          <div className='container-profile-link'>

            <Link href="/perfil" className="profile-link">Perfil da loja</Link>
          </div>

        </div>

        <div className="main-content">
          <ProductGrid />


        </div>
      </div>
    </div>
  </div>

);

export default Home
