import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
    <>
    <div className="col-md-3">
        <Skeleton height={350} />
    </div>
    <div className="col-md-3">
        <Skeleton height={350} />
    </div>
    <div className="col-md-3">
        <Skeleton height={350} />
    </div>
    <div className="col-md-3">
        <Skeleton height={350} />
    </div>
    </>
    );
  };

  const filterProduct = (cat) => {
      const updatedList = data.filter((x) => x.category === cat);
      setFilter(updatedList);
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-light me-2"
          onClick={() => setFilter(data)}>
            <i className="fa fa-bars me-1"></i>
            All</button>
          <button className="btn btn-outline-light me-2"
          onClick={() => filterProduct("men's clothing")}>
            <i className="fa fa-male me-1"></i>
            Men's Clothing</button>
          <button className="btn btn-outline-light me-2"
          onClick={() => filterProduct("women's clothing")}>
            <i className="fa fa-female me-1"></i>
            Women's Clothing
          </button>
          <button className="btn btn-outline-light me-2"
          onClick={() => filterProduct("jewelery")}>
            <i className="fa fa-diamond me-1"></i>
            Jewelery</button>
          <button className="btn btn-outline-light me-2"
          onClick={() => filterProduct("electronics")}>
            <i className="fa fa-television me-1"></i>
            Electronic</button>
        </div>
        {filter.map((products) => {
          return (
            <>
            
              <div className="col-md-4 mb-5 bg-dark">
                <div className="container my-8 py-8">
                <div class="card h-100 text-center p-4" key={products.id}>
                  <img src={products.image} class="card-img-top" alt={products.title} height="300px" />
                  <div class="card-body">
                    <h5 class="card-title mb-0">{products.title.substring(0,12)}</h5>
                    <p class="card-text lead fw-bold">
                      ${products.price}
                    </p>
                    <NavLink to={`/products/${products.id}`} class="btn btn-outline-dark">
                      Buy Now
                    </NavLink>
                  </div>
                </div>
                </div>
              </div>
              
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className=" my-8 py-8 bg-dark">
        <div className="container">
        <div className="row">
          <div className="col-12 mb-5">
          <hr/>
            <h1 className="display-6 fw-bolder text-center text-light">Latest Products</h1>
            <hr className="text-light" />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
        </div>
      </div>
    </div>
 
  );
};
export default Products;
