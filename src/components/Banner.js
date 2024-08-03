import React from 'react'

function Banner() {
  return (
    <div className="container-fluid w-100 bg-dark p-5">
      <div className="row">
        <div className="col-md-6">
        <h1 className='text-light display-5 fw-bold'>New language, new opportunities, new you,<br /><span className='text-danger'> new Everyday !</span></h1>
        <p className='text-light lead my-5 fw-light'>Welcome to Language Learning Platform, 
          <br />Where learning a new language is an exciting and rewarding journey! Whether you're a beginner looking to start from scratch or an advanced learner aiming to refine your skills, our platform offers the tools, resources, and support you need to achieve fluency.</p>
        </div>
        <div className="col-md-6">
          <img src='/Letters/home.jpg' className='img-fluid' alt='home page' />
        </div>
      </div>
    </div>
   
  )
}

export default Banner
