import React from "react";
import "./ServiceSection.scss";
import documentsIcon from "../../assets/documents icon.svg";
import starIcon from "../../assets/star.svg";
import timeIcon from "../../assets/time.svg";

const ServiceSection = (): JSX.Element => {
  return (
    <div className="Services">
      <div className="Services__Headers">
        <h1>Why use our services?</h1>
        <h3>
          We operates 24 hour/7 day-a-week telephone, email & remote support
          services that is staffed to handle any issue or question
        </h3>
      </div>

      <div className="Services__Section">
        <div className="Services__Section__Card">
          <div className="Services__Section__Card__Icon">
            <img src={documentsIcon} alt="Documents Icon" />
          </div>
          <div className="Services__Section__Card__Text">
            <h4>Easy Process</h4>
            <h5>
              We help you save time and effort. We master how to sell a car
              privately and have simplified the process of selling a vehicle to
              make it hassle-free.
            </h5>
          </div>
        </div>

        <div className="Services__Section__Card">
          <div className="Services__Section__Card__Icon">
            <img src={starIcon} alt="Star Icon" />
          </div>
          <div className="Services__Section__Card__Text">
            <h4>Get The Best Return</h4>
            <h5>
              Get the most money for your car. Reach serious buyers. Avoid
              lowball offers. Use our valuation tools for a better price when
              selling your car.
            </h5>
          </div>
        </div>

        <div className="Services__Section__Card">
          <div className="Services__Section__Card__Icon">
            <img src={timeIcon} alt="Time Icon" />
          </div>
          <div className="Services__Section__Card__Text">
            <h4>Dedicated Team</h4>
            <h5>
              Our seller experts are here to help you at every step of the way
              via email, phone, or chat all the week days! They help you find
              real buyers for your car and finalize your deal fast.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
