import React from 'react';
import "./Login.css";
import Card from "../../Utilities/images/login/card.png";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className='login-container'>
            <img src={Card} />
            <form>
                <div>
                    <input type="email" placeholder='Email' required />
                </div>
                <div>
                    <input type="password" placeholder='Password' required />
                </div>
                <div>
                    <input type="submit" value="Sign In" />
                    <div>
                    <Link to="/signup" className='login-link'>Create a new account</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;
