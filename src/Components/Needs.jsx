import React from 'react';
import '../styles/Needs.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Needs({ cards }) {
    const groupedCards = [];
    for (let i = 0; i < cards.length; i += 3) {
        groupedCards.push(cards.slice(i, i + 3));
    }
    return (
        <section className="mt-0" id="things-u-need">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1 className="lh-1">Things you need<span className="orange-color"> to do</span></h1>
                        <p className="subtitle text-muted pt-3">We ensure that you´ll embark on a perfectly planned,<br /> safe vacation at a price you can afford.</p>
                    </div>
                    <div className="col-img col-md-2 d-flex justify-content-start">
                        <img src={require(`../images/icons/Things-icon.png`)} alt="icon" className="image-left" />
                    </div>
                </div>
            </div>
            <div className="container cards">
                <div id="discounts-carousel" className="carousel carousel-dark slide d-none d-lg-block" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {groupedCards.map((group, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <div className="card-wrapper container-sm d-flex">
                                    {group.map(card => (
                                        <div key={card.id} className="card discounts-carousel-card card-exclusive m-3">
                                            <img src={require(`../images/icons/${card.image}`)} className="card-icon-top mt-4 ms-4" alt="Sign-up-icon" style={{ maxWidth: '100%', height: 'auto' }} />
                                            <div className="card-body mb-1">
                                                <h4 className="card-title font-weight-bold mt-4 ms-2">{card.title}</h4>
                                                <p className="card-text-discounts text-muted ms-2 mt-1" dangerouslySetInnerHTML={{ __html: card.description }}></p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

/*
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
                                            */
