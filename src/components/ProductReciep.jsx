import React from 'react'
import { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loader from './Loader';

export default function ProductReciep() {
    const {mealid,category}=useParams();
    const [recipe,setRecipe]=useState([]);
    const [loader,setLoader]=useState(false)
    
    useEffect(()=>{

        const fetchRecipe=async()=>{
          setLoader(true)

            const fetchRecipeData=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
            const recipeData= await fetchRecipeData.json();
             
            setRecipe(recipeData.meals)
           setLoader(false)
        }

        fetchRecipe()

    },[mealid])
  return (
    <div className='container'>
     
     {loader && <Loader/>}
      
      {recipe.map((ele,index)=>{
        
        return <div key={index} className='container' style={{display:"flex",gap:"50px",marginTop:"50px"}}> 
            <div>
                <img src={ele.strMealThumb} alt=" Image Not Found" style={{height:"400px",width:"400px" , borderRadius:"10px"}}/>
                <p className='text-white mt-4' ><h3>Youtube Link :</h3><Link to={ele.strYoutube}>Click Here To Visit Video</Link> </p>
             </div>
            <div> 
              
                <h3 className='text-white'> Recipe Details</h3>
                <p className='text-white' style={{fontFamily:"cursive"}}>Recipe Name: {ele.strMeal}</p>
               <h3 style={{color:"orange"}}>Instructions :</h3>
                <p className='text-white' style={{height:"250px", overflow:"scroll"}}>
                  {ele.strInstructions}</p>
                <Link
                  to={`/category/${category}`}
                  className="btn btn-primary"
                >
                  Back
                </Link>
            </div> 
        </div>
      })}
      
    </div>
  )
}
