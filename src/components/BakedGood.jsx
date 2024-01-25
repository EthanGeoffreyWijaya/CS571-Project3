import { useState } from "react"

export default function BakedGood(props) {
    const [amount, setAmount] = useState(0);
    const [tp, setTp] = useState("disabled");
    let ft = {borderStyle:"solid", borderColor:"white", borderRadius:"25px", backgroundColor:"gray"};
    if (props.featured) ft = {borderStyle:"solid", borderColor:"white", borderRadius:"25px", backgroundColor:"maroon"};

    return <div style={ft}>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <p>${props.price}</p>
        <div>
            <button className={tp} onClick = {() => {
                if (amount > 0) setAmount(amount - 1);
                if (amount <= 1) setTp("disabled");
                else setTp("inline_btn");
                }}>-</button>
            <p className="inline">{amount}</p>
            <button className="inline_btn" onClick = {() => {setAmount(amount + 1);setTp("inline_btn")}}>+</button>
        </div>
    </div>
}