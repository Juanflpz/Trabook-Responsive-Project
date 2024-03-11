import React from 'react'

export default function Needs() {
    return (
        <section class="mt-0" id="things-u-need">
            <div class="container">
                <div class="row">
                    <div class="col text-center" style="margin-top: 80px; margin-left: 220px;">
                        <h1 class="lh-1" style="font-size: 60px;">Things you need<span class="orange-color"> to do</span></h1>
                        <p class="text-muted pt-3" style="font-size: 20px">We ensure that you´ll embark on a perfectly planned,<br> safe vacation at a price you can afford.</p>
                    </div>
                    <div class="col-md-2 d-flex justify-content-start" style="margin-top: 80px;">
                        <img src="icons/Things-icon.png" alt="icon" class="image-left">
                    </div>
                </div>
            </div>
            <ul class="list-unstyled d-flex justify-content-center" style="margin-top: 50px;">
                <li class="card card-signup" style="width: 23rem; height: 260px; border-radius: 3%;">
                    <img src="icons/Things-icon-1.png" class="card-icon-top mt-4 ms-4" alt="Sign-up-icon">
                    <div class="card-body">
                        <h4 class="card-title font-weight-bold mt-4 ms-2" style="font-size: 20px;">Sign up</h4>
                        <p class="card-text text-muted ms-2 mt-1" style="font-size: 19px;">Completes all the work associated<br> with planning and processing</p>
                    </div>
                </li>
                <li class="card card-worth" style="width: 23rem; height: 260px; border-radius: 3%; margin-left: 28px;">
                    <img src="icons/Things-icon-2.png" class="card-icon-top mt-4 ms-4" alt="Worth-of-money-icon">
                    <div class="card-body">
                        <h4 class="card-title font-weight-bold mt-4 ms-2" style="font-size: 20px;">Worth of money</h4>
                        <p class="card-text text-muted ms-2 mt-1" style="font-size: 19px;">After successful access then book<br>from exclusive deals & pricing</p>
                    </div>
                </li>
                <li class="card card-exciting" style="width: 23rem; height: 260px; border-radius: 3%; margin-left: 28px;">
                    <img src="icons/Things-icon-3.png" class="card-icon-top mt-4 ms-4" alt="Exciting-travel-icon">
                    <div class="card-body">
                        <h4 class="card-title font-weight-bold mt-4 ms-2" style="font-size: 20px;">Exciting travel</h4>
                        <p class="card-text text-muted ms-2 mt-1" style="font-size: 19px;">Start and explore a wide range of<br>exciting travel experience</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}
