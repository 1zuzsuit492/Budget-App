import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewTransaction (){
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate(); //If you need to navigate programmatically (like after a form submits), this hook gives you an API to do so

  const [transactionsArr, setTransactionsArr] = useState({
    name:"",
    date:"",
    from:"",
    amount:"",
    category:""
  }); //using states to save inputted info

  const handleTextChange = (event) => {
    setTransactionsArr({...transactionsArr, [event.target.id]: event.target.value})
  } //spread op allows you to not lose any info stored in state
    //event.target.value = user input


  const handleSubmit = (event) => {
    event.preventDefault(); //prevent autoreload
    axios.post(`${URL}/transactions`, transactionsArr)
    .then(() => navigate('/'))
  }//button posts to transactions then redirects user to homepage

  return (
    <form  onSubmit={handleSubmit} className="newItem">
        <div>
            <h2>Add a New Transaction</h2>
        </div>

        <div className="date">
        <label htmlFor="date">Date</label>
        <br />
        <input id="date" value={transactionsArr.date} name="date" 
        type="text" placeholder="date" onChange={handleTextChange}/>
        </div>

        <br />
        <div className="name">
        <label htmlFor="name">Name</label>
        <br />
        <input id="name" value={transactionsArr.name} name="name" type="text" 
        placeholder="name" onChange={handleTextChange}/>
        </div>

        <br />
        <div className="amount">
        <label htmlFor="amount">Amount</label>
        <br />
        <input id="amount" value={transactionsArr.amount} name="amount" type="number" placeholder="amount" onChange={handleTextChange}/>
        </div>

        <br />
        <div className="from">
        <label htmlFor="from">From</label>
        <br />
        <input id="from" name="from"value={transactionsArr.from} type="text" 
        placeholder="from" onChange={handleTextChange}/>
        </div>

        <br /> 
        <button type="submit">Submit Transaction</button>
    
    </form>
)
}


export default NewTransaction;
//error: function name must start with capital letter