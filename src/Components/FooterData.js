import React from 'react';

function FooterData() {
  return (
    <footer className="footer">
    <div className="container">
        <div className="row">
            <div className="footer-col">
                <h3>Company</h3>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Our Services</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Affiliate Program</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h3>Get Help</h3>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Shipping</a></li>
                    <li><a href="#">Returns</a></li>
                    <li><a href="#">Order Status</a></li>
                    <li><a href="#">Payment Options</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h3>Online shop</h3>
                <ul>
                    <li><a href="#">Apple Laptops</a></li>
                    <li><a href="#">Hp Laptops</a></li>
                    <li><a href="#">Lenovo Laptops</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h3>follow us</h3>
                <div className="social-links">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    </div>
</footer>
  ) 
};

export default FooterData;
