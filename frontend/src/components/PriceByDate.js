import React, { useState } from 'react';

const PriceByDate = ({ fetchPriceByDate, price, error }) => {
  const [date, setDate] = useState('');

  const handleFetchPrice = () => {
    fetchPriceByDate(date);
  };

  return (
    <div className="box">
      <h2>Buscar Preço por Data</h2>
      <input 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
      />
      <button onClick={handleFetchPrice}>Buscar Preço</button>
      {price && <p>O preço do Bitcoin em {date} foi ${price}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default PriceByDate;
