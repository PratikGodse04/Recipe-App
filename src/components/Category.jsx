import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import Loader from "./Loader";

// import React {useState} from 'react'

export default function Category() {
  const [catdata, setcatdata] = useState([]);
  const [loder,setLoader]=useState(false)
  useEffect(() => {
    const fetchDataCat = async () => {
      setLoader(true);
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      //   setcatdata(await res.json());
      const response = await res.json();
      setcatdata(response.categories);
      setLoader(false)
    };

    fetchDataCat();
  }, []);
  
  return (
    <>
      <div
        className="container"
        style={{ textAlign: "center", color: "white", marginTop: "10px" }}
      >
        <h2>Recipes For You - Categories</h2>
      </div>
      {loder && <Loader/>}
      <div
        className="text-center container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center",
          marginTop: "30px",
          marginBottom:"40px"
        }}
      >
        {catdata.map((ele, index) => {
          return (
            <div className="card" style={{ width: " 18rem" }} key={index}>
              <img
                className="card-img-top"
                src={ele.strCategoryThumb}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{ele.strCategory}</h5>
                <p
                  className="card-text"
                  style={{ height: "100px", overflow: "scroll" }}
                >
                  {ele.strCategoryDescription}
                </p>
                <Link to={`/category/${ele.strCategory}`} className="btn btn-primary">
                  See More 
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
