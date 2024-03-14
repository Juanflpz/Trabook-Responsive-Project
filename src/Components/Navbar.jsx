import React from 'react'
import '../styles/Navbar.css'

export default function Navbar(props) {
    return (
        <div>
            <nav className="m-0 p-0">
                <ul className="d-flex flex-row list-unstyled m-1 p-2 align-items-center justify-content-center">
                    <li className="logo-nav">
                        <img className="" src={require(`../images/icons/${props.image}`)} alt="Logo-icon"/>
                    </li>
                    <li>
                        <a className="fs-5 nav-link font-weight-bold text-dark" href="#">{props.li1}</a>
                    </li>
                    <li>
                        <a className="fs-5 nav-link font-weight-bold text-dark" href="#">{props.li2}</a>
                    </li>
                    <li>
                        <a className="fs-5 nav-link font-weight-bold text-dark" href="#">{props.li3}</a>
                    </li>
                    <li>
                        <a className="fs-5 nav-link font-weight-bold text-dark" href="#">{props.li4}</a>
                    </li>
                    <li>
                        <a className="fs-5 nav-link font-weight-bold text-dark" href="#">{props.li5}</a>
                    </li>
                    <li className="sign-up">
                        <div className="btn-group mt-4" role="group">
                            <a href="#" id="btn-login" className="btn btn-lg mr-2 mb-4">{props.a1}</a>
                            <a href="#" id="btn-signup" className="btn btn-lg rounded-3 ms-2 mb-4">{props.a2}</a>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
