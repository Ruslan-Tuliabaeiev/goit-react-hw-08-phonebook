

import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth/selectors';
import LogAut from '../LogAut/LogAut';
import Navigation from '../Navigation/Navigation';
import RegMenu from '../RegMenu/RegMenu';

export  function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
 
    return <div>
        <Navigation />
        {isLoggedIn ? <LogAut/>:<RegMenu/>  }
        
  </div>;
}

