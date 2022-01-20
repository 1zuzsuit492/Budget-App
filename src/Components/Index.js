//home page

//I can see a list of income and expenditures with the date, the transaction name and the amount on the Index page.

//There is also an Account total visible that sums all the different expenditures and shows the user how much money they currently have.

import './Index.css'

export const Index = ({totalIncome}) => { //props
  return (
   <header>
   <h1>Bank Account Total:</h1>
   <div className='total-income'>${totalIncome}
   </div>
   </header>
  );
};
//total income updates since it's a state in app.js
export default Index;