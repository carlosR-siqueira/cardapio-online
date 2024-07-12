import ProductGrid from '@/components/ProductGrid';
import CategoriaNavbar from '@/components/CategoriaNavbar';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';

const Categoria = ({ categoria }) => {
  const router = useRouter();
  const { categorias } = router.query;


  return (


    <div className='categoria-body'>
      <Navbar />
      <div className='categoria-container'>
        <div className='categoria-button-container'>
          <CategoriaNavbar />
        </div>
        <ProductGrid />
      </div>
    </div>
  );
};


export default Categoria;
