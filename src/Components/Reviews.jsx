import React from 'react'

export default function Reviews() {
    return (
        <section class="" id="reviews">
            <div class="container col-xxl-8">
                <div class="row flex-lg-row align-items-center g-5 px-5">
                    <div class="col-lg-5">
                        <h1 class="display-5 fw-bold lh-1 mb-3">What people say<b class="orange-color"> <br/>about us.</b></h1>
                        <p class="lead">Our Clients send us bunch of smilies with our services and we love them.</p>
                        <div class="d-flex gap-2 mt-3 mb-4 justify-content-start">
                            <button class="btn" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="svg-left-arrow bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                                </svg>
                            </button>
                            <button class="btn" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="svg-right-arrow bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <img src="./img/review.png" class="d-block mx-lg-auto" alt="Client's review" loading="lazy" style="height: 650px; margin-top: 5.5rem;"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
