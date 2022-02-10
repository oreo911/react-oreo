import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(
        `https://my-json-server.typicode.com/oreo911/react-oreo/buku/${id}`
      );
      setProduct(await response.json());
    };
    getProduct();
  }, []);

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.img}
            alt={product.title}
            width="290"
            height="400"
            className="rounded-3 shadow-lg"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">Kategori</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">Tingkat : {product.tingkat}</p>
          <h3>Kelas : {product.kelas}</h3>
          <p className="lead">{product.desc}</p>

          <button type="button" class="btn btn-primary btn-lg text-white">
            Download Ebook
          </button>
          {/* <button className="btn btn-outline-dark">Go to Cart</button> */}
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
          <ShowProduct />
        </div>
      </div>
    </div>
  );
};

export default Product;
