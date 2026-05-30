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

  const { id } = useParams();

  const [product, setProduct] = useState<Product>({
        id: 0,
        title: '',
        price: 0,
        description: '',
        images: []
    });
    

    useEffect(() => {
        const fetchProduct = async () => {
            const singleProduct = await getSingleProduct(id);

            setProduct(singleProduct);
        };
        fetchProduct();
    }, [id]);

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