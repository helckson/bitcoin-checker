import React, { useState } from 'react';

const PriceComparison = ({ fetchPriceChange, priceChange, error }) => {
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');

  const handleFetchPriceChange = () => {
    fetchPriceChange(date1, date2);
  };

  return (
    <div className="box">
      <h2>Comparar Preços</h2>
      <input 
        type="date" 
        value={date1} 
        onChange={(e) => setDate1(e.target.value)} 
        placeholder="Data 1"
      />
      <input 
        type="date" 
        value={date2} 
        onChange={(e) => setDate2(e.target.value)} 
        placeholder="Data 2"
      />
      <button onClick={handleFetchPriceChange}>Calcular Valorização/Desvalorização</button>
      {priceChange && <p>{priceChange}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default PriceComparison;
