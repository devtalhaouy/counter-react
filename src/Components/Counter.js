import React,{useState} from 'react'

const Counter = () => {
    const [value,setValue] = useState(0)
    return (
        <div>
            <h1 className="value">{value}</h1>
            <div className="buttons">
                <button onClick={()=>setValue(value-1)}>Decrease</button>
                <button  onClick={()=>setValue(0)}>Reset</button>
                <button  onClick={()=>setValue(value+1)}>Increase</button>

            </div>
        </div>
    )
}

export default Counter
