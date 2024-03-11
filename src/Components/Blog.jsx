import React from 'react'

export default function Blog() {
    return (
        <section class="blog p-5" id="blog-box">
            <div class="container text-center">
                <h1 class="box-title" style="font-size: 45px;"><b>Get update with<span class="orange-color"> latest blog</span></b></h1>
            </div>

            <ul class="list-unstyled d-flex justify-content-center mt-5" style="margin-top: 50px;">
                <li class="card card-blog mx-2" style="width: 15rem; height: 15rem;">
                    <img src="../img/blog01.png" class="rounded" alt="Blog picture" style="height: 100%; width: auto;"/>
                    <div class="card-body card-blog">
                        <div class="row">
                            <div class="col-md-12 pt-2 ps-0">
                                <p class="card-text">The Amazing Difference a Year of Travelling.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 pt-3 ps-0">
                                <p class="card-text text-muted">July 27, 2021</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="card card-blog mx-2" style="width: 15rem; height: 15rem;">
                    <img src="../img/blog02.png" class="rounded" alt="Blog picture"/>
                    <div class="card-body card-blog">
                        <div class="row">
                            <div class="col-md-12 pt-2 ps-0">
                                <p class="card-text">Travel far enough, you meet yourself.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 pt-3 ps-0">
                                <p class="card-text text-muted">July 27, 2021</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="card card-blog mx-2" style="width: 15rem; height: 15rem;">
                    <img src="../img/blog03.png" class="rounded" alt="Blog picture"/>
                    <div class="card-body card-blog">
                        <div class="row">
                            <div class="col-md-12 pt-2 ps-0">
                                <p class="card-text">How to Save Money While Visiting Africa .</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 pt-3 ps-0">
                                <p class="card-text text-muted">July 27, 2021</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="card card-blog mx-2" style="width: 15rem; height: 15rem;">
                    <img src="../img/blog04.png" class="rounded" alt="Blog picture"/>
                    <div class="card-body card-blog" style="border-radius: 5%;">
                        <div class="row">
                            <div class="col-md-12 pt-2 ps-0">
                                <p class="card-text">Reflections on 5 Months of Travel: Time to Hang</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 pt-3 ps-0">
                                <p class="card-text text-muted">July 27, 2021</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="d-flex justify-content-center" style="margin-top: 10rem;">
                <svg class="mb-5" height="14" viewBox="0 0 54 14"fill="none">
                    <circle cx="5" cy="7" r="5" fill="#E5E5E5" />
                    <circle cx="27" cy="7" r="7" fill="#FA7436" />
                    <circle cx="49" cy="7" r="5" fill="#E5E5E5" />
                </svg>
            </div>
        </section>
    )
}
