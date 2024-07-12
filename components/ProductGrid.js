// components/ProductGrid.js

import { useRouter } from 'next/router';

const ProductGrid = () => {
  const router = useRouter();

  const navigateToCategoria = (categoria) => {
    router.push(`/categoria/${categoria.toLowerCase().replace(' ', '-')}`);
  };

  return (
    <div className="products-grid">
      {["Promoções", "Pizzas Salgadas", "Pizzas doces", "Bebidas"].map((product, index) => (
        <div className="product-card" key={index} onClick={() => navigateToCategoria(product)}>
          <img src={`https://placehold.co/300x200.png?text=${product}`} alt={product} />
          <h3 className="product-title">{product}</h3>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
