import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewTransaction (){
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate(); //If you need to navigate programmatically (like after a form submits), this hook gives you an API to do so

  const [transactionsArr, setTransaction] = useState({
    item_name:"",
    date:"",
    from:"",
    amount:"",
    source:"",
  }); //using states to save inputted info

  const handleTextChange = (event) => {
    setTransaction({...transactionsArr, [event.target.id]: event.target.value})
  } //spread op allows you to not lose any info stored in state
    //event.target.value = user inputt

  const handleSubmit = (event) => {
    event.preventDefault(); //prevent autoreload
    axios.post(`${URL}/transactions`, transactionsArr)
    .then(() => navigate('/'))
  }//button posts to transactions then redirects user to homepage

  const addTransaction = (newTransaction) => {
    axios.post(`${URL}/transactions`, newTransaction)
    .then(() => navigate("/transactions"));
  };

return (
<form  onSubmit={handleSubmit} className="newItem">
  <div>
  <h2>Add a new item</h2>
  </div>

  <div className="date">
  <label htmlFor="date">Date</label>
  <input id="date" value={transactionsArr.date} name="date" 
  type="text" placeholder="date" onChange={handleTextChange}/>
  </div>

  <br />
  <div className="name">
  <label htmlFor="name">Name</label>
  <input id="name" value={transactionsArr.name} name="name" 
  type="text" placeholder="name" onChange={handleTextChange}/>
  </div>

  <br />
  <div className="amount">
  <label htmlFor="amount">Amount</label>
  <input 
  id="amount" value={transactionsArr.amount} name="amount" 
  type="number" placeholder="amount" onChange={handleTextChange}/>
  </div>

  <br />
  <div className="from">
  <label htmlFor="from">From</label>
  <br />
  <input id="from" name="from" value={transactionsArr.from}
  type="text" placeholder="from" onChange={handleTextChange}/>
  </div>

  <br />
  
  <button type="submit">CREATE NEW ITEM</button>

</form>
)
  }


export default NewTransaction;
//error: function name must start with capital letter