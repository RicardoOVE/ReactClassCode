import React from "react";
import FirstComponent from "./components/FirstComponent/FirstComponent";
import FirstComponentFunctional from "./components/FirstComponentFunctional/FirstComponentFunctional";
import PersonCard from "./components/PersonCard/PersonCard";
import PersonCardFunctional from "./components/PersonCardFunctional/PersonCardFunctional";
import Form from "./components/Form/Form";
import ComponenteApi from "./components/ComponenteApi/ComponenteApi";

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

        <FirstComponent />
        <FirstComponentFunctional></FirstComponentFunctional>
        <PersonCard firstName='Ricardo' lastName='Ortiz' age={27} city='Medellín'/>
        <br></br>
        <PersonCard firstName='Juan' lastName='Velez' age={35} city='Delft'/>
        <br></br>
        <PersonCardFunctional firstName='Ricardo' lastName='Ortiz' age={30} city='Medellin'></PersonCardFunctional>
      
        <Form />

        {
          //this.state.personas.map(persona => 
          //  <PersonCardFunctional firstName = {persona.firstName} lastName = {persona.lastName} age = {persona.age} city = {persona.city} />)
            
        }

        <ComponenteApi />

      </div>
    );
  }
}

export default App;