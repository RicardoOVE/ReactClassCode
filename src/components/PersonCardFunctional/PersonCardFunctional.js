import React, {useState, useEffect} from 'react';
const PersonCardFunctional = ({firstName, lastName, age, city}) => {
    
    const [civilState, setCivilState] = useState('Soltero');
    const [ageUpdated, setAge] = useState(age);

    // useEffect se ejecuta al montar y al actualizar algo de nuestro estado
    useEffect(() => {
        console.log('Se montó o hubo algún cambio')
    }, [civilState])


    const changeCivilState = () => {
        if(civilState === 'Soltero'){
            setCivilState('Casado');
        } else {
            setCivilState('Soltero');
        }
    }

    const birthday = () => {
        setAge(ageUpdated+1)
    }

    return (
        <div className="card bg-warning text-dark align-items-center m-2">
            <small>Functional Card</small>
            <h4>{firstName} {lastName}</h4>
            <p>
                <b>Age:</b> {ageUpdated}
            </p>
            <p>
                <b>City:</b> {city}
            </p>
            <p>
                <b>Civil State:</b> {civilState}
            </p>
            <button className="btn btn-dark w-25 m-2" onClick={changeCivilState}>Change Civil State</button>
            <button className="btn btn-dark w-25 m-2" onClick={birthday}>Birthday!</button>
        </div>
    )
}

export default PersonCardFunctional