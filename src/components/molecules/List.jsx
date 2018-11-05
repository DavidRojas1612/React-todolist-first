import React from "react";
import Input from "../atoms/Inputs.jsx";
const List = ({ items, handleDele }) => (
  <ul className="list">
    {items &&
      items.map((item, i) => (
        <li key={i}>
          <div id={i} className="item-container">
            <Input id={i} type="checkbox" />
            <label htmlFor={i}> {item.name} </label>
            <img
              src="https://uploads.codesandbox.io/uploads/user/6344998e-d2db-41d5-b0f7-f4e369545a69/ns5a-garbage.png"
              onClick={handleDele}
            />
          </div>
        </li>
      ))}
  </ul>
);

export default List;
