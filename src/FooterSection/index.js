import React from "react";
import "./style.css";
import google from "../assets/FooterSection/google_play.png";
import apple from "../assets/FooterSection/apple_store.png";
import facebook from "../assets/FooterSection/fb.png";
import twitter from "../assets/FooterSection/twitter.png";
import instagram from "../assets/FooterSection/insta.png";
import youtube from "../assets/FooterSection/yt.png";
import original from "../assets/FooterSection/original.png";
import thirtyDay from "../assets/FooterSection/30days.png";

export default function FooterSection() {
  return (
    <div className="footer-section-parent-container  d-flex">
      
      <div className="ms-3 d-flex">
      <div className="footer-online-shopping-parent-container me-4">
        <div className="online-shopping-text fw-bold  mb-3 mt-5">
          ONLINE SHOPPING
        </div>
        <div className="online-shopping-child-text text-muted mb-3 fw-lighter1">
          <div className="mb-1">Men</div>
          <div className="mb-1">Women</div>
          <div className="mb-1">Kids</div>
          <div className="mb-1">Home & Living</div>
          <div className="mb-1">Beauty</div>
          <div className="mb-1">Gift Cards</div>
          <div className="mb-1">Myntra Inside</div>
        </div>
        <div className="online-shopping-text fw-bold  mb-3 ">USEFUL LINKS</div>
        <div className="online-shopping-child-text text-muted mb-3 fw-lighter1">
          <div className="mb-1">Blog</div>
          <div className="mb-1">Careers</div>
          <div className="mb-1">Site Map</div>
          <div className="mb-1">Corporate Information</div>
          <div className="mb-1">Whitehat</div>
        </div>
      </div>
      <div className="footer-online-customer-policies-container me-5">
        <div className="online-shopping-text fw-bold  mb-3 mt-5">
          CUSTOMER POLICIES
        </div>
        <div className="online-shopping-child-text text-muted mb-3 fw-lighter1">
          <div className="mb-1">Contact Us</div>
          <div className="mb-1">FAQ</div>
          <div className="mb-1">T&C</div>
          <div className="mb-1">Terms Of Use</div>
          <div className="mb-1">Track Orders</div>
          <div className="mb-1">Shipping</div>
          <div className="mb-1">Cancellation</div>
          <div className="mb-1">Returns</div>
          <div className="mb-1">Privacy policy</div>
          <div className="mb-1">Grievance Officer</div>
        </div>
      </div>
      </div>
      <div className="exclusive-myntra-parent-container me-5">
        <div className="online-shopping-text fw-bold  mb-3 mt-5">
          EXPERIENCE MYNTRA APP ON MOBILE
        </div>
        <div className="d-flex mb-4">
          <div className="me-2">
            <img src={google} alt="" className="google-img" />
          </div>
          <div>
            <img src={apple} alt="" className="apple-img" />
          </div>
        </div>
        <div>
          <div className=" online-shopping-text fw-bold mb-3">
            KEEP IN TOUCH
          </div>
          <div className="footer-contact-img d-flex">
            <img src={facebook} className="me-3" />
            <img src={twitter} className="me-3" />
            <img src={youtube} className="me-3" />
            <img src={instagram} className="me-3" />
          </div>
        </div>
      </div>
      <div className="footer-original-day-section">
        <div className="d-flex mt-5 ms-5 align-items-center">
          <img src={original} className="original-days-img mt-1 me-2" />
          <div>
            <b>100% ORIGINAL</b> guarantee <br />
            for all products at myntra.com
          </div>
        </div>
        <div className="d-flex mt-5 ms-5 ">
          <img src={thirtyDay} className="days-img me-2" />
          <div>
            <b>Return within 30days</b> <br /> of receiving your order
          </div>
        </div>
      </div>
    </div>
  );
}
