import React from "react";

class PersonCard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            estadoCivil: 'Soltero',
            age: this.props.age
        }
    }

    cambiarEstadoCivil = () => {
        if (this.state.estadoCivil === "Soltero"){
            this.setState({estadoCivil: 'Casado'})
        } else {
            this.setState({estadoCivil: 'Soltero'})
        }
    }

    cumpleaños = () => {
        this.setState({age: this.state.age+1})
    }

    hizoClick = () => alert('Hiciste click (en función!)')

    hizoClickEn = (e, firstName) => alert('Hiciste click en: ' +firstName)

    render(){

        const {firstName, lastName, age, city} = this.props;

        return(
            <div className="card bg-warning text-dark d-flex flex-row align-items-center">
                <h4>{firstName} {lastName}</h4>
                <p className="p-2"><b>Edad:</b> {this.state.age}</p>
                <p className="p-2"><b>Ciudad:</b> {city}</p>
                <p><b>Estado Civil: </b> {this.state.estadoCivil}</p>
                <button className="btn btn-dark w-25 m-4" onClick={this.cambiarEstadoCivil} >Cambiar estado</button>
                <br></br>
                <button className="btn btn-dark w-25 m-4" onClick={this.cumpleaños}> Aumentar edad de {firstName}</button>
                <button className="btn btn-dark w-25 m-4" onClick={(e) => this.hizoClickEn(e, firstName)}>Haz click aquí (función (e))</button>
            </div>

            //<button className="btn btn-dark w-25 m-4" onClick={this.hizoClick}>Haz click aquí (función)</button>
            //<br></br>


            //<div className="card bg-warning text-dark">
            //    <h4>{this.props.firstName} {this.props.lastName}</h4>
            //    <p><b>Edad:</b> {this.props.age}</p>
            //    <p><b>Ciudad:</b> {this.props.city}</p>
            //</div>
        );
    }
};

export default PersonCard;