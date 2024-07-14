import './App.css';
// import Chicken from "./Chicken";
// import Greeter from './Greeter';
// import ListPicker from './ListPicker';
// import Die from './Die';
import DoubleDice from './DoubleDice';
import Heading from './Heading';
// import ColorList from "./ColorList";

function App() {
  return (
    <div>
      {/* <Heading color="magenta" text="welcome!" fontSize="20px" /> */}
      {/* <Heading color="teal" text="blah" fontSize="48px" /> */}

      <Heading color="red" text="Welcome!" fontSize="26px" />
      <Heading color="white" text="Welcome!" fontSize="20px" />
      <Heading color="black" text="Welcome!" fontSize="36px" />
      <Heading color="green" text="Welcome!" fontSize="56px" />

      <DoubleDice dieMax={6} />
      <DoubleDice dieMax={8} />
      <DoubleDice dieMax={10} />

      {/* <ColorList colors={["red", "pink", "purple", "teal"]} /> */}
      {/* <ColorList colors={["olive", "orangered", "slategrey"]} /> */}
      {/* <ListPicker values={[10, 9, 8]} /> */}
      {/* <ListPicker values={[1, 2, 3]} /> */}
      {/* <ListPicker values={['a', 'b', 'c']} /> */}
      {/* <Greeter name="Magnus" workplace="IBM" /> */}
      {/* <Die numSides={20} /> */}
      {/* <Die /> */}
      {/* <Die numSides={10} /> */}
    </div>
  );
}

export default App;
