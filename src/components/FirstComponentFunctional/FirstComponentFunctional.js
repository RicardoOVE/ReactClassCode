import { useParams } from "react-router-dom";

const FirstComponentFunctional = props => {

    const {texto} = useParams();

    return (
        <div>
            {/* <h2>Primer componente funcional {props.match.params.texto}</h2> */}
            <h2>Primer componente funcional </h2>
            <p>{texto}</p>
        </div>
    )

}

export default FirstComponentFunctional