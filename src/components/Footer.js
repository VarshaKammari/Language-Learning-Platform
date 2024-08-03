import React from 'react'

function Footer() {
  return (
    <div className="container-fluid bg-dark py-3">
    <footer>
        <ul className="nav justify-content-center pb-3 mb-3">
          <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Features</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Pricing</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-light">FAQs</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-light">About</a></li>
        </ul>
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item px-3"><i className="bi bi-facebook text-white"></i></li>
          <li className="nav-item px-3"><i className="bi bi-twitter-x text-white"></i></li>
          <li className='nav-item px-3'><i className="bi bi-envelope-at text-white"></i></li>
          <li className='nav-item px-3'><i className="bi bi-linkedin text-white"></i></li>
          <li className='nav-item px-3'><i className="bi bi-github text-white"></i></li>
        </ul>
        <p className="text-center text-light">Copyright © 2024 - All right reserved LLP, Inc</p>
    </footer>
    </div>
  )
}

export default Footer
