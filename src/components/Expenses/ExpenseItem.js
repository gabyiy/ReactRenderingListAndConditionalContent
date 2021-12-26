import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import { useState } from "react";
//Ca o nota generala in react tot ce introducem in program este citit de react doar o singura data cand initiem aplicatia ca sa schimbima proprietati sau denumiri trebuie sa folosim useState altefl aplicatia noastra ar fi statica

function ExpenseItem(props) {
  //salvam  in instanta  expenseDate (in date ce obtinem prin props de la app.js dar doar ce e relationat cu date de acea avem .date)

  //cu Card utilizam compoentu card care practic adauga  css  la acest component (face ce avem la return in card adica adauga clasa card care are proprietati de css si afecteaza tot ce se afla in instanta card datorita pla props.chiold)

  //cu ajutoru la use state practic chemam tot componentu sa faca un refresh si daca ii schimbam valoare initiala a oricarui element aceasta o sa se updateze
  //aici face o destructurare la usestate unde avem ca parametri valoarea initiala(care se afla la prima pozitie in array adica title caree este valoarea curenta si la a doua pozitie o sa avem o functie care updateaza valolarea de la title)

  const clickHandler = () => {};
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>

        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}> Click</button>
    </Card>
  );
  //si aici  cu parametru props av em acces la ce avem salavat in expensive in app.js
}

export default ExpenseItem;
