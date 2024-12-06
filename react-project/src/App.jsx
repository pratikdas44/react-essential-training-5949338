import "./App.css";

let language = "javascript";

function Header({name}){
  return (
    <header>
      <h1>Kitchen {name} </h1>
    </header>
  )
}
const details = ["item1","item2","item3"]

const detailObjects = details.map((dish, i) => ({
  id: i,
  title: dish
}))

function Main({details}){
  return (
    <ul>
      {details.map((detail) => (
        <li ke={detail.id}>{detail.title}</li>
      ))}
    </ul>
  )
}
function App() {
  return (
  <div>
    <Header name="alex" year="2024"/>
    <Main details={detailObjects}/>
  </div>
  );
}

export default App;
