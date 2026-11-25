import React, { useState } from 'react';

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    const updateName = () => {
        setName("Spongeboon")
    }
    const incrementAge = () => {
        setAge(age + 2);
    }
    const toggleEmployment = () => {
        setIsEmployed(!isEmployed)
    }




    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set name</button>
            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
            <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployment}>Toggle Employement</button>
        </div>
    )
}

export default MyComponent;