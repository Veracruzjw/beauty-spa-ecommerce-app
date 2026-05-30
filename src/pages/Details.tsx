import { useEffect, useState } from 'react'
import ProductDetails from '../components/ProductDetails'
import { getRelatedProducts, getSingleProduct } from '../api/products';
import { useParams } from 'react-router';
import ProductSlider from '../components/ProductSlider';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  quantity?: number;
  [key: string]: any;
}

function Details() {

  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<Product | null>(null);
    

    useEffect(() => {
        const fetchProduct = async () => {
            if (!id) return;

            const singleProduct = await getSingleProduct(id);
            if (singleProduct) {
              setProduct(singleProduct);
            }
        };
        fetchProduct();
    }, [id]);

  if (!product) {
    return <div className="p-6 text-center">Loading product...</div>;
  }

  return (
    <>
        <ProductDetails product={product} />

        {product.id && (
          <ProductSlider
            title="More Like This"
            fetchFunction={() => getRelatedProducts(product.id)}
          />
        )}
    </>
  )
}

export default Details