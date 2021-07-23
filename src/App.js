import { useState } from "react";
import Avocado from "./components/Avocado";
import Shop from "./components/shop/Shop";
import "./index.css";

function App() {
  let [itemData, setItemData] = useState({
    clickUpgrade: {
      price: 25,
      amount: 1,
    },
  });

  let [cashState, setCashState] = useState(0);
  let [clickValue, setClickValue] = useState(1);

  function addCash() {
    setCashState((prevValue) => {
      return prevValue + clickValue;
    });
  }

  function upgradeClicks() {
    if (itemData.clickUpgrade.price <= cashState) {
      console.log("buys");
      setCashState((prevValue) => {
        return prevValue - itemData.clickUpgrade.price;
      });
      setClickValue((prevValue) => {
        return prevValue + itemData.clickUpgrade.amount;
      });
      setItemData((prevValue) => {
        return {
          clickUpgrade: {
            price: Math.round(prevValue.clickUpgrade.price*1.5),
            amount: Math.round(prevValue.clickUpgrade.amount*1.5),
          },
        };
      });
    }
  }

  return (
    <div className="App">
      <div className="Title">
        <h1>Avocado Clicker</h1>
        <h2>Cash: {cashState}</h2>
        <h3>Multiplier: {clickValue}</h3>
      </div>

      <Shop itemData={itemData} funcs={[upgradeClicks]} />
      <Avocado addCashFunc={addCash} />
    </div>
  );
}

export default App;
