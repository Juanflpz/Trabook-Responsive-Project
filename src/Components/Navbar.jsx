import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav class="m-0 p-0" style="height: 13%; background-color: #FDFCFA;">
                <ul class="d-flex flex-row list-unstyled m-1 p-2 align-items-center justify-content-center">
                    <li class="" style="margin-right: 200px;">
                        <img class="" src="icons/Logo-icon.png"/>
                    </li>
                    <li>
                        <a class="fs-5 nav-link font-weight-bold text-dark" href="#">Home</a>
                    </li>
                    <li>
                        <a class="fs-5 nav-link font-weight-bold text-dark" href="#">About</a>
                    </li>
                    <li>
                        <a class="fs-5 nav-link font-weight-bold text-dark" href="#">Destination</a>
                    </li>
                    <li>
                        <a class="fs-5 nav-link font-weight-bold text-dark" href="#">Tour</a>
                    </li>
                    <li>
                        <a class="fs-5 nav-link font-weight-bold text-dark" href="#">Blog</a>
                    </li>
                    <li style="margin-left: 150px;">
                        <div class="btn-group mt-4" role="group">
                            <a href="#" id="btn-login" class="btn btn-lg mr-2 mb-4">Login</a>
                            <a href="#" id="btn-signup" class="btn btn-lg rounded-3 ms-2 mb-4">Sign up</a>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
