
import { useState } from "react"
 
export default function Button() {
    // const handleClick = () => {
    //     alert("ta click !")
    // }
 
    const [nbClick, setNbClick] = useState(0)
    const handleClick = () => {
        setNbClick(nbClick + 1)
    }
    return (
        <>
            <p>Clicked : {nbClick}</p>
            <button onClick={handleClick}>
            Click me
            </button>
            <button onClick={() => setNbClick(0)}>
            Reset
            </button>
        </>
    )
}