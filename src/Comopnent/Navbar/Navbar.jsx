import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav  className="navbar navbar-expand-lg fixed-top py-4">
                <div  className="container">
                    <Link className="navbar-brand text-white fw-bolder fs-2" to="/">START FRAMEWORK</Link>
                    <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler">
                            <span  className="navbar-toggler-icon"></span>
                    </button>
                    <div  id="navbarSupportedContent" className="collapse navbar-collapse">
                        <ul  className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li  className="nav-item me-3">
                                <Link className="nav-link text-white  fw-bold mt-3 mt-md-0 px-2 active rounded-3" to="about">ABOUT</Link>
                            </li>
                            <li  className="nav-item me-3">
                                <Link className="nav-link text-white  fw-bold mt-3 mt-md-0 px-2" to="portfolio">PORTFOLIO</Link>
                            </li>
                            <li  className="nav-item me-3">
                                <Link className="nav-link text-white  fw-bold mt-3 mt-md-0 px-2" to="contact">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
