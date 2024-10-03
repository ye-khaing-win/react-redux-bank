import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  createCustomer,
  ICreateCustomerAction,
} from "../store/customerSlice";
import { Dispatch } from "redux";

const CreateCustomer = () => {
  const [fullName, setFullName] = useState<string>("");
  const [nationalId, setNationalId] = useState<string>("");

  const dispatch =
    useDispatch<Dispatch<ICreateCustomerAction>>();

  const handleClick = () => {
    dispatch(createCustomer(fullName, nationalId));
  };

  return (
    <div>
      <h2>Create new customer</h2>
      <div className="bg-[#f7f7f7] p-8 flex flex-col gap-5 items-start">
        <div>
          <label>Customer full name</label>
          <input
            className="my-0 mx-2 py-1 px-2"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div>
          <label>National ID</label>
          <input
            className="my-0 mx-2 py-1 px-2"
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>

        <button
          className="uppercase font-bold py-1.5 px-2 cursor-pointer "
          onClick={handleClick}
        >
          Create new customer
        </button>
      </div>
    </div>
  );
};

export default CreateCustomer;
