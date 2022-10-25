import React from "react";
import "../App.css"
const Footer = () => {
    return (
        <footer>
            <div class="footer-content">
                <p style={{color: "white",fontSize: "20px"}}>This is the sample totalitycorp-frontend-assignment</p>
                <ul class="socials">
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                    <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                    <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;