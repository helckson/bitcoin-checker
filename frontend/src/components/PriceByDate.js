import React, { useState } from 'react';
import { format } from 'date-fns';

const PriceByDate = ({ fetchPriceByDate, price, error }) => {
  const [date, setDate] = useState('');

  const handleFetchPrice = () => {
    fetchPriceByDate(date);
  };

  const formattedDate = date ? format(new Date(date), 'dd-MM-yyyy') : '';

  const formatPrice = (price) => {
    const parsedPrice = parseFloat(price);
    return parsedPrice.toFixed(2);
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
      {price && <p>O preço do Bitcoin em {formattedDate} foi ${formatPrice(price)}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default PriceByDate;
