import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
    const personName = {
        first: "Timofei",
        last: "Vladimirovich",
    };
    const nameList = [
        { first: "Beta ", last: "Betochka" },
        { first: "Alfa  ", last: "Alfochka" },
        { first: "Mikki  ", last: "Mini" },
    ];
    return (
        <>
            <Greet name="Vovo444ka" messageCount={20} isLoggedIn={false} />
            <Person name={personName} />
            <PersonList names={nameList} />
        </>
    );
}

export default App;
