import React from "react";
import AppLayout from "../layouts/AppLayout";
import { useParams } from "react-router-dom";

const ProductPage = () => {

    const {productId} = useParams();

  return (
    <AppLayout>
      <main>
        <h1>Hello ProductPage</h1>
      </main>
    </AppLayout>
  );
};

export default ProductPage;
