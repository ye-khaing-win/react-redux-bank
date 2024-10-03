import { useSelector } from "react-redux";
import AccountOperations from "./components/AccountOperations";
import BalanceDisplay from "./components/BalanceDisplay";
import CreateCustomer from "./components/CreateCustomer";
import Customer from "./components/Customer";
import "./store/store";
import { RootState } from "./store/store";

function App() {
  const fullName = useSelector<RootState, string>(
    (store) => store.customer.fullName
  );

  return (
    <div className="m-10">
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
