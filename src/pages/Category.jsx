import React, { useEffect, useState } from "react";
import AppLayout from "../layouts/AppLayout";
import { useParams } from "react-router-dom";
import { getCategoryById, getProductsByCategory } from "../hooks/hooks";
import { Card, CardText } from "react-bootstrap";
import { Link } from "react-router-dom";

const Category = () => {
  const { id } = useParams();

  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);

  const getCategory = async () => {
    const response = await getCategoryById(id);
    setCategory(response);
  };

  const getProducts = async () => {
    const response = await getProductsByCategory(id);
    setProducts(response);
  };

  useEffect(() => {
    getCategory();
    getProducts();
  }, []);

  return (
    <AppLayout>
      <main>
        <div className="container">
          <h1 className="text-center text-primary">{category?.name}</h1>
          <hr />
          <div className="d-flex gap-4 flex-wrap ">
            {products?.map((product) => (
              <Card style={{ width: "18rem" }} key={product?.id}>
                <Card.Img variant="top" src={product?.image}/>
                <Card.Body>
                  <Card.Title>{product?.name}</Card.Title>
                  <Card.Text className="d-flex gap-2 ">
                     {product?.discount_price && (
                        <span className="p-2  bg-success text-white rounded">
                        {product?.discount_price}
                      </span>
                     )}
                    <span className={`p-2 bg-danger text-white rounded ${product?.discount_price !=null ? 'text-decoration-line-through' : ''}`}>
                      {product?.price}
                    </span>
                  </Card.Text>
                  <CardText>
                     <p className="text-truncate" style={{maxWidth: '200px'}}>{product?.description}</p>
                  </CardText>
                  <Link className='btn btn-primary' to={'/product/' +product?.id}>{product?.name}</Link>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </AppLayout>
  );
};

export default Category;
