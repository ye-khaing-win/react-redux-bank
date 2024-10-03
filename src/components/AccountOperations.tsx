import { useState } from "react";

const AccountOperations = () => {
  const [depositAmount, setDepositAmount] = useState<
    string | number
  >("");
  const [withdrawalAmount, setWithdrawalAmount] = useState<
    string | number
  >("");
  const [loanAmount, setLoanAmount] = useState<
    string | number
  >("");
  const [loanPurpose, setLoanPurpose] =
    useState<string>("");
  const [currency, setCurrency] = useState<string>("USD");

  const handleDeposit = () => {};

  const handleWithdraw = () => {};

  const handleRequestLoan = () => {};

  const handlePayLoan = () => {};

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="bg-[#f7f7f7] p-8 flex flex-col gap-5 items-start">
        <div>
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) =>
              setDepositAmount(+e.target.value)
            }
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>

          <button onClick={handleDeposit}>
            Deposit {depositAmount}
          </button>
        </div>

        <div>
          <label>Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) =>
              setWithdrawalAmount(+e.target.value)
            }
          />
          <button onClick={handleWithdraw}>
            Withdraw {withdrawalAmount}
          </button>
        </div>

        <div>
          <label>Request loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            placeholder="Loan amount"
          />
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
          />
          <button onClick={handleRequestLoan}>
            Request loan
          </button>
        </div>

        <div>
          <span>Pay back $X</span>
          <button onClick={handlePayLoan}>Pay loan</button>
        </div>
      </div>
    </div>
  );
};

export default AccountOperations;
