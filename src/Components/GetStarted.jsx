import React from 'react'
import '../styles/GetStarted.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function GetStarted({ props }) {
    return (
        <div id="get-started">
            <div className="home">
                <div className="container col-xxl-8">
                    <div className="row flex-lg-row-reverse align-items-center">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src={require(`../images/img/${props.image}`)} className="traveler-img d-block mx-lg-auto img-fluid" loading="lazy" alt="Traveler" />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold lh-1 mb-4 text-start" id="title" dangerouslySetInnerHTML={{ __html: props.title }}></h1>
                            <p className="lead subtitle">{props.subtitle}</p>
                            <div className="d-grid d-md-flex justify-content-md-start mt-5">
                                <button type="button" className="btn btn-primary btn-lg me-md-2" id="btn-discover">{props.btn_txt_1}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <section>
                    <div className="container d-flex justify-content-center">
                        <div className="card align-items-center px-5" id="floating-card">
                            <div className="row">
                                <div className="col-lg">
                                    <div className="card-body row text-start">
                                        <div className="d-flex align-items-center">
                                            <h6 className="card-title-1">{props.item1}</h6>
                                            <svg className="mx-2 mb-1" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                                                <path d="M1 1.5L6 6.5L11 1.5" stroke="#FA7436" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <p className="card-text text-muted">{props.subitem1}</p>
                                    </div>
                                </div>
                                <div className="col-lg">
                                    <div className="card-body row text-start">
                                        <div className="d-flex align-items-center">
                                            <h6 className="card-title-2">{props.item2}</h6>
                                            <svg className="mx-2 mb-1" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                                                <path d="M1 1.5L6 6.5L11 1.5" stroke="#FA7436" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <p className="card-text text-muted">{props.subitem2}</p>
                                    </div>
                                </div>
                                <div className="col-lg">
                                    <div className="card-body row text-start">
                                        <div className="d-flex align-items-center">
                                            <h6 className="card-title-3">{props.item3}</h6>
                                            <svg className="mx-2 mb-1" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                                                <path d="M1 1.5L6 6.5L11 1.5" stroke="#FA7436" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <p className="card-text text-muted">{props.subitem3}</p>
                                    </div>
                                </div>
                                <div className="col-lg d-flex justify-content-end">
                                    <div className="card-body">
                                        <button type="button" id="explore-btn" className="btn">{props.btn_txt_2}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
