import './Index.css'
import axios from 'axios'; //fetching api
import { useEffect, useState } from 'react';
import Transaction from './Transaction';

const Index = () => {
  const URL = process.env.REACT_APP_API_URL;
  const [transactionsArr, setTransactionsArr] = useState([]);
  

  useEffect(() => {
    //name of array from transactionController in backend, where the data comes from
    axios.get(`${URL}/transactions`).then((response) => {
      console.log(response.data);//see what you're fetching (response goes in transactionArr)
      setTransactionsArr(response.data);//brings in json info and puts it in state
    })
  }, []); //[] prevents infinite loop

let balance = 0;
transactionsArr.forEach(transaction => balance = balance + Number(transaction.amount));

  return (
    <div className='balance'>
      <span> 
        <h1>Bank Account Total: ${balance} </h1>
      </span>
      <table>
        <tbody>
          {transactionsArr.map((element, index) => {
            return < Transaction key={index} element={element} index={index} />
          })}
        </tbody>
      </table>
    </div>
  );
};
//tbody = table body
//total income updates since it's a state in app.js
export default Index;
//home page

//I can see a list of income and expenditures with the date, the transaction name and the amount on the Index page.

//There is also an Account total visible that sums all the different expenditures and shows the user how much money they currently have.