// Currency conversion utility
const EXCHANGE_RATE = 0.012; // Approximate INR to USD rate (as of 2024)

export const convertToUSD = (inrAmount) => {
  if (typeof inrAmount !== 'number') {
    return '$0.00';
  }
  
  const usdAmount = inrAmount * EXCHANGE_RATE;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(usdAmount);
};

export const convertToINR = (usdAmount) => {
  if (typeof usdAmount !== 'number') {
    return '₹0.00';
  }
  
  const inrAmount = usdAmount / EXCHANGE_RATE;
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(inrAmount);
};
