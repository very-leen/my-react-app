import { number } from 'prop-types';
import React, { useState } from 'react';

//////////////useState() \\\\\\\\\\\\\\\\\\\\\\\\\

// function MyComponent() {
//     const [name, setName] = useState("Guest");
//     const [age, setAge] = useState(0);
//     const [isEmployed, setIsEmployed] = useState(false);
//     const updateName = () => {
//         setName("Spongeboon")
//     }
//     const incrementAge = () => {
//         setAge(age + 2);
//     }
//     const toggleEmployment = () => {
//         setIsEmployed(!isEmployed)
//     }


//     return (
//         <div>
//             <p>Name: {name}</p>
//             <button onClick={updateName}>Set name</button>
//             <p>Age: {age}</p>
//             <button onClick={incrementAge}>Increment Age</button>
//             <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
//             <button onClick={toggleEmployment}>Toggle Employement</button>
//         </div>
//     )
// }

// export default MyComponent;

///////////////// onChange() \\\\\\\\\\\\\\\\\\

function MyComponent() {
    //<input/>
    const [name, setName] = useState();
    function handleNameChange(e) {
        setName(e.target.value)
    }
    const [quantity, setQuantity] = useState()
    function handleQuantityChange(e) {
        setQuantity(e.target.value)
    }
    //<textarea/>
    const [comment, setComment] = useState()
    function handleCommentChange(e) {
        setComment(e.target.value)
    }
    //<select/>
    const [payment, setPayment] = useState()
    function handlePaymentChange(e) {
        setPayment(e.target.value)
    }
    //<radiobutton>
    const [shipping, setShipping] = useState("Delivery")
    function handleShippingChange(e) {
        setShipping(e.target.value)
    }

    return (
        <div>
            <input value={name} onChange={handleNameChange} type="text" />
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number" />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter instructions delivery" />
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="" >Select an option</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Visa">Visa</option>
                <option value="GiftCard">GiftCard</option>
            </select>
            <p> Payment: {payment}</p>

            <label>
                <input type='radio' value="Pickup" onChange={handleShippingChange} checked={shipping === "Pickup"} />
                Pickup
            </label>
            <br />
            <label>
                <input type="radio" value="Delivery" onChange={handleShippingChange} checked={shipping === "Delivery"} />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div >
    )
}

export default MyComponent