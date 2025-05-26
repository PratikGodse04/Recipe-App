
import "../../public/css/main.css"
export default function AboutCard(props) {

  return (
    <div className={`aboutCard  ${props.class}  mt-2 `} style={{borderRadius:"10px",backgroundColor:`${props.styles}`}}>
     <div style={{boxSizing:"border-box"}}> <img src={props.image} alt="IMAGE NOT PRESENT"className=" rounded"/></div>
     <div style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"20px"}}>
      <p style={{fontSize:"17px"}} >{props.content}</p></div>
    </div>
  )
}
