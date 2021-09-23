import React from 'react'
import './pageNotFound.css'
import img from './istockphoto-648691906-612x612.jpg'
export default function PageNotFound() {
    return (
        <div>
            <div className="notFound">
                <img src={img} alt="Page Not Found" title="Page Not Found" className="img-fluid" />
            </div>
        </div>
    )
}
