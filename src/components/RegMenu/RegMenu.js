

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function RegMenu() {
    return <div>
      <NavLink to='/register'>Register</NavLink>
        <NavLink to='/login'>Login</NavLink>


  </div>;
}
