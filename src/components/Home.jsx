// rfc
import React from 'react'
import Products from './Products'

export default function Home() {
    return (
        <><div className="hero">
            <div className="card bg-light text-white border-0">
                <img src="/assets/img-hero.jpg" className="card-img" alt="image hero section" height="550px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">MANY BEAUTIFUL CLOTHES</h5>
                        <p className="card-text lead fs-2">CHECK OUT ON THE TRENDS</p>
                    </div>
                </div>
            </div>
        </div><Products /></>
    )
}
