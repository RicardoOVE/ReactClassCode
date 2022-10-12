import React from "react";
import FirstComponent from "./components/FirstComponent/FirstComponent";
import FirstComponentFunctional from "./components/FirstComponentFunctional/FirstComponentFunctional";
import PersonCard from "./components/PersonCard/PersonCard";
import PersonCardFunctional from "./components/PersonCardFunctional/PersonCardFunctional";
import Form from "./components/Form/Form";

class App extends React.Component {

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

      </div>
    );
  }
}

export default App;

