import React, {useRef} from 'react';

function IncomeForm({income, setIncome}) {
  const desc = useRef(null);
  const date = useRef(null);
  const cost = useRef(null);

  const AddExpense = (event) => {
      event.preventDefault(); //prevents reload
      console.log(desc.current.value);
      //useRef gets the value of the input form

  let currentDate = date.current.value.split('-');
  let newDate = new Date(newDate[0], newDate[1], newDate[2]);
      console.log(newDate)
      setIncome([...income, {
          'desc': desc.current.value,
          'cost': cost.current.value,
        //   'date': date
      }])
    desc.current.value = '';
    cost.current.value = null;
    date.current.value = null;
}

return (
      <form className="income-form" onSubmit={AddExpense}>
<div className="form-inner">    
    <input type='text' name='desc' id='desc' placeholder='Expense...' ref={desc} />
    <input type='number' name='cost' id='cost' placeholder='Cost...' ref={cost} />
    <input type='date' name='date' id='date' placeholder='Income date...' ref={date} />
    <input type='submit' value='New Transaction' />
</div>
      </form>
    )
}

export default IncomeForm;