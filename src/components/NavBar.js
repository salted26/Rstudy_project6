import React from 'react';
import {faSearch, faUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css";

const NavBar = () => {

    const menuList = [ '여성', 'Division', '남성', '신생아&유아아동', 'H&M', 'HomeSale', '지속가능성' ];

    return (
        <div className='nav-bar'>
            <div className="login-btn">
                <FontAwesomeIcon icon={faUser} />&nbsp;로그인
            </div>
            <div className="logo-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAaKiaRYNTRewPvMiE3pTI6o9LoTX1gpOtw&s" alt="Logo" />
            </div>
            <div className="menu-container">
                <div className="menu-list">
                    <ul className="menu-item">
                        {menuList.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className='search-box'>
                    <input type="text"/>&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faSearch} width={20}/>
                </div>
            </div>
        </div>
    );
};

export default NavBar;