import React from 'react'
import '../styles/Needs.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Needs(props) {
    return (
        <section class="mt-0" id="things-u-need">
            <div class="container">
                <div class="row">
                    <div class="col text-center">
                        <h1 class="lh-1">Things you need<span class="orange-color"> to do</span></h1>
                        <p class="subtitle text-muted pt-3">We ensure that you´ll embark on a perfectly planned,<br/> safe vacation at a price you can afford.</p>
                    </div>
                    <div class="col-img col-md-2 d-flex justify-content-start">
                        <img src={require(`../images/icons/${props.image1}`)} alt="icon" class="image-left"/>
                    </div>
                </div>
            </div>
            <ul class="cards-list list-unstyled d-flex justify-content-center">
                <li class="card card-1">
                    <img src={require(`../images/icons/${props.image2}`)} class="card-icon-top mt-4 ms-4" alt="Sign-up-icon"/>
                    <div class="card-body">
                        <h4 class="card-title font-weight-bold mt-4 ms-2">Sign up</h4>
                        <p class="card-text text-muted ms-2 mt-1">Completes all the work associated<br/> with planning and processing</p>
                    </div>
                </li>
                <li class="card card-2">
                    <img src={require(`../images/icons/${props.image3}`)} class="card-icon-top mt-4 ms-4" alt="Worth-of-money-icon"/>
                    <div class="card-body">
                        <h4 class="card-title font-weight-bold mt-4 ms-2">Worth of money</h4>
                        <p class="card-text text-muted ms-2 mt-1">After successful access then book<br/>from exclusive deals & pricing</p>
                    </div>
                </li>
                <li class="card card-3">
                    <img src={require(`../images/icons/${props.image4}`)} class="card-icon-top mt-4 ms-4" alt="Exciting-travel-icon"/>
                    <div class="card-body">
                        <h4 class="card-title font-weight-bold mt-4 ms-2">Exciting travel</h4>
                        <p class="card-text text-muted ms-2 mt-1">Start and explore a wide range of<br/>exciting travel experience</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}
