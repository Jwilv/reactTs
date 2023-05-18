import {useState} from 'react' 


// el ? es por que no es si o si necesario
interface CouterProps {
    initialValue?: number
}

export const Counter = ({ initialValue = 0 } : CouterProps) => {

    const [counter, setCounter] = useState( initialValue )

    const handleSuma = ()=>{
        setCounter( pre => pre + 1  )
    }

    return (
        <>
        <p>{counter}</p>
        <button onClick={handleSuma}>+1</button>
        </>
    )
}
