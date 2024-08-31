import { useState } from "react";
import './Lumpsum.css'; 

const Lumpsum = () => {
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [rate, setRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [result, setResult] = useState(null);

  const calculateFutureValue = () => {
    const investment = parseFloat(investmentAmount);
    const annualRate = parseFloat(rate) / 100;
    const numberOfYears = parseInt(tenure, 10);

    if (isNaN(investment) || isNaN(annualRate) || isNaN(numberOfYears) || investment <= 0 || annualRate < 0 || numberOfYears <= 0) {
      alert('Please enter valid numbers greater than zero');
      return;
    }
    if(numberOfYears>=50)
    {
        alert("Year should be less then 50");
        return;
    }

    const futureValue = investment * Math.pow(1 + annualRate, numberOfYears);
    const totalDeposit = investment;
    const earnings = futureValue - totalDeposit;

    setResult({
      futureValue: Math.round(futureValue),
      totalDeposit: Math.round(totalDeposit),
      earnings: Math.round(earnings),
    });
  };

  return (
    <div className='calculator'>
      <h2>Lump Sum Calculator</h2>
      <div className="inputfield">
        <label>Investment Amount:<span className="required">*</span></label>
        <input
          type="number"
          value={investmentAmount}
          onChange={(e) => setInvestmentAmount(e.target.value)}
          placeholder="e.g., 1000"
        />
      </div>
      <div className="inputfield">
        <label>Expected Rate of Return (P.A):<span className="required">*</span></label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          placeholder="e.g., 12"
        />
      </div>
      <div className="inputfield">
        <label>Tenure (in years) upto 50 Years:<span className="required">*</span></label>
        <input
          type="number"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
          placeholder="e.g., 10"
        />
      </div>
      <button onClick={calculateFutureValue}>Calculate</button>
      {result && (
        <div className='results-section'>
          <div className='results'>
            <h3>Results:</h3>
            <p><strong>Future Value (Corpus):</strong> {result.futureValue}</p>
            <p><strong>Total Deposit:</strong> {result.totalDeposit}</p>
            <p><strong>Total Earnings:</strong> {result.earnings}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Lumpsum;
