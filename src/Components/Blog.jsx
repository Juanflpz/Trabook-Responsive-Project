import React from 'react'
import '../styles/Blog.css'

export default function Blog() {
    return (
        <section className="blog p-5" id="blog-box">
            <div className="container text-center">
                <h1 className="box-title" style="font-size: 45px;"><b>Get update with<span className="orange-color"> latest blog</span></b></h1>
            </div>

            <ul className="list-unstyled d-flex justify-content-center mt-5" style="margin-top: 50px;">
                <li className="card card-blog mx-2" style="width: 15rem; height: 15rem;">
                    <img src="../img/blog01.png" className="rounded" alt="Blog picture" style="height: 100%; width: auto;"/>
                    <div className="card-body card-blog">
                        <div className="row">
                            <div className="col-md-12 pt-2 ps-0">
                                <p className="card-text">The Amazing Difference a Year of Travelling.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 pt-3 ps-0">
                                <p className="card-text text-muted">July 27, 2021</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="card card-blog mx-2" style="width: 15rem; height: 15rem;">
                    <img src="../img/blog02.png" className="rounded" alt="Blog picture"/>
                    <div className="card-body card-blog">
                        <div className="row">
                            <div className="col-md-12 pt-2 ps-0">
                                <p className="card-text">Travel far enough, you meet yourself.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 pt-3 ps-0">
                                <p className="card-text text-muted">July 27, 2021</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="card card-blog mx-2" style="width: 15rem; height: 15rem;">
                    <img src="../img/blog03.png" className="rounded" alt="Blog picture"/>
                    <div className="card-body card-blog">
                        <div className="row">
                            <div className="col-md-12 pt-2 ps-0">
                                <p className="card-text">How to Save Money While Visiting Africa .</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 pt-3 ps-0">
                                <p className="card-text text-muted">July 27, 2021</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="card card-blog mx-2" style="width: 15rem; height: 15rem;">
                    <img src="../img/blog04.png" className="rounded" alt="Blog picture"/>
                    <div className="card-body card-blog" style="border-radius: 5%;">
                        <div className="row">
                            <div className="col-md-12 pt-2 ps-0">
                                <p className="card-text">Reflections on 5 Months of Travel: Time to Hang</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 pt-3 ps-0">
                                <p className="card-text text-muted">July 27, 2021</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="d-flex justify-content-center" style="margin-top: 10rem;">
                <svg className="mb-5" height="14" viewBox="0 0 54 14"fill="none">
                    <circle cx="5" cy="7" r="5" fill="#E5E5E5" />
                    <circle cx="27" cy="7" r="7" fill="#FA7436" />
                    <circle cx="49" cy="7" r="5" fill="#E5E5E5" />
                </svg>
            </div>
        </section>
    )
}
