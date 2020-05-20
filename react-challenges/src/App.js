import React from 'react';
import './App.css';
import Person from './Components/BasicInfo'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      person: [
        {
          name: 'Alonso',
          phone: 7049356665,
          dob: '06-21-1999'
        }
      ]
    }
  } 
  render(){
    return <Person person={this.state.person} />
  }
}

export default App;
