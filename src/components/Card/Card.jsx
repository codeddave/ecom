import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      <div className="logo-container">
        <img
          src="https://res.cloudinary.com/eyowoemail/image/upload/v1615636809/samples/Keytrust_logo_usqd9g.svg"
          alt=""
        />
      </div>
      <div className="info-container">
        <h3>JAYEOLA MAKINDE</h3>
        <p>Founder/CEO</p>
        <div>
          <img
            src="https://res.cloudinary.com/eyowoemail/image/upload/v1615636398/Location_wpvnh9.svg"
            alt=""
          />
          <p>5 Glover road, Ikoyi, Lagos.</p>
        </div>
        <div className="info-details">
          <div>
            <img
              src="https://res.cloudinary.com/eyowoemail/image/upload/v1615636397/Calling_uutvlb.svg"
              alt=""
            />{" "}
            <p>+2348088779600</p>
          </div>
          <div className="info-details">
            <img
              src="https://res.cloudinary.com/eyowoemail/image/upload/v1615636398/Message_io0scz.svg"
              alt=""
            />{" "}
            <p>jmakinde@keytrustcapital.com</p>
          </div>
          <div className="info-details">
            <img
              src="https://res.cloudinary.com/eyowoemail/image/upload/v1615636397/Discovery_wsewf7.svg"
              alt=""
            />{" "}
            <p>www.keytrustcapital.com</p>
            <a href="https://www.facebook.com/JayeMakinde">
              <img
                src="https://res.cloudinary.com/eyowoemail/image/upload/v1615636408/main_ge4jby.svg"
                alt=""
              />
            </a>
            <a href="https://twitter.com/JayeMakinde">
              <img
                src="https://res.cloudinary.com/eyowoemail/image/upload/v1615636433/main_w2uc5j.svg"
                alt=""
              />
            </a>
            <a href="https://www.linkedin.com/in/makinde-jayeola/">
              <img
                src="https://res.cloudinary.com/eyowoemail/image/upload/v1615636388/Group_4081_xgjgiv.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
