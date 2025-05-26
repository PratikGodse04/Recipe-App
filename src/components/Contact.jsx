import React from 'react'

export default function Contact() {
  let styles={
    color:"#06202B",
    paddingRight:"4px"
  }
  return (
    <div className="container text-white d-flex flex-column justify-content-center align-items-center">
       <h1 className='mb-5 mt-4'>Contact <span className='text-success'>Us</span> </h1>
       <div className='d-flex ' style={{gap:"100px"}}>
         <div className='contactdetail d-flex flex-column gap-3 p-5' style={{fontSize:"18px",backgroundColor:"#90D1CA", color:"#06202B",fontFamily:"cursive",borderRadius:"2px"}}>
            <p><span style={styles}>Name : </span>Inspire33</p>
            <p><span style={styles}>Address : </span> Warje,Pune,424242</p>
            <p><span style={styles}>Email : </span>inspire33@gmail.com</p>
            <p><span style={styles}>ContactNo : </span>9745556454</p>
         </div>
         <div className='contactForm d-flex flex-column gap-3'>
          <div className="form-group">
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    </div>
         <div className="form-group">
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Contact No"/>
    </div>

 <div className="form-group">
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" cols="50" placeholder='Enter Subject'></textarea>
  </div>
   <div className="form-group">
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Enter Description'></textarea>
  </div>
  <button className='btn btn-success'>Contact Us</button>
         </div>
       </div>
       <h3 className='mt-5'>Thank You  ! </h3>
    </div>
  )
}
