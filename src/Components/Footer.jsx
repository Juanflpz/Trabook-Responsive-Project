import React from 'react'
import '../styles/Footer.css'

export default function Footer() {
    return (
        <footer>
            <div class="container" id="subscribe-box">
                <div class="col-md-6 ">
                    <h1 class="col-md-12 pb-5">Subscribe and get exclusive deals & offers</h1>
                    <div class="input-group position-relative">
                        <span class="input-group-text border border-0 bg-white ps-3"><img src="../img/email.png" alt="Email icon"/></span>
                        <input type="text" class="form-control form-control-lg pt-4 pb-4 ps-0 border-0 bg-white fs-6" placeholder="Enter your mail" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                        <button class="btn btn-outline-secondary position-absolute top-0 end-0 mx-2 mt-3 border-0 fs-6" type="button" id="button-addon1">Subscribe</button>
                    </div>
                </div>
                <div class="background-image-top-right"></div>
                <div class="background-image-bottom-left"></div>     
            </div>
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5">
                    <div class="col mb-2">
                        <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                            <img src="../images/img/Logo.png" alt="Trabook logo" />
                        </a>
                        <p class="text-body-secondary">Book your trip in a minute, get full control for much longer.</p>
                        <div class="social-media d-flex gap-2 pt-2 pb-1 justify-content-start">
                            <a href="#" class="btn">
                                <i class="bi bi-facebook"></i>
                            </a>
                            <a href="#" class="btn">
                                <i class="bi bi-instagram"></i>
                            </a>
                            <a href="#" class="btn">
                                <i class="bi bi-twitter"></i>
                            </a>
                        </div>
                    </div>
                    <div class="col mb-2"></div>
                    <div class="col mb-2">
                        <h5>Company</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2">
                                <a href="#" class="nav-link p-0 text-body-secondary">About</a>
                            </li>
                            <li class="nav-item mb-2">
                                <a href="#" class="nav-link p-0 text-body-secondary">Careers</a>
                            </li>
                            <li class="nav-item mb-2">
                                <a href="#" class="nav-link p-0 text-body-secondary">Logistic</a>
                            </li>
                            <li class="nav-item mb-2">
                                <a href="#" class="nav-link p-0 text-body-secondary">Privacy & Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col mb-2">
                        <h5>Contact</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2">
                                <a href="#" class="nav-link p-0 text-body-secondary">Help/FAQ</a>
                            </li>
                            <li class="nav-item mb-2">
                                <a href="#" class="nav-link p-0 text-body-secondary">Press</a>
                            </li>
                            <li class="nav-item mb-2">
                                <a href="#" class="nav-link p-0 text-body-secondary">Affiliates</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col mb-2">
                        <h5>More</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2">
                                <a href="#" class="nav-link p-0 text-body-secondary">Press Centre</a>
                            </li>
                            <li class="nav-item mb-2">
                                <a href="#" class="nav-link p-0 text-body-secondary">Our Blog</a>
                            </li>
                            <li class="nav-item mb-2">
                                <a href="#" class="nav-link p-0 text-body-secondary">Low fare tips</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p>© Trabook 2022. All rights reserved.</p>
                    <a href="#" class="nav-link px-2 text-body-secondary">Terms & Conditions</a>
                </div>
            </div>
        </footer>
    )
}
