import {Link} from 'react-router-dom';
//display transaction on homepage 
function Transaction({transaction, index}) { //props from fetch
    return (
        <tr>
            <td>
                {transaction.date}
            </td>
            <p>
                <Link to={`/details/${index}`}>{transaction.name}</Link>
            </p>
            <td>
                {transaction.amount}
            </td>

            <td>
            <Link to={`/transaction/${index}/edit`}>
                <button type='button' className='button'>Edit</button>
            </Link>
            </td>
        </tr>
    )
}
//tr = table row

//map through the fetched data thats getting stored in state
//transaction = each index of the array [transaction]
//name of transaction will route you to another component that shows transaction details [line10]

//this component tells homepage what to display

export default Transaction;