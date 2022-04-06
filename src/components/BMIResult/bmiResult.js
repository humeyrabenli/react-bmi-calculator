import React from 'react'
import { Link } from "react-router-dom";
import './styles.less'


const BmiResult = () => {
    let height = localStorage.getItem('height')
    height= height/100
    let weight = localStorage.getItem('weight')
    const result = (weight / Math.pow(height, 2)).toFixed(2)
  return (
    <>
        <div className="container">
            <div>
                <div className="mb-4 d-flex justify-content-center">
                    <h1 className="title">Your BMI Score</h1>   
                </div>
                <div className="mb-4 d-flex justify-content-center">
                    {result <= 18.5 && <h2 className="underWeight">Underweight - {result}</h2>}
                    {(result > 18.5 & result <= 24.9) && <h2 className="normal">Normal - {result}</h2>}
                    {(result > 24.9 & result <= 29.9) && <h2 className="overWeight">Overweight - {result}</h2>}
                    {(result > 29.9 & result <= 34.9) && <h2 className="obese">Obese - {result}</h2>}
                    {result >= 35 && <h2 className="extremelyObese">Extremely Obese - {result}</h2>} 
                </div>
                <hr />
                <div>
                    <p className="d-flex justify-content-center underWeight">Underweight is smaller than 18.5</p>
                    <p className="d-flex justify-content-center normal">Normal weight is between 18.5 and 24.9</p>
                    <p className="d-flex justify-content-center overWeight">Overweight is between 24.9 and 29.9</p>
                    <p className="d-flex justify-content-center obese">Obese is between 29.9 and 34.9</p>
                    <p className="d-flex justify-content-center extremelyObese">Extremely obese is greater than 34.9</p>
                </div>
                <div className='d-flex justify-content-center'>
                    <Link to="/" className="btnCalculate btn btn-primary">Calculate Again</Link>
                </div>
            </div>
        </div>
        </>
  )
}

export default BmiResult