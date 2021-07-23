import React from "react";

export default function UpgradeClicks(props) {
  return (
    <div className="Card" onClick={props.upgradeFunc}>
      <span className="CardTitle">Upgrade Clicks</span>
      <span>Price: {props.itemData.clickUpgrade.price}</span>
    </div>
  );
}
