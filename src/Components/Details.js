import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
//useParams is used 

function TransactionDetails (){
    const URL = process.env.REACT_APP_API_URL;
    const [transactionsArr, setTransactionsArr] = useState({});
    const { index } = useParams();
    const navigate = useNavigate();

useEffect(() => {
//make a get request to http://localhost:3001/bookmarks/:index
axios.get(`${URL}/transactions/${index}`) // missing /
.then((response) => setTransactionsArr(response.data));
}, []); 

const handleDelete = () => {
axios.delete(`${URL}/transactions/${index}`)
.then(() => navigate('/'));
}

return (
    <article className="details">
      <h3>Transaction Details</h3>
      <p>${transactionsArr.amount}</p>
      <h3>Transaction Date</h3> 
      <p>{transactionsArr.date}</p>
      <h3>Category</h3>
      <p>{transactionsArr.source}</p>
      <br />
      <div className="btn-group" role="group" aria-label="Basic example">
        <Link to={'/'}>
          <button type="button" className="back-btn">Back</button>
        </Link> {/*redirect user to home pg */}
        <Link to={`/transactions/${index}/edit`}>
          <button type="button" className="edit-btn">Edit</button>
        </Link>
        <Link to={`/transaction/${index}/edit`}>
          <button onClick={handleDelete} type="button" className="delete-btn">Delete</button>
        </Link>
      </div>
    </article>
  );
}

//change: line 32 class to className
//changed: line 36 error, missing / and missing s
//changing classnames for css purposes
//changed category to source

export default TransactionDetails;