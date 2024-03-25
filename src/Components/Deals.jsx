import React from 'react'
import '../styles/Deals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Deals({ cards }) {
    // Agrupar las tarjetas en grupos de cuatro
    const groupedCards = [];
    for (let i = 0; i < cards.length; i += 4) {
        groupedCards.push(cards.slice(i, i + 4));
    }

    return (
        <section id="vacation">
            <div className="container col-xxl-8 my-5">
                <div className="row">
                    <h3 className="deals-title carousel-title">Exclusive <span className="orange-color">deals & discounts</span></h3>
                    <p className="deals-subtitle text-muted subtitle">Discover our fantastic early booking discounts<br />& start planning your journey.</p>
                </div>
                <div className="container d-flex justify-content-center">
                    <div id="discounts-carousel" className="carousel carousel-dark slide d-none d-lg-block" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {groupedCards.map((group, index) => (
                                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <div className="card-wrapper container-sm d-flex justify-content-around">
                                        {group.map(card => (
                                            <div key={card.id} className="card discounts-carousel-card card-exclusive m-3">
                                                <img src={require(`../images/img/${card.image}`)} className="card-img-top img-deals rounded carousel-img" alt={card.title} />
                                                <div className="card-deals-body mb-1">
                                                    <div className="row my-2 pe-1">
                                                        <div className="col-md-6">
                                                            <h5 className="card-title card-deals-title">{card.title}</h5>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="svg-left-arrow bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                                </svg>
                            </button>
                            <button className="btn slider-btn ms-3 my-3 p-0 border-0" type="button" data-bs-target="#discounts-carousel" data-bs-slide="next">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="svg-right-arrow bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
