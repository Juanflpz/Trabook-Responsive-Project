import React from 'react'
import '../styles/GetStarted.css'

export default function GetStarted() {
    return (
        <section id="get-started">
            <div className="container">
                <div className="row">
                    <div className="col-md-6" style="margin-top: 80px;">
                        <h1 style="font-size: 75px;">Get started your exciting <span className="orange-color">journey </span>with us.</h1>
                        <p className="mb-4 mt-5 text-muted" style="font-size: 25px">A Team of experienced tourism professionals will<br/>provide you with the best advice and tips for your<br/>desired place.</p>
                        <a href="#" id="btn-discover" className="mt-5 btn btn-lg">Discover now</a>
                    </div>
                    <div className="position-relative ms-0 col-md-6" style="margin-left: 10px; margin-top: 80px;">
                        <img src={require(`../images/img/${props.image}`)} className="img-fluid" alt="main-img-background"/>
                        <img src={require(`../images/img/${props.image}`)} className="overlay-image" alt="main-img"/>
                    </div>
                </div>
                <div  style="margin-bottom: 100px;">
                    <div className="container d-flex justify-content-center">
                        <div className="card w-75 align-items-center px-3 py-2" id="floating-card" style="margin-top: 60px;">
                            <div className="row">
                                <div className="col-lg">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <h6 className="card-title">Location</h6>
                                            <svg className="mx-2 mb-2" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                                                <path d="M1 1.5L6 6.5L11 1.5" stroke="#FA7436" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                        <p className="card-text text-muted" style="font-size: 13px;">Where are you going</p>
                                    </div>
                                </div>
                                <div className="col-lg">
                                    <div className="card-body row">
                                        <div className="d-flex align-items-center">
                                            <h6 className="card-title">Date</h6>
                                            <svg className="mx-2 mb-2" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                                                <path d="M1 1.5L6 6.5L11 1.5" stroke="#FA7436" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                        <p className="card-text text-muted" style="font-size: 13px;">When you will go</p>
                                    </div>
                                </div>
                                <div className="col-lg">
                                    <div className="card-body row">
                                        <div className="d-flex align-items-center">
                                            <h6 className="card-title">Guest</h6>
                                            <svg className="mx-2 mb-2" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                                                <path d="M1 1.5L6 6.5L11 1.5" stroke="#FA7436" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                        <p className="card-text text-muted" style="font-size: 13px;">Number of guest</p>
                                    </div>
                                </div>
                                <div className="col-lg d-flex justify-content-end">
                                    <div className="card-body">
                                        <button type="button" id="explore-btn" className="btn">Explore Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
