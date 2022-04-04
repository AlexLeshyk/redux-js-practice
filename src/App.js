import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchCustomers } from "./asyncAction/addCustomers";
import { addCashAction, getCashAction } from "./store/cashReducer";
import { addCustomerAction, deleteCustomerAction } from "./store/customerReducer";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (value) => {
    dispatch(addCashAction(value));
  };

  const getCash = (value) => {
    dispatch(getCashAction(value));
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (item) => {
    dispatch(deleteCustomerAction(item.id));
  };

  const getCustomers = () => {
    dispatch(fetchCustomers());
  };

  return (
    <div className="App">
      <header>Learn React</header>
      <div style={{ fontSize: "3rem" }}>Balance: {cash}</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={() => addCash(5)}>Put to account</button>
        <button onClick={() => getCash(5)}>Get from account</button>
        <button onClick={() => addCustomer(prompt("Add name of client"))}>Add client</button>
        <button>Delete client</button>
        <button onClick={getCustomers}>Get customers from base</button>
      </div>
      {customers.length ? (
        <div style={{ maxWidth: 400, margin: "0 auto" }}>
          {customers.map((item) => (
            <div
              key={item.id}
              style={{ marginTop: 10, padding: "5px 10px", border: "2px solid teal" }}
              onClick={() => removeCustomer(item)}
            >
              {item.name}
            </div>
          ))}
        </div>
      ) : (
        <div style={{ fontSize: "2rem", marginTop: 20 }}>No customers yet!</div>
      )}
    </div>
  );
}

export default App;
