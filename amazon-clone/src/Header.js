import React from 'react';
import  './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
  const [{cart, user}, dispatch] = useStateValue();

  const handelAuthentication = () => {
    if(user){
      auth.signOut();
    }
  }

  return (
    <div className='header'>
      <Link to="/">
        <img className='header_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
      </Link>
    <div className='header_search' >
        <input className='header_searchInput' type="text"/>

        <SearchIcon className='header_searchIcon' />

    </div>

    <div className='header_nav'>
      <Link to={!user && "/login"}>
          <div onClick={handelAuthentication} className='header_option'>
              <span className='header_option_line1'>Hello {user? user.email:"Guest"}</span>
              <span className='header_option_line2'>{user?'Sign Out':'Sign in'}</span>
          </div>
        </Link>
        <Link to="/orders">   
          <div className='header_option'>
              <span className='header_option_line1'>Returns</span>
              <span className='header_option_line2'>& Orders</span>
          </div>
        </Link>    
        <div className='header_option'>
            <span className='header_option_line1'>Your</span>
            <span className='header_option_line2'>Prime</span>
        </div> 

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingCartOutlinedIcon />
            <span className='header_option_line2 header_basketCount'>{cart?.length}</span>
          </div>
        </Link>


    </div>

    </div>
  )
}

export default Header
