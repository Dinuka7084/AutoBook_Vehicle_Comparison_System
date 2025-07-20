import React from 'react';
import NavBar from './NavBar';
import {Link} from 'react-router-dom';

export default function Home(){
    return (
        <div>
           <NavBar/>
           <Link to='/comparisonhome' className='gg'>Car Comparison</Link>
        </div>
    )
}