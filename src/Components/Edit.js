import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function TransactionEdit() {
    const URL = process.env.REACT_APP_API_URL;
    const { index } = useParams();
    const navigate = useNavigate();
    const [transactionsArr, setTransactionsArr] = useState({
        name: "",
        date: "",
        from: "",
        amount: "",
        category: "",
    });

    const handleTextChange = (event) => {
    setTransactionsArr({ ...transactionsArr, [event.target.id]: event.target.value });
    };

useEffect(() => {
    axios.get(`${URL}/transactions/${index}`)
    .then((response) => {
    console.log(response.data)
    setActivity(response.data);
    })
}, [index]);

const handleSubmit = (event) => {
event.preventDefault();
axios.put(`${process.env.REACT_APP_API_URL}/transactions/${index}`, transactionsArr)
.then(() => {
navigate("/");
}).catch((err) => {
console.log(err);
})
};

return (
    <form  onSubmit={handleSubmit} className="editItem">

        <div className="date">
        <label htmlFor="date">Date</label>
        <br />
        <input id="date" value={transactionsArr.date} 
        name="date" type="text" placeholder="date" onChange={handleTextChange}/>
        </div>

        <div className="name">
        <label htmlFor="name">Name</label>
        <input id="name" value={transactionsArr.name} 
        name="name" type="text" placeholder="name" onChange={handleTextChange}/>
        </div>

        <br />
        <div className="amount">
        <label htmlFor="amount">Amount</label>
        <br />
        <input id="amount" value={transactionsArr.amount} 
        name="amount" type="number" placeholder="amount" onChange={handleTextChange}/>
        </div>

        <div className="from">
        <label htmlFor="from">From</label>
        <input id="from" name="from" value={transactionsArr.from} type="text" 
        placeholder="from" onChange={handleTextChange}/>
        </div>

        <br />
        
        <input type="submit" value="EDIT" /> 
    
    </form>
)



}


export default TransactionEdit;