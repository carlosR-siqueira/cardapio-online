import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Infos from '../components/Infos';
import Navbar from '../components/Navbar';
import ProductGrid from '../components/ProductGrid';
import Link from 'next/link';

import { motion } from 'framer-motion';


const Home = () => (

  <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.1 }}
>
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
</motion.div>
);
  

export default Home
