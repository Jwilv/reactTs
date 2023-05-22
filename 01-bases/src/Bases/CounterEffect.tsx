import {useState} from 'react' 

export const CouterEffect = () => {

    const [counter, setCounter] = useState( 5 )

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
