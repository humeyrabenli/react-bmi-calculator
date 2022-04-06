import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './styles.less'

const BmiCalculate = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  localStorage.setItem("weight", 0);
  localStorage.setItem("height", 0);

  useEffect(() => {
    localStorage.setItem("weight", weight);
    localStorage.setItem("height", height);
  }, [weight, height]);
  
  return(
    <>
    <div className="container">
        <div className="d-flex justify-content-center">
            <form>
                <div className="mb-4 d-flex justify-content-center">
                    <h3 className="title">Body Mass Index Calculator</h3>
                </div>
                <div className="mb-3">
                    <input type="number" onChange={(e) => setHeight(e.target.value)} className="form-control rounded-pill" id="height" placeholder="Height (cm)" />
                </div>
                <div className="mb-5">
                    <input type="number" onChange={(e) => setWeight(e.target.value)} className="form-control rounded-pill" id="weight" placeholder="Weight (kg)" />
                </div>
                <div className="d-grid gap-2">
                    <Link to="/bmiresult" className="btn btn-success rounded-pill">Calculate</Link>
                    <Link to="/bmiinfo" className="btn btn-warning rounded-pill">What is BMI?</Link>
                </div>
            </form>
        </div>
        
    </div>
</>
  )
};

export default BmiCalculate;
