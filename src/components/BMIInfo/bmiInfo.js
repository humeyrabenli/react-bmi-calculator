import React from "react";
import { Link } from "react-router-dom";
import "./styles.less";

const BmiInfo = () => {
  return (
    <>
      <div className="container">
        <div className="card firstCard mb-1">
          <div className="card-body">
            <h5 className="card-title">What is Body Mass Index?</h5>
            <p className="card-text">
            The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy.
            The BMI calculation divides an adult's weight in kilograms by their height in metres squared. For example, A BMI of 25 means 25kg/m2.
            </p>
            <a
              href="https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html"
              className="card-link"
            >
              For more information
            </a>
          </div>
        </div>
        
        <div className="card secondCard mt-1">
          <div className="card-body">
            <h5 className="card-title">How is BMI calculated?</h5>
            <p className="card-text">
              Formula: weight (kg) / [height (m)]2. With the metric system, the
              formula for BMI is weight in kilograms divided by height in meters
              squared. Because height is commonly measured in centimeters,
              divide height in centimeters by 100 to obtain height in meters.
              Example: Weight = 68 kg, Height = 165 cm (1.65 m) Calculation: 68
              ÷ (1.65)2 = 24.98
            </p>
            <a
              href="https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html"
              className="card-link"
            >
              For more information
            </a>
          </div>
        </div>
        <div style={{float:'right',marginTop:3}}>
          <Link to="/" className="btnHome btn btn-secondary rounded-pill">
            Home Page
          </Link>
        </div>
      </div>
    </>
  );
};

export default BmiInfo;
