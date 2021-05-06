import React from "react";
import "./TopContent.scss";
import whiteArrow from "../../assets/White Arrow.svg";
import hammerIcon from "../../assets/icon.svg";

const TopContent = (): JSX.Element => {
  return (
    <div className="Container">
      <div className="Container__Jumbotron">
        <div className="Container__Jumbotron__Titles">
          <h1 className="Container__Jumbotron__Titles__Headers">
            Selling your car now
          </h1>
          <h3 className="Container__Jumbotron__Titles__Headers">
            Is easier than ever
          </h3>
        </div>
        <button className="Container__Jumbotron__Button red-button">
          <span> Start Today </span>
          <img src={whiteArrow} alt="expand arrow" />
        </button>
      </div>

      <div className="Container__Sections">
        <div className="Container__Sections__Left">
          <div className="Container__Sections__Left__Headers">
            <h3>How it works?</h3>
            <h5>Sell Your Car in Three Simple Steps</h5>
          </div>

          <div className="Container__Sections__Left__Steps">
            <div className="Container__Sections__Left__Steps__Step">
              <div className="Container__Sections__Left__Steps__Step__Number">
               <span>1</span> 
              </div>
              <div className="Container__Sections__Left__Steps__Step__Titles">
                <h4>Submit Your Car</h4>
                <h5>
                  Enter your car details for inspection on Emirates Auction.
                </h5>
              </div>
            </div>
            <div className="Container__Sections__Left__Steps__Step">
              <div className="Container__Sections__Left__Steps__Step__Number">
                <span>2</span>
              </div>
              <div className="Container__Sections__Left__Steps__Step__Titles">
                <h4>Receive Valuation and Offer</h4>
                <h5>
                  We will check your car and provide you with approved purchase
                  price.
                </h5>
              </div>
            </div>
            <div className="Container__Sections__Left__Steps__Step">
              <div className="Container__Sections__Left__Steps__Step__Number">
              <span>3</span>
              </div>
              <div className="Container__Sections__Left__Steps__Step__Titles">
                <h4>Get Your Payment</h4>
                <h5>
                  After a price is agreed for your car, we will exchange cash on
                  a day that suits you.
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="Container__Sections__Right">
          <img src={hammerIcon} alt="Bidding" />
          <h2>Your car will be sold by bidding</h2>
          <h4>
            You set the starting price it will be sold for the highest bidder{" "}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default TopContent;
