const defaultState = {
  customers: [],
};

const ADD_CUSTOMER = "ADD_CUSTOMER";
const DELETE_CUSTOMER = "DELETE_CUSTOMER";
const ADD_CUSTOMERS = "ADD_CUSTOMERS";

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CUSTOMERS:
      return { ...state, customers: [...state.customers, ...action.payload] };
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] };
    case DELETE_CUSTOMER:
      return { ...state, customers: state.customers.filter((item) => item.id !== action.payload) };

    default:
      return state;
  }
};

export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload });
export const addCustomersAction = (payload) => ({ type: ADD_CUSTOMERS, payload });
export const deleteCustomerAction = (payload) => ({ type: DELETE_CUSTOMER, payload });
