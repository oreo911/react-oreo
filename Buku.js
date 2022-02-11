import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  let componentMounted = true;

  useEffect(() => {
    const getBuku = async () => {
      const response = await fetch(
        "https://my-json-server.typicode.com/oreo911/react-oreo/buku"
      );
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getBuku();
  }, []);

  const filterBuku = (cat) => {
    const updatedList = data.filter((x) => x.tingkat === cat);
    setFilter(updatedList);
  };

  const ShowItem = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-warning me-2 text-light"
            onClick={() => setFilter(data)}
          >
            <i className="fa fa-bars me-1"></i>
            Semua
          </button>
          <button
            className="btn btn-warning me-2 text-light"
            onClick={() => filterBuku("SD")}
          >
            <i className="fa fa-male me-1"></i>
            SD
          </button>
          <button
            className="btn btn-warning me-2 text-light"
            onClick={() => filterBuku("SMP")}
          >
            <i className="fa fa-female me-1"></i>
            SMP
          </button>
          <button
            className="btn btn-warning me-2 text-light"
            onClick={() => filterBuku("SMA")}
          >
            <i className="fa fa-diamond me-1"></i>
            SMA
          </button>
        </div>
        {filter.map((item) => {
          return (
            <>
              <div class="mb-5" key={item.id} style={{ width: "18rem" }}>
                <img
                  src={item.img}
                  class="card-img-top"
                  height="350px"
                  alt={item.title}
                />
                <div class="card-body text-center">
                  <h5 class="card-title">{item.title}</h5>
                  <div class="row">
                    <div class="col">
                      <NavLink
                        to={`/assets/download/${item.filepdf}`}
                        target="_blank"
                        download
                        class="btn btn-warning text-white"
                      >
                        Download
                      </NavLink>
                    </div>
                    <div class="col">
                      <NavLink
                        to={`/buku/${item.id}`}
                        class="btn btn-outline-dark"
                      >
                        Detail
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              ;
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className=" my-8 py-8 ">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5">
              <hr />
              <h1 className="display-6 fw-bolder text-center">Buku</h1>
              <hr />
            </div>
          </div>
          <div className="row justify-content-center">
            <ShowItem />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;
