import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    //parametru acestei functi enteredExpenseData este obiectu din expenseForm cre il trecem ca parametru la onSaveExpenseData
    //in expenseForm apoi il estructuram si il adaugam la obiectu nostru
    const expenseData = {
      ...enteredExpenseData,
      id: 3,
    };
    props.onAddExpense(expenseData);
  };
  //tot lafele trecem cu ajutoru la props si la functia din app js obiectul expenseData in app.js
  return (
    <div className="new-expense">
      {/**aici ii trecem ca salvam in onSaveExpenseData functia saveExpenseDataHandler astfel cand folosim onSaveExpenseData
       * in Expenseform putem sa ii trecem ca parametru obiectul de acolo
       */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
  );
};
export default NewExpense;
