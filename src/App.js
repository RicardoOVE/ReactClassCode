// npm install react-router-dom@5.3.0
// npm install axios

import React from "react";
import FirstComponent from "./components/FirstComponent/FirstComponent";
import FirstComponentFunctional from "./components/FirstComponentFunctional/FirstComponentFunctional";
import PersonCard from "./components/PersonCard/PersonCard";
import PersonCardFunctional from "./components/PersonCardFunctional/PersonCardFunctional";
import Form from "./components/Form/Form";
import ComponenteApi from "./components/ComponenteApi/ComponenteApi";
import ComponenteAxios from "./components/ComponenteAxios/ComponenteAxios";

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      personas : [
        {
          firstName : 'Ricardo',
          lastName : 'Ortiz',
          age : 27,
          city : 'Medellín'
        },
        {
          firstName : 'Juan',
          lastName : 'Perez',
          age : 50,
          city : 'Bogotá'
        },
        {
          firstName : 'Gloria',
          lastName : 'Hernandez',
          age : 32,
          city : 'Lima'
        }
      ]
    }
    }

  render() {
    
    return(

      <div className="container">

        <h1> React Web Page </h1>

        <BrowserRouter>

          <Link to='/' className="btn btn-success">Home</Link>
          <Link to='/funcional' className="btn btn-info">Componente funcional</Link>
          <Link to='/formulario' className="btn btn-primary">Formulario</Link>
          <Link to='/api' className="btn btn-warning">Componente Api</Link>
          <Link to='/apiaxios' className="btn btn-danger">Componente Axios</Link>


          <Switch>
            <Route path='/' exact render={()=> <FirstComponent />} />
            <Route path='/funcional' render={()=> <FirstComponentFunctional/>} />
            <Route path='/formulario'  render={()=> <Form/>} />
            <Route path='/api'  render={()=> <ComponenteApi />} />
            <Route path='/apiaxios'  render={()=> <ComponenteAxios/>} />
          </Switch>
        
        </BrowserRouter>

        {/*
        <PersonCard firstName='Ricardo' lastName='Ortiz' age={27} city='Medellín'/>
        <br></br>
        <PersonCard firstName='Juan' lastName='Velez' age={35} city='Delft'/>
        <br></br>
        <PersonCardFunctional firstName='Ricardo' lastName='Ortiz' age={30} city='Medellin'></PersonCardFunctional>
        */}
        

        {
          //this.state.personas.map(persona => 
          //  <PersonCardFunctional firstName = {persona.firstName} lastName = {persona.lastName} age = {persona.age} city = {persona.city} />)
            
        }

      </div>
    );
  }
}

export default App;