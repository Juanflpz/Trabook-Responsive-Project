import React from 'react'
import '../styles/Deals.css'

export default function Deals() {
    return (
        <section class="special-background" id="deals-discounts">
            <div class="container text-center mt-5">
                <h1 style="font-size: 60px;">Exclusive<span class="orange-color"> deals & discounts</span></h1>
                <p class="text-muted mt-4 mb-5" style="font-size: 20px">Discover our fantastic early booking discounts<br>& start planning your journey</p>
            </div>
            <div class="row">
                <ul class="list-unstyled d-flex justify-content-center mt-5" style="margin-top: 50px;">
                    <li class="card card-exclusive m-3">
                        <img src="img/Deals-card-1.png" class="card-img-top" alt="Madrid picture">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5 class="card-title" style="font-size: 25px;">Madrid</h5>
                                </div>
                                <div class="col-md-6 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ms-5 mb-1 svg-star bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <span>4.8</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="svg-location bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                                    </svg>
                                    <span class="text-muted">Spain</span>
                                </div>
                                <div class="col-md-6">
                                    <span class="ms-2 me-1 text-muted" style="font-size: 16px; text-decoration: line-through; width: 100px;">$850</span>
                                    <span class="ms-2 me-1" style="font-size: 16px; color: #FA7436; background-color: #fd883a8a; border-radius: 10%">$850</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="card card-exclusive m-3">
                        <img src="img/Deals-card-2.png" class="card-img-top" alt="Firenze picture">
                        <div class="card-body" style="border-radius: 5%;">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5 class="card-title" style="font-size: 25px;">Firenze</h5>
                                </div>
                                <div class="col-md-6 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ms-5 mb-1 svg-star bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <span>4.5</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="svg-location bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                                    </svg>
                                    <span class="text-muted">Italy</span>
                                </div>
                                <div class="col-md-6">
                                    <span class="ms-2 me-1 text-muted" style="font-size: 16px; text-decoration: line-through; width: 100px;">$850</span>
                                    <span class="ms-2 me-1" style="font-size: 16px; color: #FA7436; background-color: #fd883a8a; border-radius: 10%">$850</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="card card-exclusive m-3">
                        <img src="img/Deals-card-3.png" class="card-img-top" alt="Paris picture">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5 class="card-title" style="font-size: 25px;">Paris</h5>
                                </div>
                                <div class="col-md-6 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ms-5 mb-1 svg-star bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <span>4.4</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="svg-location bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                                    </svg>
                                    <span class="text-muted">France</span>
                                </div>
                                <div class="col-md-6">
                                    <span class="ms-2 me-1 text-muted" style="font-size: 16px; text-decoration: line-through; width: 100px;">$850</span>
                                    <span class="ms-2 me-1" style="font-size: 16px; color: #FA7436; background-color: #fd883a8a; border-radius: 10%">$850</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="card card-exclusive m-3">
                        <img src="img/Deals-card-4.png" class="card-img-top" alt="London picture">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5 class="card-title" style="font-size: 25px;">London</h5>
                                </div>
                                <div class="col-md-6 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ms-5 mb-1 svg-star bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <span>4.8</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="svg-location bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                                    </svg>
                                    <span class="text-muted">UK</span>
                                </div>
                                <div class="col-md-6">
                                    <span class="ms-2 me-1 text-muted" style="font-size: 16px; text-decoration: line-through; width: 100px;">$850</span>
                                    <span class="ms-2 me-1" style="font-size: 16px; color: #FA7436; background-color: #fd883a8a; border-radius: 10%">$850</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="row m-5">
                <div class="col d-flex justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="me-3 svg-left-arrow bi bi-arrow-left-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="ms-3 svg-right-arrow bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                    </svg>
                </div>
            </div>
        </section>
    )
}
