import "./App.css";
import chef from "./images/chef.jpg";
import {useState, useReducer} from "react";
function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}
const items = [
  "Macaroni and Cheese",
  "Salmon with Potatoes",
  "Tofu with Vegetables",
  "Minestrone Soup"
];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish
}));

function Main({ dishes, openStatus, onStatus }) {
  return (
    <>
      <div>
        <h2>Welcome to this beautiful restaurant!</h2>
        <button onClick={() => onStatus(!openStatus)}>Child button</button>
      </div>
      <main>
        <img
          src={chef}
          height={200}
          alt="A photo of a smiling chef owner"
        />
        <ul>
          {dishes.map((dish) => (
            <li
              key={dish.id}
              style={{ listStyleType: "none" }}
            >
              {dish.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

function App() {
  // const [status, setStatus] = useState(true);
  const [status, toggle] = useReducer(
    (status) => !status,
    true
  )
  console.log(status);
  return (
    <div>
      <h1> The kitchen is {status ? "open" : "close"}</h1>
      <button onClick={toggle}>
        {status ? "close" : "open"} restaurant
      </button>
      <Header name="Alex" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} openStatus={status} onStatus={toggle}/>
    </div>
  );
}

export default App;
