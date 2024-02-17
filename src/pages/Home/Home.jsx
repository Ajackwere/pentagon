import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className='home-page'>
      <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
        <div className='container d-flex flex-column align-items-center'>
          <h2>Welcome To </h2>
          <h1 className='text-center fw-semibold'>
            Msomi Teachers College
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio reprehenderit perferendis, placeat nam tempora ipsa itaque a mollitia ab, ipsum, nulla blanditiis neque. Earum, aliquid odit! Soluta magnam quo consequuntur?
          </p>
          <div className='d-flex flex-column flex-sm-row align-items-center'>
            <Link to="/courses">
              <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>
                Our courses
              </button>
            </Link>
            <Link to="/contact">
              <button type='button' className='btn btn-outline-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>
                Get in Touch
              </button>
            </Link>

          </div>
        </div>

      </header>
    </div>
  )
}
