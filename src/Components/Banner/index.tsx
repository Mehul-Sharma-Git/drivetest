import React,{useState,useEffect} from 'react'
import axios from 'axios'
import config from '../../config';
import './Banner.css'
function Banner(banner:any ) {
    let profile=banner.banner
console.log(banner)
    return (
        <header className="banner "
            style={ {
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://static.vecteezy.com/system/resources/previews/002/071/742/non_2x/template-corporate-banner-concept-red-black-grey-and-white-contrast-background-free-vector.jpg"
                )`,
                backgroundPosition:"center center"
                
        }}>
            <div className="banner_contents">
                <h1 className="banner_title">
                    {profile?.name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">
                        Play
                    </button>
                    <button className="banner_button">
                        My List           
                    </button>
                    <h1 className="banner_description">
                        {profile?.id}
                    </h1>
                </div>
                
            </div>
             <div className="banner_fade_bottom"/>
        </header>
    )
}

export default Banner
