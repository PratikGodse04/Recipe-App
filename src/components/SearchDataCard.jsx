
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import DataCard from "./DataCard";
import Loader from "./Loader";
import Error from "./Error";

export default function SearchDataCard() {
  const { searchq } = useParams();
  const [result, setResult] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const SearchData = async () => {
      setLoader(true);

      const resultdata = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchq}`
      );
      if (!resultdata.ok) {
        console.log("Data Not Found");
      }
      const resultParsedData = await resultdata.json();

      if (
        !resultParsedData ||
        resultParsedData.meals == null ||
        resultParsedData.meals.length == 0
      ) {
        setResult([]);
        setError(true);
        setLoader(false);
      } else {
        setError(false);
        setResult(resultParsedData.meals);

        setLoader(false);
      }
    };
    SearchData();
  }, [searchq]);
  return (
    <>
      <h3
        className="container"
        style={{ color: "White", textAlign: "center", margin: "20px 0px" }}
      >
        Result For : {searchq}
      </h3>
      <div
        className=" container d-flex flex-wrap"
        style={{ gap: "10px", textAlign: "center", justifyContent: "center" }}
      >
        {loader && <Loader />}
        {error && <Error />}

        {result.map((ele, index) => {
          return (
            <div className="containers" key={index}>
              <DataCard
                image={ele.strMealThumb}
                title={ele.strMeal}
                idMeal={ele.idMeal}
                category={ele.strCategory}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
