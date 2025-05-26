import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "./Loader";

export default function CategoryProducts() {
  const { category } = useParams();
  const [mealData, setMealData] = useState([]);
  const[loader,setLoader]=useState(false)

  useEffect(() => {
    try {
      const fetchDataOfCategoryProducts = async () => {
        setLoader(true)
        const data = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        );
        const parseddata = await data.json();
        setMealData(parseddata.meals);
       setLoader(false)
      };

      fetchDataOfCategoryProducts();
    } catch (err) {
      console.error(err);
    }
  }, [category]);
  return (
    <div className="container">
      <div
        className="container"
        style={{ textAlign: "center", color: "white", marginTop: "10px" }}
      >
        <h2>Recipe For You  - {category} Category</h2>
      </div>
    {loader && <Loader/>}
      <div
        className="conatiner text-center"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        {mealData.map((element, index) => {
          return (
            <div className="card" style={{ width: " 18rem" }} key={index}>
              <img
                className="card-img-top"
                src={element.strMealThumb}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{ height: "40px", overflow: "scroll" }}
                >
                  {element.strMeal}
                </h5>

                <Link
                  to={`/${category}/meal/${element.idMeal}`}
                  className="btn btn-primary"
                >
                  View Reciepe
                </Link>
              </div>
            </div>
          );
        })}

        <footer className="container" style={{marginTop:"10px",marginBottom:"20px"}}>
          <Link
            to={`/`}
            className="btn btn-primary"
          >
            Back
          </Link>
         
        </footer>
      </div>
    </div>
  );
}
