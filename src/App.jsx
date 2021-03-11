import './App.css';
import {User} from './Components';
import {useEffect,useState,useRef} from 'react';
function App() {

  let [state,setState]=useState([]);
  let [currentstate,setCurrent]=useState([]);

  const inputRef=useRef(null);

  useEffect(()=>{
    fetch('https://reqres.in/api/users')
    .then((res)=>res.json())
    .then(res=>{
      setState(state=>([...res.data]));
      setCurrent([...res.data]);
      })
  },[])

  let searchData=()=>{
    let searchstring= inputRef?.current?.value;
    searchstring=searchstring.toLowerCase();
    if(!searchstring)return;
    let filteredData=state.filter(user=>{
      let name=user.first_name + user.last_name;
      return name && name.toLowerCase().includes(searchstring);
    })
    setCurrent(_=>[...filteredData]);
  }

  return (
    <div className="App">
      <div className="header">Users List</div>
      <div className="search-block">
        <input type="text" ref={inputRef} onChange={(e)=>{
          if(!e.target.value) setCurrent([...state]);
        }}/>
        <button className="search" onClick={()=>{searchData()}}>Search</button>
      </div>
      <div className="user-list">
          {
          currentstate.map(data=>(<User key={data.id} {...data}/>))
          }
      </div>
     
    </div>
  );
}

export default App;
