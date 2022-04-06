import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import BmiCalculate from './components/BMICalculate/bmiCalculate';
import BmiInfo from './components/BMIInfo/bmiInfo';
import BmiResult from './components/BMIResult/bmiResult';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/bmiresult" element={<BmiResult/>}/>
        <Route path="/bmiinfo" element={<BmiInfo/>}/>
        <Route path="/" element={<BmiCalculate/>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
