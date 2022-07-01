export const formatAmountToString = (amount: number) => {
  const balanceInWhole = amount.toString().split('.')[0];
  const pattern = /\B(?=(\d{3})+(?!\d))/g;
  return `$${balanceInWhole.replace(pattern, ',')}`;
};
