import React from 'react';

const Carousel = ({ cards }) => {
    return (
        <div className="carousel">
            {cards.map(card => (
                <div key={card.id} className="card">
                    <h2>{card.title}</h2>
                    <p>{card.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Carousel;