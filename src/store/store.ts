import { combineReducers, createStore } from "redux";
import { customerReducer } from "./customerSlice";
import { accountReducer } from "./accountSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
