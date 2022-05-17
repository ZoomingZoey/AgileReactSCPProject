import React from 'react';
import'../../App.css';
import Cards from '../Cards';
import Mainpage from '../Mainpage';
// import Footer from '../Footer';

function Home () {
    return (
        <>
          <Mainpage />
          <Cards /> 
          {/* <Footer />         */}
        </>
    );
}

export default Home;