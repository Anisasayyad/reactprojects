export function applyDiscount(totalPrice, discountPercent) {
  if (!discountPercent || discountPercent <= 0) 
  return totalPrice;
  return totalPrice - (totalPrice * discountPercent) / 100;
}
export function getCuponDiscount(cupon, totalPrice) {
  let discountPercent = 0;

  switch (cupon.trim().toUpperCase()) {
    case "ANISA10":
      discountPercent = 10;
      break;
    case "ANISA20":
      discountPercent = 20;
      break;
    case "ANISA30":
      discountPercent = 30;
      break;
    default:
      discountPercent = 0;
  }

  const isValid = discountPercent > 0;
  const discountAmount = (totalPrice * discountPercent) / 100;

  return {
    isValid,
    discountPercent,
    discountAmount,
  };
}
