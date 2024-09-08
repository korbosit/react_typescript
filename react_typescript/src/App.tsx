import "./App.css";
import { List } from "./components/generics/List";

function App() {
    return (
        <div className="App">
            {/* <List
                items={["Vova", "Sveto444ka", "Alfochka"]}
                onClick={(item) => console.log(item)}
            />
            <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
            <List
                items={[
                    {
                        id: 1,
                        first: "Bruce ",
                        last: "Lee",
                    },
                    {
                        id: 2,
                        first: "Bruce ",
                        last: "Willis",
                    },
                    {
                        id: 3,
                        first: "Michael ",
                        last: "Jordan",
                    },
                ]}
                onClick={(item) => console.log(item)}
            />
        </div>
    );
}

export default App;
