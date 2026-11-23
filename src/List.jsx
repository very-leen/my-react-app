// function List() {
//     const fruits = [
//         { id: 1, name: "apple", calories: 95 },
//         { id: 2, name: "orange", calories: 45 },
//         { id: 3, name: "banana", calories: 105 },
//         { id: 4, name: "coconut", calories: 159 },
//         { id: 5, name: "pineapple", calories: 37 }
//     ];
//     // sorting
//     //fruits.sort((a, b) => a.name.localeCompare(b.name))
//     // fruits.sort((a, b) => b.name.localeCompare(a.name)) //reverese alphabetic order
//     //fruits.sort((a, b) => a.calories - b.calories)
//     //fruits.sort((a, b) => b.calories - a.calories) //descending order

//     //filtering
//     //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
//     //const lowCalFruitsList = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>{lowCalFruit.name}: <b>{lowCalFruit.calories}</b></li>) //can also use &nbsp to add space between broken lines
//     //return <ol>{lowCalFruitsList}</ol>


//     const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: <b>{fruit.calories}</b></li>) //can also use &nbsp to add space between broken lines

//     return <ol>{listItems}</ol>
// }

//// reusable component  \\\\
function List(props) {
    const itemList = props.item;
    const listItems = itemList.map(item => <li key={item.id}>{item.name}: <b>{item.calories}</b></li>) //can also use &nbsp to add space between broken lines

    return (
        <>
            <h3 className="list-category">{props.category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    )
}

export default List