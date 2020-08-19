import React, { useState } from 'react'
// import logo from './logo.svg';
import './App.css';
import Form from './Form'

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

function App() {

  const [team, setTeam] = useState([])

  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }
  
  const submitForm = () => {
    const teamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    team.push(teamMember)
    setTeam(team)
    console.log(team)
  }

  return (
    <div className="App">
      <header className="App-header"><h1>Team App</h1></header>
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
    </div>
  );
}

export default App;
