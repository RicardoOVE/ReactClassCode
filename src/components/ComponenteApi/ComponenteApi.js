import React, {useState, useEffect} from 'react';

const ComponenteApi = () => {

    const [imagen, setImagen] = useState('');
    const [clicks, setClicks] = useState(0);

    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(responseJson =>{
            let img = responseJson.message;
            setImagen(img);
        })
    }, [clicks])

    const hizoClick = () =>{
        setClicks(clicks+1)
    }

    return (
        <div>
            <img src={imagen} className='img-fluid' alt='doggo'/>
            <h2>Haz pedido un nuevo perrito {clicks} veces!</h2>
            <button className='btn btn-primary' onClick={hizoClick}> Nuevo perrito</button>
        </div>
    )
}

export default ComponenteApi;