import './App.css';
import UserForm from './components/UserForm';
import axios from "axios";
import {useState} from 'react';

// https://api.github.com/users/john

function App() {

  const[reps, setRepos]=useState(0)

  const getUser = (e) =>{
    e.preventDefault();
    const user=e.target.elements.username.value;
    const url='https://api.github.com/users/'+user;
    axios.get(url)
    .then((res)=>{
        const repos=res.data.public_repos
        setRepos(repos)
    })
  }
  return (
    <div >
        <h2>start my course</h2>
      <UserForm getUser={getUser}></UserForm>
      {reps ? <p>Number of repos: {reps}</p> :
      <p>please enter user name</p>}
    </div>
  );
}

export default App;
