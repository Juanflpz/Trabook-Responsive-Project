import React from 'react'
import '../styles/Blog.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Blog({ cards }) {
    const groupedCards = [];
    for (let i = 0; i < cards.length; i += 4) {
        groupedCards.push(cards.slice(i, i + 4));
    }
    return (
        <section className="blog p-5" id="blog-box">
            <div className="container text-center">
                <h1 className="box-title"><b>Get updated with<span className="orange-color"> the latest blog</span></b></h1>
            </div>
            <div className="container blog-cards">
                <div id="discounts-carousel" className="carousel carousel-dark slide d-none d-lg-block" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {groupedCards.map((group, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <div className="card-wrapper container-sm d-flex">
                                    {group.map(card => (
                                        <div key={card.id} className="card discounts-carousel-card card-exclusive">
                                            <img src={require(`../images/img/${card.image}`)} className="img-blog rounded img-fluid" alt="Blog picture" />
                                            <div className="row">
                                                <div className="col-md-12 ms-2 me-4 mt-2 fw-bold">
                                                    <p className="card-text title-blog" dangerouslySetInnerHTML={{ __html: card.title }}></p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 mx-2 mb-2">
                                                    <p className="card-text date-blog text-muted">{card.date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center circles">
                <svg className="" height="14" viewBox="0 0 54 14" fill="none">
                    <circle cx="5" cy="7" r="5" fill="#E5E5E5" />
                    <circle cx="27" cy="7" r="7" fill="#FA7436" />
                    <circle cx="49" cy="7" r="5" fill="#E5E5E5" />
                </svg>
            </div>
        </section>
    )
}