export interface IAccountState {
  balance: number;
  loan: number;
  loanPurpose: string;
}

interface ILoan {
  amount: number;
  purpose: string;
}

enum AccountActionType {
  DEPOSIT = "account/deposit",
  WITHDRAW = "account/withdraw",
  REQUEST_LOAN = "account/requestLoan",
  PAY_LOAN = "account/payLoan",
}

interface IDepositAction {
  type: AccountActionType.DEPOSIT;
  payload: number;
}

interface IWithdrawAction {
  type: AccountActionType.WITHDRAW;
  payload: number;
}

interface IRequestLoanAction {
  type: AccountActionType.REQUEST_LOAN;
  payload: ILoan;
}

interface IPayLoanAction {
  type: AccountActionType.PAY_LOAN;
}

type TAccountAction =
  | IDepositAction
  | IWithdrawAction
  | IRequestLoanAction
  | IPayLoanAction;

const initialStateAccount: IAccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export const accountReducer = (
  state = initialStateAccount,
  action: TAccountAction
): IAccountState => {
  switch (action.type) {
    case AccountActionType.DEPOSIT:
      return {
        ...state,
        balance: state.balance + action.payload,
      };

    case AccountActionType.WITHDRAW:
      return {
        ...state,
        balance: state.balance - action.payload,
      };

    case AccountActionType.REQUEST_LOAN:
      if (state.loan > 0) return state;
      return {
        ...state,
        balance: state.balance + action.payload.amount,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
      };

    case AccountActionType.PAY_LOAN:
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        loanPurpose: "",
      };

    default:
      return state;
  }
};

export const deposit = (amount: number): IDepositAction => {
  return {
    type: AccountActionType.DEPOSIT,
    payload: amount,
  };
};

export const withdraw = (
  amount: number
): IWithdrawAction => {
  return {
    type: AccountActionType.WITHDRAW,
    payload: amount,
  };
};

export const requestLoan = (
  amount: number,
  purpose: string
): IRequestLoanAction => {
  return {
    type: AccountActionType.REQUEST_LOAN,
    payload: {
      amount,
      purpose,
    },
  };
};

export const payLoan = (): IPayLoanAction => {
  return {
    type: AccountActionType.PAY_LOAN,
  };
};
