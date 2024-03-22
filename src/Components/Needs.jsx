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
        </section >
    )
}
