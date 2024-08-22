exports.formatDateForCoinGecko = (date) => {
    return date.split('-').reverse().join('-');
};