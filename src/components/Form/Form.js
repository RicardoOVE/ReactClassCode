import React, {useState} from 'react';
const Form = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [hizoSubmit, setHizoSubmit] = useState(false);

    const createUser = e => {
        e.preventDefault(); // Prevents the normal behavior of the form's submit
        const newUser = {firstName, lastName, age};
        // const newUser = {firstName: firstName, lastName: lastName, age: age};
        console.log('New record', newUser);

        setFirstName('');
        setLastName('');
        setAge('');
        setHizoSubmit(true);
    }

    const mensaje = () =>{
        if(!hizoSubmit){
            return 'Por favor ingrese todos tus datos';
        } else {
            return 'Gracias por registrarse!'
        }
    }

    return (
        <form onSubmit={createUser}>
            <div className="form-group">
                <label>Name: </label>
                <input className="form-control"  onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
            </div>
            <div className="form-group">
                <label>Last Name: </label>
                <input className="form-control" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
            </div>
            <div className="form-group">
                <label>Age: </label>
                <input className="form-control" onChange={(e) => setAge(e.target.value)} value={age}/>
            </div>
            <input type='submit' className="btn btn-dark w-25" value='create user' />

            {mensaje()}

        </form>
    )
}

export default Form;