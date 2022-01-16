import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import Cards from "../../Utilities/images/signup/card.png";

const Signup = () => {
    return (
        <div className='signup-container'>
            <img src={Cards} />
            <form>
                <div>
                    <input type="text" placeholder='Name' required />
                </div>
                <div>
                    <input type="email" placeholder='Email' required />
                </div>
                <div>
                    <input type="text" placeholder='Phone' required />
                </div>
                <div>
                    <input type="password" placeholder='Create Password' required />
                </div>
                <div>
                    <input type="password" placeholder='Confirm Password' required />
                </div>
                <div>
                    <input type="submit" value="Sign Up" />
                    <div>
                        <Link to="/login" className='signup-link'>Already have an account</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signup;
