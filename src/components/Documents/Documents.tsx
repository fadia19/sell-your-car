import React from "react";
import "./Documents.scss";

const Documents = (): JSX.Element => {
  return (
    <div className="Documents">
      <div className="Documents__Titles">
        <h2>Get prepared before our call</h2>
        <h5>Required Documents & Procedures </h5>
      </div>

      <div className="Documents__Required">
        <ul>
          <li>The car must be brought in good working condition</li>
          <li>
            In case the chassis is not OK, we'll do a registration test (AED 170
            is the cost).
          </li>
          <li>
            The commission is 5% for GCC cars and 7% for imported cars (minimum
            commission 1000 AED).
          </li>
          <li>
            If the item is sold, the check will be deposit in your bank account
            after 10 working days from the time of auction’s conclusion
          </li>
        </ul>
        <ul>
          <li>
            If the car is sold for less than AED 5,000, the company commission
            is only AED 500.
          </li>
          <li>
            For the classic cars, trucks and heavy equipment, you must bring
            export test only and the commission is 7% (minimum commission 1000
            AED).
          </li>
          <li>
            For the equipment (generator, scissor lift, electric forklift .....
            etc) Tax invoice is required.
          </li>
          <li>We'll do a comprehensive test (AED 300 is the cost).</li>
        </ul>
      </div>
    </div>
  );
};

export default Documents;
