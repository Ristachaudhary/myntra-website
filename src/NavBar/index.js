import React, { useEffect } from "react";
import "./style.css";
import MyntraLogo from "../assets/MyntraLogo.svg";
import searchIcon from "../assets/searchIcon.svg";
import profile from "./profileIcon.png";
import shopping from "./shopping.png";
import wishlist from "./wishlist.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  function openmenu() {
    var sidemenu = document.getElementById("side-menu");
    console.log(sidemenu);
    sidemenu.style.left = "0";
  }
  function closemenu(){
    var sidemenu = document.getElementById("side-menu");
    sidemenu.style.left="-100%";
   }
  return (
    <div>
      <nav className="navbar  navbar-expand-lg bg-white shadow-sm ">
        <div className="navbar-parent-container container-fluid ms-5 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
          <div className="fa-solid fa-bars" onClick={openmenu} >
                <FontAwesomeIcon icon={faBars} />
              </div>
            <div className="navbar-myntra-logo-img-container me-51">
              <img src={MyntraLogo} className="navbar-myntra-logo-img" />
            </div>
            <div className="navbar-menu-items-and-search-main-container d-flex  ">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" id="side-menu">
              <div className="fa-solid-xmark fa-xmark" onClick={closemenu} >
                <FontAwesomeIcon icon={faXmark} />
              </div>
                <li className="nav-item ">
                  <a className="nav-link active" aria-current="page" href="#">
                    MEN
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    WOMEN
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active">KIDS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active">HOME & LIVING</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active">BEAUTY</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active">STUDIO</a>
                </li>
              </ul>
             
            </div>
            {/* ...........bar........... */}
           
              {/* ..........................xxxxxxxx.......... */}
            <div className=" nav-search bg-light rounded  ">
              <img
                src={searchIcon}
                className="nav-bar-search-icon bg-light m-2 "
              />
              <input
                className="navbar-search-box rounded1 border-0  me-2 bg-light"
                type="search"
                placeholder="Search for products, brands and more"
                aria-label="Search"
              />
            </div>
          </div>
          <div className="navbar-cart-section me-5 fw-bold">
            <div className="navbar-profile-wishlist-bag-parent-div d-flex ">
              <div className="navbar-logo-and-profile-parent-div d-flex flex-column me-4">
                <div className="navbar-profile-logo d-flex align-items-center justify-content-center">
                  <img src={profile} className="profile-img" />
                </div>
                <div className="nav-top-right-content">Profile</div>
              </div>
              <div className="navbar-logo-and-profile-parent-div d-flex flex-column me-3">
                <div className="navbar-wishlist-logo  d-flex align-items-center justify-content-center">
                  <img src={wishlist} className="profile-img" />
                </div>
                <div className="nav-top-right-content">Wishlist</div>
              </div>
              <div className="navbar-logo-and-profile-parent-div d-flex flex-column align-items-center justify-content-center ">
                <div className="navbar-bag-logo d-flex align-items-center justify-content-center">
                  <img src={shopping} className="profile-img" />
                </div>
                <div className="nav-top-right-content">Bag</div>
              </div>
            </div>
          </div>
        </div>
        {/* <i class="fa-solid fa-bars" onclick="openmenu()"></i> */}
      </nav>
    </div>
  );
}
