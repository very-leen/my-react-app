function Button() {
    //const handleClick = () => console.log("OUU!")
    //const handleClick2 = (name) => console.log(`${name} stop clicking me`)

    // implementing callback with conditions

    // let count = 0;
    // const handleClick = (name) => {
    //     if (count < 3) {
    //         count++;
    //         console.log(`${name} you clicked me ${count} time\\s`)
    //     } else {
    //         console.log(`${name} stop clicking me!`)
    //     }
    // }

    //event object

    const handleClick = (e) => e.target.innerText = "OUU! 😮‍💨";

    return (
        //<button onClick={handleClick}>Click me 🍑</button>
        //<button onClick={() => handleClick2("Bro")}>Click me 🍑</button>
        // notice the '() =>' added before handelClick2 to avoid calling the function before click. To prevent this we can write the function call as an expression or callback
        //<button onClick={(e) => handleClick(e)}>Click me 🍑</button>
        <button onDoubleClick={(e) => handleClick(e)}>Click me 🍑</button>
    )
}

export default Button;