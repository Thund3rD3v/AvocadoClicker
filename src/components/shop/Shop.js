import React from "react";
import UpgradeClicks from "./items/UpgradeClicks";

export default function Shop(props) {
  return (
    <div>
      <h1 style={{ fontSize: "24px" }}>Shop</h1>

      <UpgradeClicks itemData={props.itemData} upgradeFunc={props.funcs[0]} />
    </div>
  );
}
