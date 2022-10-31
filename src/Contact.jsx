import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="my-5">
      <h1 className = "text-center">Contact</h1>

    </div>
    <div className="container contact_div">
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Enter The Name</label>
  <input type="email" class="form-control" id="exampleFormControlInput1"
  Name = "name"

  
  placeholder="Enter The Name"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Phone</label>
  <input type="email" class="form-control" id="exampleFormControlInput1"
    Name = "phone"
  
  
   placeholder = "Enter The Name"/>
  <label for="exampleFormControlTextarea1" class="form-label">Email</label>
<input type="email" class="form-control" id="exampleFormControlInput1"
  Name = "email"

 
 placeholder="Enter The Email"/>
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
  Name = "message"
   placeholder="enter the message"></textarea>
  <button className="btn btn-primary mt-3">Submit</button>

        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact