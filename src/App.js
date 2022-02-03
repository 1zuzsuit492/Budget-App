import NavBar from './Components/NavBar';
import {Route, Routes } from "react-router";
import New from './Components/New';
import Index from './Components/Index';
import Edit from './Components/Edit';
import Details from './Components/Details';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <main>
        <Routes>
          <Route exact path="/" element={<Index />}/>
          <Route path="/new" element={<New />}/>
          <Route path='/details/:index' element={<Details />}/>
          <Route path='/transactions/:index/edit' element={<Edit />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
