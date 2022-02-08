

import React from 'react';
import {  useSelector } from 'react-redux';
import {  useLogOutUserMutation } from '../../redux/auth';
import { authSelectors } from '../../redux/auth';

export default function LogAut() {
  const [logOutUser] = useLogOutUserMutation();
  const name = useSelector(authSelectors.getUserName)

    return <div>
     <span>Hello {name} </span> <button type='button' onClick={() => logOutUser()}>Logout</button>
        

  </div>;
}
