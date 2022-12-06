import React from "react";
import "./style.css";
import Rupee from "../assets/rupee.png";
import forward from "../assets/forward.png";

export default function InviteSection() {
  return (
    <div className="invitesection-main-container d-flex justify-content-center mb-5 align-items-center">
      <img src={Rupee} className="invite-section-rupee-img me-3" />
      <div className="invite-section-text fw-bold me-5">
        Invite friends to Myntra’s BFF & get up to ₹150
        <br /> MynCash for every person who visits
      </div>
      <div className="btn-img-text d-flex align-items-center">
        <button
          type="button"
          className="btn btn-outline-primary text-danger fw-bold d-flex align-items-center"
        >
          Invite now
        </button>
        <img src={forward} className="forward-img" />
      </div>
    </div>
  );
}
