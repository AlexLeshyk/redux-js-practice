import { addCustomersAction } from "../store/customerReducer";

export const fetchCustomers = () => {
  return async (dispatch) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    dispatch(addCustomersAction(data));
  };
};
