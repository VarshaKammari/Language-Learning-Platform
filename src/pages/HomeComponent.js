import React from 'react';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import Language from '../components/Language';
import Footer from '../components/Footer';
import Signup from './Signup';

function HomeComponent() {
  return (
    <>
    <NavBar />
    <Banner />
    <Language/>
    <Footer />
    </>
  )
}

export default HomeComponent
