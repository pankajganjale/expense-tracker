import React from 'react';
import Wallet from "../../Utilities/images/navbar/wallet.png";
import "./Navbar.css";

const Navbar = () => {
    return (
        <header className='navbar-container'>
            <div>
                <img src={Wallet} />
                <div>Expense Tracker</div>
            </div>
            <div>
                <button className='login-btn'>Login</button>
            </div>
        </header>
    )
}

export default Navbar;
