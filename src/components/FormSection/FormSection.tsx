import React, { useState } from "react";
import "./FormSection.scss";
import shapeIcon from "../../assets/Shape.svg";

const FormSection = (): JSX.Element => {
  const carsMakes = [
    "Renault",
    "Ford",
    "BMW",
    "Nissan",
    "Peugeot",
    "Ferrari",
    "Audi",
    "Mercedes",
  ];
  const carsModels = ["Captur", "Focus", "Sunny", "A-Class", "A3", "Accent"];
  const [make, updateMake] = useState("");
  const [model, updateModel] = useState("");
  const [name, updateName] = useState("");
  const [phone, updatePhone] = useState("");
  const [invalidForm, setInvalidForm] = useState(false);
  const [errors, setErrors] = useState({
    make: false,
    model: false,
    name: false,
    phone: false,
  });

  const handleUpdateMake = (value: any): void => {
    updateMake(value);
      setErrors((prevState) => ({
        ...prevState,
        make: !!!value,
      }));
  };

  const handleUpdateModel = (value: any): void => {
    updateModel(value);
      setErrors((prevState) => ({
        ...prevState,
        model: !!!value,
      }));
  };
  const handleUpdateName = (value: any): void => {
    updateName(value);
      setErrors((prevState) => ({
        ...prevState,
        name: !!!value,
      }));
  };
  const handleUpdatePhone = (value: any): void => {
    updatePhone(value);
      setErrors((prevState) => ({
        ...prevState,
        phone: !!!value,
      }));
  };

  const handleCheckValidations = (): void => {
    const missingFields: boolean[] = [];
     Object.entries(errors).forEach(([key, value]) =>{
      missingFields.push(value);
    });
    const emptyValues = !!!make || !!!model || !!!name || !!!phone; 
    setInvalidForm(missingFields.some(val => val) || emptyValues);
  }

  return (
    <div className="FormSection">
      <div className="FormSection__Titles">
        <h2>Start today!</h2>
        <h5>You are just one click away from selling your car.</h5>
      </div>
      <div className="FormSection__Content">
        <div className="FormSection__Content__LeftSection">
          <iframe
            width="80%"
            height="330"
            src="https://www.youtube.com/embed/jSdGxf8n_VA"
            title="YouTube video player"
          />
          <div className="FormSection__Content__LeftSection__Headers">
            <h2>Why you should sell your car with us?</h2>
            <h5>We support you from start to finish</h5>
            <p>
              We have streamlined the process to sell your car online for quick
              payment to get your free cash offer.
            </p>
            <p className="semi-bold">Ready to sell your car?</p>
          </div>
        </div>
        <div className="FormSection__Content__RightSection">
          {
            invalidForm ? (
              <div className="error-msg align-left">*All fields are required to be filled</div>
            ) : null
          }
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div>
              <legend>Enter your car details</legend>
              <label htmlFor="car-make">
                Car Make
                <select
                  id={"car-make"}
                  value={make}
                  onChange={(e) => handleUpdateMake(e.target.value)}
                  onBlur={(e) => handleUpdateMake(e.target.value)}
                  className={errors.make || (invalidForm && !make) ? "hasError" : ""}
                >
                  <option />
                  {carsMakes.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                {errors.make ? (
                  <div className="error-msg align-right">Please select a car make</div>
                ) : null}
              </label>
              <label htmlFor="car-model">
                Car Model
                <select
                  id={"car-model"}
                  value={model}
                  onChange={(e) => handleUpdateModel(e.target.value)}
                  onBlur={(e) => handleUpdateModel(e.target.value)}
                  className={errors.model || (invalidForm && !model) ? "hasError" : ""}
                  placeholder="Select Brand"
                >
                  <option />
                  {carsModels.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                {errors.model ? (
                  <div className="error-msg align-right">Please select a car model</div>
                ) : null}
              </label>
            </div>
            <div>
              <legend>Enter your Contact Info</legend>
              <label>Your Full Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => handleUpdateName(e.target.value)}
                onBlur={(e) => handleUpdateName(e.target.value)}
                className={errors.name || (invalidForm && !name) ? "hasError" : ""}
              />
              {errors.name ? (
                <div className="error-msg align-right">Please enter your full name</div>
              ) : null}

              <label>Your Phone Number</label>
              <input
                type="text"
                placeholder="Enter Your Phone Number"
                value={phone}
                onChange={(e) => handleUpdatePhone(e.target.value)}
                onBlur={(e) => handleUpdatePhone(e.target.value)}
                className={errors.phone || (invalidForm && !phone) ? "hasError" : ""}
              />
              {errors.phone ? (
                <div className="error-msg align-right">
                  Please enter your phone number
                </div>
              ) : null}
            </div>
            <button className="red-button" type="submit" onClick={handleCheckValidations}>
              Send Your Inquiry <img src={shapeIcon} alt="Arrow Icon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
