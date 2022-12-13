import React, { useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "../styles/Products.css";

function Products() {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:3000/product");

      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="row">
        {data.map((data) => {
          return (
            <div className="col-md-4 mb-5 mt-5">
              <div className="card my-3">
                <img
                  className="card-img-top imageClick"
                  src={data.imageUrl}
                  alt="Card image cap"
                />
                <i className="fa-regular fa-heart fa-2x p-2 fav-icon "></i>
                <i className="fa-solid fa-heart fa-2x p-2 fav-icon"></i>
                <div className="bg-dark py-3 text-center">
                  <h5 className="card-title text-white">{data.NomArticle}</h5>
                  <h5 className="card-title text-white">{data.Prix}</h5>
                </div>
                <div class="w-100 mt-3">
                  <button type="button" className="btn btn-color w-100">
                    AJOUTER AU PANIER
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;
