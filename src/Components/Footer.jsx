import React from 'react'
import '../styles/Footer.css'

export default function Footer() {
    return (
        <footer>
            <div class="container" id="subscribe-box">
                <div class="col-md-6 ">
                    <h1 class="col-md-12 pb-5">Subscribe and get exclusive deals & offer</h1>
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
                <div class="d-flex flex-row">
                    <div class="me-auto flex-fill">
                        <h4 class="brand-footer">Trabook 
                            <img src="../icons/Vector.png"/>
                        </h4>
                        <p class="text-secondary text-wrap lh-lg" style="width: 15rem;">Book your trip in minute, get full Control for much longer.</p>
                        <div class="social-icons">
                            <a href="#" class="inline-block"><img src="../icons/facebook.png"/></a>
                            <a href="#" class="inline-block"><img src="../icons/instagram.png"/></a>
                            <a href="#" class="inline-block"><img src="../icons/x.png"/></a>
                        </div>
                    </div>
                    <div class="p-2 flex-fill">
                        <h5>Company</h5>
                        <div class="d-flex flex-column mb-3">
                            <a href="#" >About</a>
                            <a href="#" >Careers</a>
                            <a href="#" >Logistic</a>
                            <a href="#" >Privacy & Policy</a>
                        </div>
                    </div>
                    <div class="p-2 flex-fill">
                        <h5>Contact</h5>
                        <div class="d-flex flex-column mb-3">
                            <a href="#" >Help/FAQ</a>
                            <a href="#" >Press</a>
                            <a href="#" >Affilates</a>
                        </div>
                    </div>
                    <div class="p-2 flex-fill">
                        <h5>More</h5>
                        <div class="d-flex flex-column mb-3">
                            <a href="#" >Press Centre</a>
                            <a href="#" >Our Blog</a>
                            <a href="#" >Low fare tips</a>
                        </div>
                    </div>
                </div>
                <hr/>
                <div class="d-flex justify-content-between">
                    <p class="text-secondary">Copyright, Trabook 2022. All rights reserved.</p>
                    <p class="text-secondary">Terms & Conditions</p>
                </div>
            </div>
        </footer>
    )
}
