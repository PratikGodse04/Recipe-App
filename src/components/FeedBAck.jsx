import "../../public/css/main.css"

export default function FeedBAck() {
  return (
    <div className='container text-white d-flex flex-column align-items-center'>
      <h1 className='mt-3'>Feed<span className='text-success'>Back</span></h1>
      <div className='d-flex flex-column gap-3 mt-5'>
        <div className="form-group">
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Rating Out OF 10"/>
    </div>
        <div className="form-group">
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" cols="50" placeholder='Enter FeedBack'></textarea>
    </div>
    <button className='btn btn-success'>Share FeedBack</button>
      </div>
      
    </div>
  )
}
