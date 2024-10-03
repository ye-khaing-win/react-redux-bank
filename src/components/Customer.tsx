import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Customer = () => {
  const customerName = useSelector<RootState, string>(
    (store) => store.customer.fullName
  );
  return <div>👋 Welcome, {customerName}</div>;
};

export default Customer;
