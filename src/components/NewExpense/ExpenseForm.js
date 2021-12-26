import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //aici am creat functia titleCangeHandler care o utiliam pentru a acesa si salva in variabila title cu ajutoru
    //setEnteredTitle in title
  };
  //ACELASI LUCRU AM FACUT SI CU  CELELATE INPUTURI
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    //cu eventu care il primim de forma automata specifacam ca nu dorim sa se reseteze pagina imediat ce
    //apasam pe buton si asa putem sa mentinem datele salvate

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
      //aici salvam in un obiect tot ce avem salvat din inputuri iar pentru a vedea data trebueie sa creem
      //un new date pentru al transforma in date format
    };
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    //aici specificam ca dorim sa aducem valorile din interioru inputurilor mai exact valorile care le avem in value
    //la inputuri asa ne ajuta sa le resetam odata ce sa chemat fuctia asta
    //asa facem 2 way biding

    props.onSaveExpenseData(expenseData);
    //aici trecandui props clasei putem acesa funcia din newExpense cu ajutoru onSaveExpenseData si ii trece ca parametru o
    //obiectu nostru expenseData
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
          {/**cu on change salvam functia  titleChangeHandler care o utilizam mai sus ,
           * aceasta primeste un parametru de tip event care ne ajuta sa acesam ce key am pulsat */}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="text"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
          {/**min si stept sunt html default atribute care controleaza cum se paote folosi elementu */}
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
          {/**asa specifacam ca ce se introduce in input poate fi intre 2019 si 2022 */}
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expenses</button>
        {/**adaugand la butonu asta type sumit specifcam ca dorim  */}
      </div>
    </form>
  );
};

export default ExpenseForm;
