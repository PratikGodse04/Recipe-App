import React from 'react'
import { Link } from 'react-router-dom'

export default function DataCard(props) {
  return (
    <>
      <div className="card" style={{width:"18rem"}}>
  <img src={props.image} className="card-img-top" alt="Image Not Found"/>
  <div className="card-body">
    <h5 className="card-title">{props.title.length<=20?props.title:props.title.slice(0,20)+"..."}</h5>
    
    <Link to={`/${props.category}/meal/${props.idMeal}`} className="btn btn-primary">Go somewhere</Link>
  </div>
</div>
    </>
  )
}
