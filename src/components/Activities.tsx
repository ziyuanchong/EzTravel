import React, { useState } from "react";
import "./Activities.css";
function Activities() {
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const listData = [
    { id: "1", value: "Shopping" },
    { id: "2", value: "Sight-seeing" },
    { id: "3", value: "Adventure (Hiking, Wildlife, Outdoor activities)" },
    { id: "4", value: "Education (Museums, Cultural learning)" },
  ];

  const handleSelect = (event: { target: { value: any; checked: any } }) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      //Add checked item into checkList
      setCheckedList([...checkedList, value]);
    } else {
      //Remove unchecked item from checkList
      const filteredList = checkedList.filter((item) => item !== value);
      setCheckedList(filteredList);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <p className="title">Select Your Interest/Interests For This Trip</p>
        </div>

        <div className="list-container">
          <label>You Selected:</label>
          {checkedList.map((item, index) => {
            return (
              <div className="chip">
                <p className="chip-label">{item}</p>
              </div>
            );
          })}
        </div>

        <div className="card-body">
          {listData.map((item, index) => {
            return (
              <div key={item.id} className="checkbox-container">
                <input
                  type="checkbox"
                  name="languages"
                  value={item.value}
                  onChange={handleSelect}
                />
                <label>{item.value}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Activities;
