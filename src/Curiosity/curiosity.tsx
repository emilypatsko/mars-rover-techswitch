import React from 'react';
import { useState, useEffect } from "react";
import './curiosity.scss';
import { MobileNavbar } from "../MobileNavbar/MobileNavbar";

function Curiosity() {
    const [curiosityPhotoData, setCuriosityPhotoData] = useState(null);
    useEffect(() => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=0&api_key=${process.env.REACT_APP_NASA_API_KEY}`)
            .then(response => response.json())
            .then(data => setCuriosityPhotoData(data))
    }, []);

    if (!curiosityPhotoData) {
        return (
            <div>
                <MobileNavbar />
                Waiting for data!
            </div>
        )
    }
    return (
        <div>
            <MobileNavbar />
            <div>Rover : {curiosityPhotoData.photos[0].rover.name} </div>
            <div>Camera : {curiosityPhotoData.photos[0].camera.full_name} </div>
            <div>
                <img className="img-curiosity-main" src={curiosityPhotoData.photos[0].img_src} />
            </div>
            <div>Earth date : {curiosityPhotoData.photos[0].earth_date} </div>
            <div>Sol : {curiosityPhotoData.photos[0].sol} </div>
        </div>
    )
}

export { Curiosity }