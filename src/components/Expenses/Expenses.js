import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
function Expenses(props) {
  //aici istantiem ExpenseItem si in acelasi timp ii trecem ca parametri ce obtinem de la props din app.js(adica obiectu exenses)

  //si aici folosim componewnta card

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

    console.log(filteredYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        />

        {props.expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}

        {/*cu ajutor la map care ia o functie ca argument si functia respectiva se executa pentru fiecare elment din array si ia fiecare element ca parametru (aici specificam ca dorim pentru fiecare elemnt expense sa ne apara un ExpenseItem.js ,iar dupa specificam ce dorim sa ne apara in componentul ExpenseItem (acesta  genereaza un numar ExpenseItem component de  forma  automota depinzand de numarul de obiecte create in arayul la care avem acces*/}
      </Card>
    </div>
  );
}

export default Expenses;
