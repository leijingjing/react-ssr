import React, { useState } from 'react';

function App(props) {
    const [ count, setCount ] = useState(1);
    return (
    <div>
        <hl>hello，{props.title}！</hl>
        <p>{count}</p>
        <button onClick={()=> {
            setCount(count + 1)
        }}>+++</button>
    </div>
    )
}

export default <App title="开课吧"></App>;