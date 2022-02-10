import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
export default function Buku() {
  const [Users, fetchUsers] = useState([]);

  const getData = () => {
    fetch("https://my-json-server.typicode.com/oreo911/react-oreo/buku")
      .then((res) => res.json())
      .then((res) => {
        fetchUsers(res);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const cardItem = (item) => {
    return (
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
              <NavLink to={`/buku/${item.id}`} class="btn btn-success">
                Download
              </NavLink>
            </div>
            <div class="col">
              <NavLink to={`/buku/${item.id}`} class="btn btn-outline-dark">
                Detail
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Buku</h1>
            <hr />
          </div>
        </div>
      </div>
      <div>
        <div className="row justify-content-around">{Users.map(cardItem)}</div>
      </div>
    </div>
  );
}
