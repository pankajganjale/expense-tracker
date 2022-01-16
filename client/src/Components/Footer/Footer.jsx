import React from 'react';
import "./Footer.css";
import Location from "../../Utilities/images/footer/location.png";
import Phone from "../../Utilities/images/footer/phone.png";
import Mail from "../../Utilities/images/footer/email.png";
import Instagram from "../../Utilities/images/footer/instagram.png";
import Facebook from "../../Utilities/images/footer/facebook.png";
import Twitter from "../../Utilities/images/footer/twitter.png";
import Youtube from "../../Utilities/images/footer/youtube.png";

const Footer = () => {
    return (
        <div className='footer-container'>
            <div></div>
            <div className='left-footer'>
                <div>
                    <img src={Location} alt="" />
                    <div>Dalal Street, Mumbai</div>
                </div>
                <div>
                    <img src={Phone} alt="" />
                    <div>+91 9876543210</div>
                </div>
                <div>
                    <img src={Mail} alt="" />
                    <div>expensetracker@mail.com</div>
                </div>
            </div>
            <div className='right-footer'>
                <div>About the company</div>
                <div>Expense Tracker Private Limited creates Mobile, Web and Desktop applications for users to keep records of their financials.</div>
                <div className='social-icons'>
                    <img src={Twitter} alt="" />
                    <img src={Facebook} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={Youtube} alt="" />
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Footer;
