import React from 'react'
import '../styles/GetStarted.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function GetStarted(props) {
    return (
        <section id="get-started">
            <div className="container col-xxl-8">
                <div className="row flex-lg-row-reverse align-items-center g-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={require(`../images/img/${props.image}`)} className="traveler-img d-block mx-lg-auto img-fluid" loading="lazy" alt="Traveler"/>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3 text-start" id="title">Get your exciting <span className="orange-color">journey</span> started with us.</h1>
                        <p className="lead text-start">A Team of experienced tourism professionals will provide you with the best advice and tips for your desired place.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-5">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" id="btn-discover">Discover Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className="container d-flex justify-content-center">
                    <div className="card w-80 align-items-center px-5" id="floating-card">
                        <div className="row">
                            <div className="col-lg">
                                <div className="card-body row text-start">
                                    <div className="d-flex align-items-center">
                                        <h6 className="card-title">Location</h6>
                                        <svg className="mx-2 mb-2" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                                            <path d="M1 1.5L6 6.5L11 1.5" stroke="#FA7436" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="card-text text-muted">Where are you going</p>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="card-body row text-start">
                                    <div className="d-flex align-items-center">
                                        <h6 className="card-title">Date</h6>
                                        <svg className="mx-2 mb-2" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                                            <path d="M1 1.5L6 6.5L11 1.5" stroke="#FA7436" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="card-text text-muted">When you will go</p>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="card-body row text-start">
                                    <div className="d-flex align-items-center">
                                        <h6 className="card-title">Guest</h6>
                                        <svg className="mx-2 mb-2" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                                            <path d="M1 1.5L6 6.5L11 1.5" stroke="#FA7436" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="card-text text-muted">Number of guest</p>
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
            </section>
        </section> 
    )
}
