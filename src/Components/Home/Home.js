import React from 'react';
import { Link } from 'react-router-dom';
import Catagories from '../../Catagories/Catagories';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../CONTACT/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Info from '../InfoCard/Info';
import Nav from '../Nav/Nav';
import Table from '../Nav/Table';
import Products from '../Product/Products';
import Sales from '../Sales/Sales';
import ViewC from '../ViewC/ViewC';
import Search from './Search';

const Home = () => {
    return (
        <div>
            <Search></Search>
            <Catagories></Catagories>
            <Banner></Banner>
          
            <h1 className='uppercase text-2xl shadow text-center my-6 p-5 text-transparent text-2xl bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600'>services</h1>
         <Info></Info>
         <Sales></Sales>

         
        
            <h1 className='text-2xl text-center my-5 p-2 uppercase  text-transparent text-2xl bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 all_items'>New arrival</h1>
            <Products></Products> 
            <Link to={'/all'} className='btn  text-center flex my-5 p-2 bg-pink-200 border-0 rounded-0 bold'>All Items</Link>
            <ViewC></ViewC>
            
            {/*<h1 className='text-2xl text-center my-5 p-2 uppercase  text-transparent text-2xl bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 uppercase all_items'>contact</h1> */}
            <Contact></Contact>
            <h1 className='text-2xl text-center my-5 p-2 uppercase  text-transparent text-2xl bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 uppercase all_items'>Customer's review</h1>

            <Table></Table>
            <Footer></Footer> 
        </div>
    );
};

export default Home;    