const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

const BalanceDisplay = () => {
  return (
    <div className="absolute top-12 right-12 bg-[#f7f7f7] py-6 px-8 font-bold text-[2rem] min-w-[180px] text-center">
      {formatCurrency(123456)}
    </div>
  );
};

export default BalanceDisplay;
