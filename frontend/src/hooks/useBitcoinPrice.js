import { useState } from 'react';

export const useBitcoinPrice = () => {
  const [price, setPrice] = useState(null);
  const [priceChange, setPriceChange] = useState(null);
  const [error, setError] = useState('');

  const fetchPriceByDate = async (date) => {
    try {
      const response = await fetch(`https://bitcoin-backend-dnt3.onrender.com?date=${date}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setPrice(data.price);
      setError('');
    } catch (error) {
      setError('Erro ao buscar o preço do Bitcoin: ' + error.message);
      setPrice(null);
    }
  };
  

  const fetchPriceChange = async (date1, date2) => {
    try {
      const response = await fetch(`https://bitcoin-backend-dnt3.onrender.com?date1=${date1}&date2=${date2}`);
      const data = await response.text();
      setPriceChange(data);
      setError('');
    } catch (error) {
      setError('Erro ao calcular a valorização/desvalorização.');
      setPriceChange(null);
    }
  };

  return { price, priceChange, error, fetchPriceByDate, fetchPriceChange };
};
