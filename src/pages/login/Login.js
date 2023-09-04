
import React from 'react';

import "./login.css";
import { Container } from '@mui/material';





export default function Login() {

    

   

    return (
        <>
            <container  className="page">
                <form class="login">
                    <h1 >Login</h1>
                    
                    <input type="text" placeholder="Username"></input>
                    <input type="password" placeholder="Password"></input>
                    <button>Login</button>
                </form>
                
            </container>
        </>
    )
}