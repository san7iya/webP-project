import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Explore a vast collection of books, from timeless classics to modern bestsellers. 
                Your next adventure awaits in the world of literature.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header