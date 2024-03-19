import React from 'react'
import '../styles/Deals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Deals({ cards }) {
    const groupedCards = [];
    for (let i = 0; i < cards.length; i += 4) {
        groupedCards.push(cards.slice(i, i + 4));
    }

    return (
        <section id="vacation">
            <div className="container col-xxl-8 my-5">
                <div className="row">
                    <h3 className="centered-title">Exclusive <span className="orange-color">deals & discounts</span></h3>
                    <p className="prf">Discover our fantastic early booking discounts<br />& start planning your journey.</p>
                </div>
                <div className="container d-flex justify-content-center">
                    <div id="discounts-carousel" className="carousel carousel-dark slide d-none d-lg-block" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {groupedCards.map((group, index) => (
                                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <div className="card-wrapper container-sm d-flex justify-content-around">
                                        {group.map(card => (
                                            <div key={card.id} className="card discounts-carousel-card card-exclusive m-3">
                                                <img src={require(`../images/img/${card.image}`)} className="card-img-top rounded carousel-img" alt={card.title} />
                                                <div className="card-body mb-1">
                                                    <div className="row my-2 pe-1">
                                                        <div className="col-md-6">
                                                            <h5 className="card-title">{card.title}</h5>
                                                        </div>
                                                        <div className="col-md-6 d-flex justify-content-end">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="me-2 pt-1 svg-star bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                            </svg>
                                                            <span className="text-muted">{card.rate}</span>
                                                        </div>
                                                    </div>
                                                    <div className="row my-2 pe-1">
                                                        <div className="col-md-6">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mb-1 svg-location bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                                            </svg>
                                                            <span className="card-text text-muted">{card.country}</span>
                                                        </div>
                                                        <div className="col-md-6 d-flex justify-content-end">
                                                            <span className="card-text oldprice text-muted">${card.oldprice}</span>
                                                            <span className="card-text price ms-2">${card.price}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="arrows d-flex justify-content-center">
                            <button className="btn slider-btn me-3 my-3 p-0 border-0" type="button" data-bs-target="#discounts-carousel" data-bs-slide="prev">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="svg-left-arrow bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                                </svg>
                            </button>
                            <button className="btn slider-btn ms-3 my-3 p-0 border-0" type="button" data-bs-target="#discounts-carousel" data-bs-slide="next">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="svg-right-arrow bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
/*
<section id="tour">
            <div class="container col-xxl-8">
                <div class="row align-items-center justify-content-center">
                    <h3 class="centered-title">
                        Best <b class="resaltar">vacation plan</b>
                    </h3>
                    <p class="prf">
                        Plan your perfect vacation with our travel agency.
                        Choose among hundreds of all-inclusive offers!
                    </p>
                </div>
                <div class="flechas d-flex gap-2 pt-3 pb-4 justify-content-end">
                    <button class="btn" href="#">
                        <i class="bi bi-arrow-left"></i>
                    </button>
                    <button class="btn" href="#">
                        <i class="bi bi-arrow-right"></i>
                    </button>
                </div>
                <div class="row row-cols-1 row-cols-md-3 g-4 align-items-center justify-content-center">
                    <div class="col col-sm-6 col-md-5 col-lg-4">
                        <div class="card w-100 h-100">
                            <img src="./img/rome1.png" class="card-img-top img-fluid rounded" alt="Rome, Italy" />
                            <div class="card-body">
                                <div class="d-flex flex-column flex-sm-row justify-content-between">
                                    <h5 class="card-title">Rome, Italy</h5>
                                    <h5 class="card-title plan-price">
                                        $5,42k
                                    </h5>
                                </div>
                                <div class="d-flex flex-column flex-sm-row justify-content-between">
                                    <p class="card-text">
                                        <img src="./img/Navigation.svg" alt="Pointer" />
                                        10 days trip
                                    </p>
                                    <p class="px-2 text-body-secondary">
                                        <img src="./img/star_1.png" alt="Rank" />
                                        4.8
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col col-sm-6 col-md-5 col-lg-4">
                        <div class="card w-100 h-100">
                            <img src="./img/london21.png" class="card-img-top img-fluid rounded"
                                alt="London, United Kingdom" />
                            <div class="card-body">
                                <div class="d-flex flex-column flex-sm-row justify-content-between">
                                    <h5 class="card-title">London, UK</h5>
                                    <h5 class="card-title plan-price">
                                        $2,42k
                                    </h5>
                                </div>
                                <div class="d-flex flex-column flex-sm-row justify-content-between">
                                    <p class="card-text">
                                        <img src="./img/Navigation.svg" alt="Pointer" />
                                        7 days trip
                                    </p>
                                    <p class="px-2 text-body-secondary">
                                        <img src="./img/star_1.png" alt="Rank" />
                                        4.7
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col col-sm-6 col-md-5 col-lg-4">
                        <div class="card w-100 h-100">
                            <img src="./img/osaka1.png" class="card-img-top img-fluid rounded" alt="Osaka, Japan" />
                            <div class="card-body">
                                <div class="d-flex flex-column flex-sm-row justify-content-between">
                                    <h5 class="card-title">Osaka, Japan</h5>
                                    <h5 class="card-title plan-price">
                                        $5,42k
                                    </h5>
                                </div>
                                <div class="d-flex flex-column flex-sm-row justify-content-between">
                                    <p class="card-text">
                                        <img src="./img/Navigation.svg" alt="Pointer" />
                                        10 days trip
                                    </p>
                                    <p class="px-2 text-body-secondary">
                                        <img src="./img/star_1.png" alt="Rank" />
                                        4.8
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
*/

/*
<div id="discounts-carousel-sm" className="carousel slide d-lg-none">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="card-wrapper container-sm d-flex justify-content-around">
                                <div className="card discounts-carousel-card">
                                    <img src="img/madrid1.png" className="card-img-top rounded carousel-img" alt="Madrid" />
                                    <div className="card-body">
                                        <div className="d-flex align-content-center justify-content-end">
                                            <h5 className="card-title col">Madrid</h5>
                                            <img src="img/starbg.png" alt="star" width="16px" className="h-50 mr-4 mt-1" />
                                            <p className="mx-2 d-flex justify-content-end">4.8</p>
                                        </div>
                                        <div className="d-flex align-content-center justify-content-end">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="me-2" width="13" height="16" viewBox="0 0 13 16" fill="none">
                                                <path d="M6.28572 0C4.61925 0.00196598 3.0216 0.66484 1.84322 1.84321C0.664847 3.02159 0.00197267 4.61924 6.68736e-06 6.28571C-0.00198925 7.64756 0.442853 8.97245 1.26629 10.0571C1.26629 10.0571 1.43772 10.2829 1.46572 10.3154L6.28572 16L11.108 10.3126C11.1331 10.2823 11.3052 10.0571 11.3052 10.0571L11.3057 10.0554C12.1288 8.97121 12.5734 7.64693 12.5714 6.28571C12.5695 4.61924 11.9066 3.02159 10.7282 1.84321C9.54985 0.66484 7.95219 0.00196598 6.28572 0ZM6.28572 8.57143C5.83365 8.57143 5.39173 8.43737 5.01585 8.18622C4.63996 7.93506 4.347 7.57808 4.174 7.16042C4.001 6.74276 3.95573 6.28318 4.04393 5.83979C4.13212 5.39641 4.34981 4.98913 4.66948 4.66947C4.98914 4.34981 5.39642 4.13211 5.8398 4.04392C6.28319 3.95572 6.74277 4.00099 7.16043 4.17399C7.57809 4.34699 7.93507 4.63996 8.18622 5.01584C8.43738 5.39172 8.57144 5.83364 8.57144 6.28571C8.57068 6.89169 8.32962 7.47263 7.90113 7.90112C7.47264 8.32961 6.8917 8.57067 6.28572 8.57143Z" fill="#999999" />
                                            </svg>
                                            <p className="card-text col">Spain</p>
                                            <p className="card-text tachado mx-3">$950</p>
                                            <b className="card-text precio h-50 w-25 d-flex justify-content-center">$850</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card-wrapper container-sm d-flex justify-content-around">
                                <div className="card discounts-carousel-card">
                                    <img src="img/firenze1.png" className="card-img-top rounded carousel-img" alt="Madrid" />
                                    <div className="card-body">
                                        <div className="d-flex align-content-center justify-content-end">
                                            <h5 className="card-title col">Firenze</h5>
                                            <img src="img/starbg.png" alt="star" width="16px" className="h-50 mr-4 mt-1" />
                                            <p className="mx-2 d-flex justify-content-end">4.5</p>
                                        </div>
                                        <div className="d-flex align-content-center justify-content-end">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="me-2" width="13" height="16" viewBox="0 0 13 16" fill="none">
                                                <path d="M6.28572 0C4.61925 0.00196598 3.0216 0.66484 1.84322 1.84321C0.664847 3.02159 0.00197267 4.61924 6.68736e-06 6.28571C-0.00198925 7.64756 0.442853 8.97245 1.26629 10.0571C1.26629 10.0571 1.43772 10.2829 1.46572 10.3154L6.28572 16L11.108 10.3126C11.1331 10.2823 11.3052 10.0571 11.3052 10.0571L11.3057 10.0554C12.1288 8.97121 12.5734 7.64693 12.5714 6.28571C12.5695 4.61924 11.9066 3.02159 10.7282 1.84321C9.54985 0.66484 7.95219 0.00196598 6.28572 0ZM6.28572 8.57143C5.83365 8.57143 5.39173 8.43737 5.01585 8.18622C4.63996 7.93506 4.347 7.57808 4.174 7.16042C4.001 6.74276 3.95573 6.28318 4.04393 5.83979C4.13212 5.39641 4.34981 4.98913 4.66948 4.66947C4.98914 4.34981 5.39642 4.13211 5.8398 4.04392C6.28319 3.95572 6.74277 4.00099 7.16043 4.17399C7.57809 4.34699 7.93507 4.63996 8.18622 5.01584C8.43738 5.39172 8.57144 5.83364 8.57144 6.28571C8.57068 6.89169 8.32962 7.47263 7.90113 7.90112C7.47264 8.32961 6.8917 8.57067 6.28572 8.57143Z" fill="#999999" />
                                            </svg>
                                            <p className="card-text col">Italy</p>
                                            <p className="card-text tachado mx-3">$850</p>
                                            <b className="card-text precio h-50 w-25 d-flex justify-content-center">$750</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card-wrapper container-sm d-flex justify-content-around">
                                <div className="card discounts-carousel-card">
                                    <img src="img/paris1.png" className="card-img-top rounded carousel-img" alt="Madrid" />
                                    <div className="card-body">
                                        <div className="d-flex align-content-center justify-content-end">
                                            <h5 className="card-title col">Paris</h5>
                                            <img src="img/starbg.png" alt="star" width="16px" className="h-50 mr-4 mt-1" />
                                            <p className="mx-2 d-flex justify-content-end">4.4</p>
                                        </div>
                                        <div className="d-flex align-content-center justify-content-end">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="me-2" width="13" height="16" viewBox="0 0 13 16" fill="none">
                                                <path d="M6.28572 0C4.61925 0.00196598 3.0216 0.66484 1.84322 1.84321C0.664847 3.02159 0.00197267 4.61924 6.68736e-06 6.28571C-0.00198925 7.64756 0.442853 8.97245 1.26629 10.0571C1.26629 10.0571 1.43772 10.2829 1.46572 10.3154L6.28572 16L11.108 10.3126C11.1331 10.2823 11.3052 10.0571 11.3052 10.0571L11.3057 10.0554C12.1288 8.97121 12.5734 7.64693 12.5714 6.28571C12.5695 4.61924 11.9066 3.02159 10.7282 1.84321C9.54985 0.66484 7.95219 0.00196598 6.28572 0ZM6.28572 8.57143C5.83365 8.57143 5.39173 8.43737 5.01585 8.18622C4.63996 7.93506 4.347 7.57808 4.174 7.16042C4.001 6.74276 3.95573 6.28318 4.04393 5.83979C4.13212 5.39641 4.34981 4.98913 4.66948 4.66947C4.98914 4.34981 5.39642 4.13211 5.8398 4.04392C6.28319 3.95572 6.74277 4.00099 7.16043 4.17399C7.57809 4.34699 7.93507 4.63996 8.18622 5.01584C8.43738 5.39172 8.57144 5.83364 8.57144 6.28571C8.57068 6.89169 8.32962 7.47263 7.90113 7.90112C7.47264 8.32961 6.8917 8.57067 6.28572 8.57143Z" fill="#999999" />
                                            </svg>
                                            <p className="card-text col">France</p>
                                            <p className="card-text tachado mx-3">$699</p>
                                            <b className="card-text precio h-50 w-25 d-flex justify-content-center">$599</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card-wrapper container-sm d-flex justify-content-around">
                                <div className="card discounts-carousel-card">
                                    <img src="img/london1.png" className="card-img-top rounded carousel-img" alt="Madrid" />
                                    <div className="card-body">
                                        <div className="d-flex align-content-center justify-content-end">
                                            <h5 className="card-title col">London</h5>
                                            <img src="img/starbg.png" alt="star" width="16px" className="h-50 mr-4 mt-1" />
                                            <p className="mx-2 d-flex justify-content-end">4.8</p>
                                        </div>
                                        <div className="d-flex align-content-center justify-content-end">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="me-2" width="13" height="16" viewBox="0 0 13 16" fill="none">
                                                <path d="M6.28572 0C4.61925 0.00196598 3.0216 0.66484 1.84322 1.84321C0.664847 3.02159 0.00197267 4.61924 6.68736e-06 6.28571C-0.00198925 7.64756 0.442853 8.97245 1.26629 10.0571C1.26629 10.0571 1.43772 10.2829 1.46572 10.3154L6.28572 16L11.108 10.3126C11.1331 10.2823 11.3052 10.0571 11.3052 10.0571L11.3057 10.0554C12.1288 8.97121 12.5734 7.64693 12.5714 6.28571C12.5695 4.61924 11.9066 3.02159 10.7282 1.84321C9.54985 0.66484 7.95219 0.00196598 6.28572 0ZM6.28572 8.57143C5.83365 8.57143 5.39173 8.43737 5.01585 8.18622C4.63996 7.93506 4.347 7.57808 4.174 7.16042C4.001 6.74276 3.95573 6.28318 4.04393 5.83979C4.13212 5.39641 4.34981 4.98913 4.66948 4.66947C4.98914 4.34981 5.39642 4.13211 5.8398 4.04392C6.28319 3.95572 6.74277 4.00099 7.16043 4.17399C7.57809 4.34699 7.93507 4.63996 8.18622 5.01584C8.43738 5.39172 8.57144 5.83364 8.57144 6.28571C8.57068 6.89169 8.32962 7.47263 7.90113 7.90112C7.47264 8.32961 6.8917 8.57067 6.28572 8.57143Z" fill="#999999" />
                                            </svg>
                                            <p className="card-text col">UK</p>
                                            <p className="card-text tachado mx-3">$950</p>
                                            <b className="card-text precio h-50 w-25 d-flex justify-content-center">$850</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flechas d-flex justify-content-center">
                        <button className="btn slider-btn mx-3 my-3" type="button" data-bs-target="#discounts-carousel-sm" data-bs-slide="prev">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="me-3 svg-left-arrow bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                            </svg>
                        </button>
                        <button className="btn slider-btn mx-2 my-3" type="button" data-bs-target="#discounts-carousel-sm" data-bs-slide="next">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="ms-3 svg-right-arrow bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                            </svg>
                        </button>
                    </div>
                </div>
*/

/*
<div className="card discounts-carousel-card">
                                            <img src={require(`../images/img/${card.image}`)} className="card-img-top rounded carousel-img" alt="" />
                                            <div className="card-body">
                                                <div className="d-flex align-content-center justify-content-end">
                                                    <h5 className="card-title col">{card.title}</h5>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ms-5 mb-1 svg-star bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg>
                                                    <p className="mx-2 d-flex justify-content-end">{card.rate}</p>
                                                </div>
                                                <div className="d-flex align-content-center justify-content-end">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="me-2" width="13" height="16" viewBox="0 0 13 16" fill="none">
                                                        <path d="M6.28572 0C4.61925 0.00196598 3.0216 0.66484 1.84322 1.84321C0.664847 3.02159 0.00197267 4.61924 6.68736e-06 6.28571C-0.00198925 7.64756 0.442853 8.97245 1.26629 10.0571C1.26629 10.0571 1.43772 10.2829 1.46572 10.3154L6.28572 16L11.108 10.3126C11.1331 10.2823 11.3052 10.0571 11.3052 10.0571L11.3057 10.0554C12.1288 8.97121 12.5734 7.64693 12.5714 6.28571C12.5695 4.61924 11.9066 3.02159 10.7282 1.84321C9.54985 0.66484 7.95219 0.00196598 6.28572 0ZM6.28572 8.57143C5.83365 8.57143 5.39173 8.43737 5.01585 8.18622C4.63996 7.93506 4.347 7.57808 4.174 7.16042C4.001 6.74276 3.95573 6.28318 4.04393 5.83979C4.13212 5.39641 4.34981 4.98913 4.66948 4.66947C4.98914 4.34981 5.39642 4.13211 5.8398 4.04392C6.28319 3.95572 6.74277 4.00099 7.16043 4.17399C7.57809 4.34699 7.93507 4.63996 8.18622 5.01584C8.43738 5.39172 8.57144 5.83364 8.57144 6.28571C8.57068 6.89169 8.32962 7.47263 7.90113 7.90112C7.47264 8.32961 6.8917 8.57067 6.28572 8.57143Z" fill="#999999" />
                                                    </svg>
                                                    <p className="card-text col">{card.country}</p>
                                                    <p className="card-text tachado mx-3">${card.oldprice}</p>
                                                    <b className="card-text precio h-50 w-25 d-flex justify-content-center">${card.price}</b>
                                                </div>
                                            </div>
                                        </div>
                                        */
