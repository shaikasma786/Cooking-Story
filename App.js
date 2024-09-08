import React,{useState} from 'react'
import Card from './Card';
import "./App.css";

const App = () => {
  const[data,setData]=useState('');
  const[search,setSearch]=useState([]);
  const[item,setItem]=useState('home')
  const navigate=(page)=>{
    setItem(page);
  }
  const handler=e=>{
    setData(e.target.value);
  }
  const submithandler=e=>{
    e.preventDefault();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`).then(response=>response.json()).then(data=>{
      console.log(data);
      setSearch(data.meals);
      navigate('Card');
    }).catch(err=>console.log(err));
  }
  return (
    <center>
      <div className='dv'>
    <form onSubmit={submithandler}>
      {item==='home' && (
        <nav>
        <h4 id="h4">THE COOKING STORY</h4>
      <input type="text" value={data} onChange={handler} id="in" placeholder='search recipe....'/><br/><br/>
      <button id="bt">Submit</button>
      </nav>
      )}
      {item==='Card' && <Card search={search} navigate={navigate}/>}
    </form>
    </div>
    </center>
  )
}
export default App;