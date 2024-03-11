import React from 'react'

export default function VacationPlan() {
    return (
        <section class="" id="vacation-plan">
            <div class="container mb-5">
                <div class="row">
                    <div class="col text-center" style="margin-left: 220px;">
                        <h1 style="font-size: 60px;">Best<span class="orange-color"> vacation plan</span></h1>
                        <p class="text-muted pt-4" style="font-size: 20px">Plan your perfect vacation with our travel agency. Choose<br/> among hundreds of all-inclusive offers!</p>
                    </div>
                    <div class="col-md-2 d-flex justify-content-start" style="margin-top: 80px;">
                        <img src="../icons/palm-icon.png" alt="icon" class="image-left"/>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-sm-10 d-flex justify-content-end">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="svg-left-arrow bi bi-arrow-left-circle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                        </svg>
                    </div>
                    <div class="col-sm-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="svg-right-arrow ms-4 bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                        </svg>
                    </div>
                </div>
                <ul class="list-unstyled d-flex justify-content-center">
                    <li class="card card-exclusive m-3">
                        <img src="../img/Rome.jpg" class="card-img-top" alt="Rome picture" style="height: 300px; border-radius: 5%;"/>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-7">
                                    <h2 class="card-title" style="font-size: 1.3rem;">Rome, Italty</h2>
                                </div>
                                <div class="col-md-5 d-flex justify-content-end">
                                    <h4 style="color: #FA7436;">$5,42k</h4>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="cursor-icon bi bi-cursor-fill" viewBox="0 0 16 16">
                                        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
                                    </svg>
                                    <span class="ms-2 text-muted" style="font-size: 16px">10 Days Trip</span>
                                </div>
                                <div class="col-md-6 d-flex justify-content-end ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mt-1 svg-star bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <span class="ms-1">4.8</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="card card-exclusive m-3">
                        <img src="../img/London.png" class="card-img-top" alt="London picture" style="height: 300px;"/>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h2 class="card-title" style="font-size: 1.3rem;">London,UK</h2>
                                </div>
                                <div class="col-md-6 d-flex justify-content-end">
                                    <h4 style="color: #FA7436;">$2,42k</h4>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="cursor-icon bi bi-cursor-fill" viewBox="0 0 16 16">
                                        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
                                    </svg>
                                    <span class="ms-2 text-muted" style="font-size: 16px">07 Days Trip</span>
                                </div>
                                <div class="col-md-6 d-flex justify-content-end ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mt-1 svg-star bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <span class="ms-1">4.7</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="card card-exclusive m-3">
                        <img src="../img/Osaka.png" class="card-img-top" alt="Osaka picture" style="height: 300px;"/>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-7">
                                    <h2 class="card-title" style="font-size: 1.3rem;">Osaka,Japan</h2>
                                </div>
                                <div class="col-md-5 d-flex justify-content-end">
                                    <h4 style="color: #FA7436;">$5,42k</h4>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="cursor-icon bi bi-cursor-fill" viewBox="0 0 16 16">
                                        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
                                    </svg>
                                    <span class="ms-2 text-muted" style="font-size: 16px">10 Days Trip</span>
                                </div>
                                <div class="col-md-6 d-flex justify-content-end ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mt-1 svg-star bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <span class="ms-1">4.8</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
