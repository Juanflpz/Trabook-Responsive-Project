import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css'

export default function Navbar(props) {
    return (
        <div>
            <nav className="m-0 p-0">
                <ul className="d-flex flex-row list-unstyled align-items-center justify-content-center">
                    <li className="logo-nav">
                        <img className="" src={require(`../images/icons/${props.image}`)} alt="Logo-icon"/>
                    </li>
                    <li>
                        <a className="mx-3 fs-5 nav-link font-weight-bold text-dark" href="#">{props.li1}</a>
                    </li>
                    <li>
                        <a className="mx-3 fs-5 nav-link font-weight-bold text-dark" href="#">{props.li2}</a>
                    </li>
                    <li>
                        <a className="mx-3 fs-5 nav-link font-weight-bold text-dark" href="#">{props.li3}</a>
                    </li>
                    <li>
                        <a className="mx-3 fs-5 nav-link font-weight-bold text-dark" href="#">{props.li4}</a>
                    </li>
                    <li>
                        <a className="mx-3 fs-5 nav-link font-weight-bold text-dark" href="#">{props.li5}</a>
                    </li>
                    <li className="sign-up">
                        <div className="btn-group mt-4 mb-4" role="group">
                            <a href="#" id="btn-login" className="btn btn-lg rounded-3">{props.a1}</a>
                            <a href="#" id="btn-signup" className="btn btn-lg rounded-3 ms-1">{props.a2}</a>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}