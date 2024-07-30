import React from "react";
import AppLayout from "../layouts/AppLayout";
import { useParams } from "react-router-dom";
import { getProductById } from "../hooks/hooks";

const ProductPage = () => {

    const [product, setProduct] = useState(null);
    const {productId} = useParams();

    const getProduct = async() => {
        const data = await getProductById(productId);
        setProduct(data);
    }

  return (
    <AppLayout>
      <main>
        <h1>Hello</h1>
      </main>
    </AppLayout>
  );
};

export default ProductPage;
