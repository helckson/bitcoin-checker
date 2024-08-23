import React from 'react';
import PriceByDate from './PriceByDate';
import PriceComparison from './PriceComparison';
import { useBitcoinPrice } from '../hooks/useBitcoinPrice';

const BitcoinPriceChecker = () => {
  const { price, priceChange, error, fetchPriceByDate, fetchPriceChange } = useBitcoinPrice();

  return (
    <div className="container">
      <PriceByDate 
        fetchPriceByDate={fetchPriceByDate} 
        price={price} 
        error={error} 
      />
      <PriceComparison 
        fetchPriceChange={fetchPriceChange} 
        priceChange={priceChange} 
        error={error} 
      />
    </div>
  );
};

export default BitcoinPriceChecker;
