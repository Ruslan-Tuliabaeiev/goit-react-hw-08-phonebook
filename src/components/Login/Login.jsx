

import { useState } from 'react';

import {  useLoginUserMutation } from '../../redux/auth';
export function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginUser] = useLoginUserMutation();

    const handleChange = event => {
        // console.log(event.target.value)
        const { name, value } = event.target;

        switch (name) {
       

            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;

            default:
                return;


        }


    };

    const handleSubmit = (event) => {
        event.preventDefault()
        loginUser({email, password })

        reset();
    }


    const reset = () => {
        setEmail('')
        setPassword('')
    }

    return <div>
        <form onSubmit={handleSubmit}>
  
            <label >Email
                <input
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                />


            </label>
            <label >Password
                <input
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                />

            </label>
            <button type='submit'>Login</button>
        </form>
        


  </div>;
}

