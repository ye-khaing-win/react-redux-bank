export interface ICustomerState {
  fullName: string;
  nationalId: string;
  createdAt: string;
}

interface ICustomer {
  fullName: string;
  nationalId: string;
  createdAt: string;
}

enum CustomerActionType {
  CREATE = "customer/createCustomer",
  UPDATE_NAME = "customer/updateName",
}

export interface ICreateCustomerAction {
  type: CustomerActionType.CREATE;
  payload: ICustomer;
}

interface IUpdateCustomerNameAction {
  type: CustomerActionType.UPDATE_NAME;
  payload: string;
}

type TCustomerAction =
  | ICreateCustomerAction
  | IUpdateCustomerNameAction;

const initialStateCustomer: ICustomerState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

export const customerReducer = (
  state = initialStateCustomer,
  action: TCustomerAction
): ICustomerState => {
  switch (action.type) {
    case CustomerActionType.CREATE:
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };

    case CustomerActionType.UPDATE_NAME:
      return {
        ...state,
        fullName: action.payload,
      };

    default:
      return state;
  }
};

export const createCustomer = (
  fullName: string,
  nationalId: string
): ICreateCustomerAction => {
  return {
    type: CustomerActionType.CREATE,
    payload: {
      fullName,
      nationalId,
      createdAt: new Date().toISOString(),
    },
  };
};

export const updateCustomerName = (
  fullName: string
): IUpdateCustomerNameAction => {
  return {
    type: CustomerActionType.UPDATE_NAME,
    payload: fullName,
  };
};
