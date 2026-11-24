/////////////// Bro-code: Introduction to React \\\\\\\\\\\\\\

// import Header from './Header.jsx'
// import Footer from './Footer.jsx'
// import Food from './Food.jsx'

// function App() {

//   return (
//     <>
//       <Header />
//       < Food />
//       < Food />
//       <Footer />
//     </>
//   )
// }

///////////// export default App \\\\\\\\\\\\\\\\\\\\\\\\\\\\

//card components
// import Card from "./Card"

// function App() {
//   return (
//     <>
//       <Card />
//       <Card />
//       <Card />
//     </>
//   )
// }

// export default App;

///////////// props \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// import Student from "./Student.jsx"

// function App() {
//   return (
//     <>
//       <Student name="Bob" age={30} isStudent={true} />
//       <Student name="Patrick" age={42} isStudent={false} />
//       <Student name="Squidward" age="50" isStudent={false} />
//       <Student name="Sandy" age={27} isStudent={true} />
//     </>
//   )
// }

// export default App

/////////// Conditional rendering \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// import UserLogin from "./UserLogin.jsx"

// function App() {
//   return (
//     <>
//       <UserLogin isLoggedIn={true} username="Bob" />
//     </>
//   )
// }

// export default App;

////////// rendering lists \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// import List from "./List.jsx"

// function App() {
//   const fruits = [
//     { id: 1, name: "apple", calories: 95 },
//     { id: 2, name: "orange", calories: 45 },
//     { id: 3, name: "banana", calories: 105 },
//     { id: 4, name: "coconut", calories: 159 },
//     { id: 5, name: "pineapple", calories: 37 }
//   ];
//   const vegetables = [
//     // { id: 1, name: "potatoes", calories: 110 },
//     // { id: 2, name: "celery", calories: 15 },
//     // { id: 3, name: "carrots", calories: 25 },
//     // { id: 4, name: "corn", calories: 63 },
//     // { id: 5, name: "broccoli", calories: 50 }
//   ];

//   return (
//     //using ternary operator to render based on condtition
//     //<>
//     // {fruits.length > 0 ? <List item={fruits} category="Fruits" /> : null}
//     // {vegetables.length > 0 ? <List item={vegetables} category="Vegetables" /> : null}
//     //</>

//     //shorthand for ternary operator  (short-circuiting)
//     <>
//       {fruits.length > 0 && <List item={fruits} category="Fruits" />}
//       {vegetables.length > 0 && <List item={vegetables} category="Vegetables" />}

//     </>)
// }

// export default App

///////////// click events \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

import Button from "./Button.jsx"
import ProfilePicture from "./ProfilePicure.jsx";

function App() {
  return (
    //<Button />
    <ProfilePicture />
  )
}

export default App;