import React from 'react'
import '../../style.css'
import ProfileDp from '../../images/avatar.jpg'
import { IoIosArrowBack } from 'react-icons/io'

const Header = () => {
return (
    <header >
        <span className='header_alike'></span>

        <div className="header_top">
            <div className="header_top_left">
                <IoIosArrowBack />
                <img src={ProfileDp} alt="Profile" />
                <div className="top-layer_left">
                    <h5>Samuel Green</h5>
                    <small>Available to Walk</small>
                </div>
            </div>
            <div className="header_top-right">
                <span className="toggle"></span>
            </div>
        </div>
    </header>
)
}

export default Header
