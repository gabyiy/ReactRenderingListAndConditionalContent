import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropDownHandler = (event) => {
    props.onChangeFilter(event.target.value);
    //ai
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={dropDownHandler} value={props.selected}>
          {/** aici acesam cu cu onChange tot ce aven in  options si dupa executam fuctia dropDownHandler
           *care cu ajutoru la props transimte ce am acesat la expenses.js
           
           * cu ajutorul la props aducem din exppense ce avemsalat in selected ca parametru,mai exact variabila salvata prin usse estate de default adica 2020
           *
           */}
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
