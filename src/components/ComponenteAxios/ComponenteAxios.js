import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ComponenteAxios = () => {
    
    const [image, setImagen] = useState('');
    const [clicks, setClicks] = useState(0);
    
    useEffect(()=>{

        axios.get('https://dog.ceo/api/breeds/image/random')
            .then(response => response.data)
            .then(data => {
                let img = data.message;
                setImagen(img);
            })

            /* 

            POST:
            axios.post(URL, {OBJETO})
                .then( res => ACCIONES)

            PUT:
            axuis.put(URL, {OBJETOs})
                .then(res => ACCIONES)

            DELETE:
            axios.delete(URL)
                .then(res => ACCIONES)

            */

    }, [clicks])

    const hizoClick = () =>{
        setClicks(clicks+1)
    }

    return (
        <div>
            <img src={image} className='img-fluid' alt='doggo' />
            <button className='btn btn-warning' onClick={hizoClick}> New Doggo</button>
        </div>
    )

}

export default ComponenteAxios;