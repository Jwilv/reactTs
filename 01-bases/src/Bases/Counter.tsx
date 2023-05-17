import {useState} from 'react' 

export const Counter = ({ initialValue = 0 }) => {

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
