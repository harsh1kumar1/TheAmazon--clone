import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';

function Header() {
const [{basket,user}, dispatch] = useStateValue();

  return (
    <div className='header'>
      <Link to='/'>
      <img 
      className='header__logo'
       src='https://d24wuq6o951i2g.cloudfront.net/img/events/id/458/458120819/assets/05f98674749006c84f063624cc76acc1.amazon_logo_RGB_REV.png'
       />
      </Link>
      
      
      <div 
      className='header_search'>
        <input className='header_searchInput' type="text"/>
        <SearchIcon className='header_searchIcon'/>
      </div>

      <div className='header__nav'>

        <Link to='/login'>
       <div className='header__option'>
        
               <span className='header__optionLineOne'>Hellow Guest</span>
                <span className='header__optionLineTwo'>Sign In</span>
       </div>
       </Link>
       <div className='header__option'>
               <span className='header__optionLineOne'>Return</span>
               <span className='header__optionLineTwo'>& Orders</span>
       </div>
       <div className='header__option'>
                <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Prime</span>
       </div>
       <Link to='/checkout'>
       <div className='header__optionBaske'>
           <ShoppingBasketIcon/>
           <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
       </div>
       </Link>
       

      </div>
    </div>
  )
}

export default Header
